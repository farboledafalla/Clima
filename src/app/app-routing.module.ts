// Archivo de rutas

import { NgModule } from '@angular/core';

// 2. Debo importar estos módulos
import { RouterModule, Routes } from '@angular/router';

// 1. Rutas principales de mi aplicación, Angular debe saber cuales son mis rutas y saber que hacer cuando encuentra un '/' en la barra
const routes: Routes = [
  // 26. Defino las rutas principales del modulo creado 'clima'
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaModule )
  },
  {
    path: 'aire',
    loadChildren: () => import('./aire/aire.module').then( m => m.AireModule )
  },
  // 34. Agrego la ruta del módulo mapa
  {
    path: 'temperatura',
    loadChildren: () => import('./temperatura/temperatura.module').then( m => m.TemperaturaModule )
  },
  // 27. Defino a donde me lleve si no ingreso una ruta correcta despues del slash '/'
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    // 3. Defino mis rutas principales usando el método
    RouterModule.forRoot( routes )
  ],
  exports: [
    // 4. Solo exporto el módulo sin usar el 'forRoot' 
    RouterModule
  ]
})
export class AppRoutingModule { }

// 5. Para que Angular sepa de este archivo y pueda usarlo, debo importarlo desde 'app.module.ts'