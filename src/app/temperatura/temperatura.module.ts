import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturaRoutingModule } from './temperatura-routing.module';
import { ConsultaApiComponent } from './pages/consulta-api/consulta-api.component';
import { ListaTempereaturasComponent } from './pages/lista-temperaturas/lista-temperaturas.component';
import { ListaTemperaturasOrdenadaComponent } from './pages/lista-temperaturas-ordenada/lista-temperaturas-ordenada.component';

import { SortPipe } from '../pipes/sort.pipe';

import { DirectiveColorDirective } from '../directives/directive-color.directive';


@NgModule({
  declarations: [
    ConsultaApiComponent,
    ListaTempereaturasComponent,
    ListaTemperaturasOrdenadaComponent,
    SortPipe,
    DirectiveColorDirective
  ],
  imports: [
    CommonModule,
    TemperaturaRoutingModule
  ]
})
export class TemperaturaModule { }
