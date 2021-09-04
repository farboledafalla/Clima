import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 6. Modulo personalizado de rutas que cree en el Angular-CLI
import { AppRoutingModule } from './app-routing.module';

// 46. Modulo para que la aplicación lo conozca y poder hacer peticiones al servidor
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { DirectiveColorDirective } from './directives/directive-color.directive';
// import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // 7. Debo agregarlo en los imports y asi Angular conoce que tiene un sistema de rutas. Ahora debo crear los módulos, archivos de rutas, componentes y todo lo demás.
    AppRoutingModule,
    // 47. Para usar el modulo importado debo ponerlo aqui
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
