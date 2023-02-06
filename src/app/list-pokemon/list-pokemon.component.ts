import { Pokemon } from '../pokemon'
import { Component, OnInit } from '@angular/core'
import { POKEMONS } from '../mock-pokemon-list'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: 'list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent  {

  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined

  selectPokemon(pokemonId: String) {

    const id = +pokemonId
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == id
    )
    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`)
      this.pokemonSelected = pokemon
    } else {
      console.log(`Vous avez demandé un pokémon  qui n'existe pas`)
      this.pokemonSelected = pokemon
    }
  }
}
