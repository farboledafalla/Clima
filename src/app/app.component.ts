// 42. Importar OnInit
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LoginService } from './services/login.service';

// 44. Importat el servicio y debo instanciarlo en el constructor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 41. Llamar al servicio justo cuando se cargue la clase, usamos OnInit
export class AppComponent implements OnInit {

  title: string = "Clima";

  viewHiddenLogout: boolean = true;


  // 46. Instanciar el servicio importado
  constructor(private loginService: LoginService, private router: Router) {}

  // 43. Implementar OnInit
  ngOnInit() {
    this.viewHiddenLogout = this.loginService.mostrarOcultar;
    // 45. Quiero que desde el servicio pida los datos, debo de importar el HttpClientModule en 'app.module.ts' porque sin eso da error
    // 46. Ahora hay que permitirle al usuario ingresar los datos a través de un formulario
  }

  exit() {
    this.loginService.isLogged = false;
    this.router.navigateByUrl("login");
    this.viewHiddenLogout = false;
  }

  // 49. 
  
}
