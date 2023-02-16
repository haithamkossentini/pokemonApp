import { POKEMONS } from './mock-pokemon-list'
import { Pokemon } from './pokemon'
import { Injectable } from '@angular/core'
import { Observable, catchError, tap, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}
  getPokemonList(): Observable<Pokemon[]> {
    //return POKEMONS
    return this.http.get<Pokemon[]>('api/pokemon').pipe(
      tap((response) => console.table(response)),
      catchError((error) => this.handleError(error, []))
    )
  }
  // getPokemonById(pokemonId: number): Pokemon | undefined {
  // return POKEMONS.find((pokemon) => pokemon.id === pokemonId)
  //}
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }
  private log(response: Pokemon[] | Pokemon | undefined) {
    console.table(response)
  }
  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Poison',
      'Electrik',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ]
  }
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.put<Pokemon>('api/pokemon', pokemon, httpOptions).pipe(
      tap((response: Pokemon) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }
  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemon /${pokemonId}`).pipe(
      tap(() => this.log(undefined)),
      catchError((error) => this.handleError(error, null))
    )
  }
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.post<Pokemon>('api/pokemon', pokemon, httpOptions).pipe(
      tap((response: Pokemon) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }
  searchPokemonList(term: string): Observable<Pokemon[]> {
    if (term.length <= 1) {
      return of([])
    }
    return this.http.get<Pokemon[]>(`api/pokemon/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }
}
