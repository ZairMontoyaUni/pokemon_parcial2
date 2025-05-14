import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeListComponent } from './type-list/type-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':type', component: TypeListComponent }
];
@NgModule({
  imports: [
    CommonModule , RouterModule,
  ],
  declarations: [TypeListComponent],
  
})
export class TypeModule { }
