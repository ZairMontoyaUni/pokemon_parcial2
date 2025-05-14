// type-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon/pokemon.service';
import { PokemonDetailDto } from '../../pokemon/pokemonDetailDto';


@Component({
  selector: 'app-type-list',
  standalone: false,
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  typeName!: string;
  pokemons: PokemonDetailDto[] = [];
  cargando = true;
  error: string | null = null;
  viewMode: 'list' | 'grid' = 'list';


  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

   

  // ngOnInit(): void {
  //   this.typeName = this.route.snapshot.paramMap.get('type')!;

  //   this.pokemonService.getPokemonsByType(this.typeName).subscribe({
  //     next: (pokemons: any) => {
  //       this.pokemons = pokemons;
  //       this.cargando = false;
  //     },
  //     error: (err: any )=> {
  //       this.error = 'No se pudieron cargar los datos.';
  //       console.error(err);
  //       this.cargando = false;
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.typeName = this.route.snapshot.paramMap.get('type')!;
    this.pokemonService.getPokemonsByTypeFull(this.typeName).subscribe({
      next: (pokes) => {
        console.log('Detalles completos recibidos:', pokes);
        this.pokemons = pokes;
        this.cargando = false;
      },
      error: (err) => {
        this.error = `No se pudieron cargar los pokémons de tipo ${this.typeName}.`;
        console.error(err);
        this.cargando = false;
      }
    });
  }

  showList(): void {
    this.viewMode = 'list';
  }

  showGrid(): void {
    this.viewMode = 'grid';
  }
}