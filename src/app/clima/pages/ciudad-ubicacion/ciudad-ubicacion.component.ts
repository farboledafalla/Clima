import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciudad-ubicacion',
  templateUrl: './ciudad-ubicacion.component.html',
  styleUrls: ['./ciudad-ubicacion.component.css']
})
export class CiudadUbicacionComponent implements OnInit {

  @Input() location: any;

  constructor() {  }

  ngOnInit(): void {}

}
