// 11. Una vez creado este modulo, vamos a implementar las rutas principales para el módulo clima, pero secundarias el modulo 'clima'

import { NgModule } from '@angular/core';

// 15. Importamos 'Routes' para darle el tipo a la constante de las rutas
// 18. Importar 'RouterModule' porque se está importanto en los 'imports'
import { RouterModule, Routes } from '@angular/router';

// 16. Importar el componente llamado abajo
import { CiudadComponent } from './pages/ciudad/ciudad.component';

// Guard
import { AuthGuard } from './../guards/auth.guard';

// 12. Eliminamos el import del módulo 'CommonModule'

// 14. Definimos la constante con nuestras rutas hijas, es decir, las del módulo
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      // 15. Componente que se abrira al poner 'ciudad' en la barra de direcciones
      { path: 'ciudad', component: CiudadComponent },
      { path: '**', redirectTo: 'ciudad' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    // 13. Eliminamos el CommonModule de los imports
    // 17. Importar RouterModule
    // 19. Estas son rutas principales de este módulo, pero son hijas (forChild) del módulo principal 'app-routing.module.ts'
    RouterModule.forChild( routes )
  ]
})
export class ClimaRuotingModule { }

// 20. Este sistema de rutas debo importarlo desde el sistema de rutas principal del modulo, es decir, 'clima.module.ts'