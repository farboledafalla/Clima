import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(user: HTMLInputElement, password: HTMLInputElement) {
    let usuario = localStorage.getItem("user");

    if(usuario == user.value) {
      localStorage.setItem("password", password.value);
    } else {
      console.log("El usuario no existe!")
    }
    return false;
  }

}
