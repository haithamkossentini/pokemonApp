import { PokemonService } from './../pokemon.service'
import { Router } from '@angular/router'
import { Pokemon } from '../pokemon'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: 'list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  /*pokemonList: Pokemon[] = this.pokemonService.getPokemonList()
  pokemonSelected: Pokemon | undefined
*/
  pokemonList: Pokemon[]
  constructor(private router: Router, private pokemonService: PokemonService) {
    this.pokemonList = []
  }
  ngOnInit(): void {
    this.pokemonService
      .getPokemonList()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList))
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
