import { Router } from '@angular/router'
import { Pokemon } from '../pokemon'
import { Component, OnInit } from '@angular/core'
import { POKEMONS } from '../mock-pokemon-list'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: 'list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined

  constructor(private router: Router) {}
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
