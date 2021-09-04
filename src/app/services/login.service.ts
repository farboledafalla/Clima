import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any;
  password: any;
  isLogged: boolean = false;
  mostrarOcultar: boolean = false;

  constructor() { 
    this.user = localStorage.getItem("user");
    this.password = localStorage.getItem("password");
  }
}
