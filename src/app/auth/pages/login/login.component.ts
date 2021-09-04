import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

// import { AppModule } from 'src/app/app.module';
// import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService, public router: Router, public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  entrar(user: HTMLInputElement, password: HTMLInputElement) {
    // console.log(user.value, password.value);
    // return false;
    if(this.loginService.user == user.value && this.loginService.password == password.value) {
      // console.log("El usuario si existe!!!");
      this.loginService.isLogged = true;
      this.appComponent.viewHiddenLogout = true;
      this.router.navigateByUrl("clima");
    } else {
      console.log("Error en el login!");
      user.focus();
    }
    return false;
  }


}
