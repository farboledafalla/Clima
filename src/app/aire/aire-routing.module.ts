// 27. Nuevo módulo de rutas creado

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { CoordenadasComponent } from './pages/coordenadas/coordenadas.component';



// 32. Defino mis rutas
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: 'coordenadas', component: CoordenadasComponent},
      {path: '**', redirectTo: 'coordenadas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AireRoutingModule { }
