import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetailDto } from './pokemonDetailDto';
import { environment } from '../../environments/environment.development';
import { forkJoin, Observable, switchMap, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http : HttpClient) { }

  getPokemons(): PokemonDetailDto[] {
  const pokemons: PokemonDetailDto[] = [];
  for (let i = 1; i <= 1000; i++) {
    this.getPokemon(i.toString()).subscribe(pokemon => {
      pokemons.push(pokemon);
      console.log(`Insertado Pokémon #${pokemon.id}`, pokemons); 
      
    });
  }
  console.log('Array devuelto inmediatamente:', pokemons);
  return pokemons;
}


  getPokemon(id : string): Observable<PokemonDetailDto> {
    return this.http.get<PokemonDetailDto>(`${this.apiUrl}/${id}`);
  }

  getPokemonsByTypeFull(type: string): Observable<PokemonDetailDto[]> {
    return this.http
      .get<{ pokemon: { pokemon: { name: string } }[] }>(`https://pokeapi.co/api/v2/type/${type}`)
      .pipe(
        // extraer array de nombres
        map(resp => resp.pokemon.map(e => e.pokemon.name)),
        // por cada nombre lanzar la petición /pokemon/{name}, esperar a todas
        switchMap(names =>
          forkJoin(
            names.map(name =>
              this.http.get<PokemonDetailDto>(`${this.apiUrl}/${name}`)
            )
          )
        )
      );
  }

}
