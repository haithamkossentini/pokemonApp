import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { POKEMONS } from '../mock-pokemon-list'
import { Pokemon } from '../pokemon'
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[]
  pokemon: Pokemon | undefined
  constructor(private route: ActivatedRoute) {
    this.pokemonList = POKEMONS
  }
  ngOnInit() {
    this.pokemonList = POKEMONS
    console.log(this.pokemonList)
    console.log(this.route)

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
    console.log(pokemonId)

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      )
      console.log(this.pokemon)
    }
  }
}
