import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ConsultaApiComponent } from './pages/consulta-api/consulta-api.component';

// 33. Defino mis rutas para este módulo
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: 'consulta-api', component: ConsultaApiComponent},
      {path: '**', redirectTo: 'consulta-api'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemperaturaRoutingModule { }
