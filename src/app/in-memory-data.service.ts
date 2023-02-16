import { POKEMONS } from './pokemon/mock-pokemon-list'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const pokemon = POKEMONS
    return { pokemon }
  }
}
