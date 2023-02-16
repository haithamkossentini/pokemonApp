import { PokemonService } from './../pokemon.service'
import { Observable, Subject } from 'rxjs'
import { Pokemon } from './../pokemon'
import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent {
  searchTerms = new Subject<string>()
  pokemons$: Observable<Pokemon[]>
  constructor(private router: Router, private PokemonService: PokemonService) {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.PokemonService.searchPokemonList(term))
    )
  }
  ngOnInit() {
    
  }
  search(term: string) {
    this.searchTerms.next(term)
  }
  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link)
  }
}
