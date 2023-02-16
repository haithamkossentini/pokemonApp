import { Pokemon } from './../pokemon'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [],
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon
  constructor() {
    this.pokemon = new Pokemon()
  }
  ngOnInit(): void {
    this.pokemon = new Pokemon()
  }
}
