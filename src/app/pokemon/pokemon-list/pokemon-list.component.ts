import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import * as bootstrap from 'bootstrap';

interface TypeCount {  
  name: string;
  count: number;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  standalone: false,
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemon: PokemonDetailDto[] = [];
  pokemonSeleccionado: PokemonDetailDto | null = null;
  typeCounts: TypeCount[] = [];   
  cargando = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemones();   
    console.log('Emitido nuevo array:', this.pokemon); 
  }

  loadPokemones(): void {
    // 1) Inicio la carga
    this.cargando = true;

    // 2) Cargo los pokémons síncrono (tu hack del service)
    this.pokemon = this.pokemonService.getPokemons();

    // 3) Espero un ratito y luego recalculo y quito el loading
    setTimeout(() => {
      this.updateTypeCounts();
      this.cargando = false;   // ¡ya terminó de “cargar”!
    }, 5000);
  }


  /** Abre el modal con el Pokémon seleccionado */
  verDetalle(p: PokemonDetailDto): void {
    this.pokemonSeleccionado = p;
    const modalEl = document.getElementById('pokemonModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  /** Devuelve los nombres de las habilidades como string */
  getAbilitiesNames(abilities: { ability: { name: string } }[]): string {
    return abilities.map(ab => ab.ability.name).join(', ');
  }

  /** Devuelve los nombres de los tipos como string */
  getTypesNames(types: { type: { name: string } }[]): string {
    return types.map(t => t.type.name).join(', ');
  }

   /** Recorre todos los pokémons y suma cuántos de cada tipo hay */
  public updateTypeCounts(): void {
    const mapCounts = new Map<string, number>();
    this.pokemon.forEach(p => {
      p.types.forEach(t => {
        const typeName = t.type.name;
        mapCounts.set(typeName, (mapCounts.get(typeName) || 0) + 1);
      });
    });
    this.typeCounts = Array.from(mapCounts.entries())
      .map(([name, count]) => ({ name, count }))
      // opcional: ordena alfabéticamente
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  getTypeClass(typeName: string): string {
    const cssClass = `type-${typeName}`;
    return this.typeCounts.some(tc => tc.name === typeName)
      ? cssClass
      : 'type-default';
  }


}
