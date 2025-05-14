import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    CommonModule ,  RouterModule,
  ],
  declarations: [PokemonListComponent]
})
export class PokemonModule { }
