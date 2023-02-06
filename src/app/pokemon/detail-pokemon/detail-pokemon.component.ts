import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { POKEMONS } from '../mock-pokemon-list'
import { Pokemon } from '../pokemon'
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[]
  pokemon: Pokemon | undefined
  constructor(private route: ActivatedRoute, private router: Router) {
    this.pokemonList = POKEMONS
  }
  ngOnInit() {
    this.pokemonList = POKEMONS
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      )
      console.log(this.pokemon)
    }
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }
}
