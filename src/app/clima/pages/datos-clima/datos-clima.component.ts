import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-clima',
  templateUrl: './datos-clima.component.html',
  styleUrls: ['./datos-clima.component.css']
})
export class DatosClimaComponent implements OnInit {

  @Input() weather: any;
  @Input() logoClima: any;

  constructor() { }

  ngOnInit(): void {}

}
