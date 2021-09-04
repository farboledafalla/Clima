// 26. Nuevo módulo creado

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 29. Importo módulo porque hice el llamado en 'imports'
import { AireRoutingModule } from './aire-routing.module';

// 31. Importo los componentes que vaya a declarar
import { CoordenadasComponent } from './pages/coordenadas/coordenadas.component';
import { DatosAireComponent } from './pages/datos-aire/datos-aire.component';
import { DatosAirePronosticoComponent } from './pages/datos-aire-pronostico/datos-aire-pronostico.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // 30. Declaro los componentes creados
    CoordenadasComponent,
    DatosAireComponent,
    DatosAirePronosticoComponent
  ],
  imports: [
    CommonModule,
    // 28. Importo modulo de rutas
    AireRoutingModule,
    GoogleMapsModule,
    FormsModule
  ]
})
export class AireModule { }
