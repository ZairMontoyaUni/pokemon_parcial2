import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { TypeListComponent } from './type/type-list/type-list.component';

const routes: Routes = [


  { path: '', component: PokemonListComponent },
  { path: 'pokemones', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'types',     loadChildren: () => import('./type/type.module').then(m => m.TypeModule) },
  { path: 'types/:type', component: TypeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
