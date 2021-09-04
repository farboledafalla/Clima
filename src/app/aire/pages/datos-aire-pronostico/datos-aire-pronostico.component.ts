import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-aire-pronostico',
  templateUrl: './datos-aire-pronostico.component.html',
  styleUrls: ['./datos-aire-pronostico.component.css']
})
export class DatosAirePronosticoComponent implements OnInit {

  @Input() pollutionForecast: any;
  @Input() aire: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
