import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router, public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  registro(user: HTMLInputElement, password: HTMLInputElement) {
    console.log("Ingresó a la función registro()");
    if(user.value && password.value) {
      // let usuario = localStorage.getItem("user");
      // let password = localStorage.getItem("password");

      localStorage.setItem("user", user.value);
      localStorage.setItem("password", password.value);

      this.loginService.isLogged = true;
      this.appComponent.viewHiddenLogout = true;

      this.router.navigateByUrl("/clima/ciudad");
      
    }
    return false;
  }


}
