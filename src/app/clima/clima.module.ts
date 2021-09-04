import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 22. Debo importar el modulo de rutas secundario o rutas hijas porque lo llamé en los 'imports'
import { ClimaRuotingModule } from './clima-ruoting.module';

// 8. Componentes creados en el módulo clima
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { CiudadUbicacionComponent } from './pages/ciudad-ubicacion/ciudad-ubicacion.component';
import { DatosClimaComponent } from './pages/datos-clima/datos-clima.component';

import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    // 9. Declaraciones indicando que estos componentes son parte del módulo 'clima'
    CiudadComponent,
    CiudadUbicacionComponent,
    DatosClimaComponent
  ],
  imports: [
    CommonModule,
    // 21. Importo el modulo de rutas secundarias o hijas
    ClimaRuotingModule,
    GoogleMapsModule
  ]
})
export class ClimaModule { }

// 10. Debo crear un sistema de rutas propio para este módulo

// 23. Este módulo 'clima.module.ts' es el que voy a usar para cargar estos componentes de manera perezosa (->app.component.html)