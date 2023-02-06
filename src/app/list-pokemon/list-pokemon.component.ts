import { Pokemon } from '../pokemon'
//pour implementer ngOninit on doit la'ajouter à  coté de component
import { Component, OnInit } from '@angular/core'
import { POKEMONS } from '../mock-pokemon-list'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: 'list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  //pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce']
  //pokemonList c'est une liste de pokemons
  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined
  ngOnInit() {
    //pour afficher un tableau console.table
    console.table(this.pokemonList)
    //this.selectPokemon(this.pokemonList[0])
  }
  selectPokemon(pokemonId: String) {
    //en javascript null quand il est casté en nombre vaut 0
    //+ pour transformer en nombre
    //const index: number = +(event.target as HTMLInputElement).value
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
