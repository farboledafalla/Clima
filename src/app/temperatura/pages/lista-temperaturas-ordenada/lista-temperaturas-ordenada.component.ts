import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-temperaturas-ordenada',
  templateUrl: './lista-temperaturas-ordenada.component.html',
  styleUrls: ['./lista-temperaturas-ordenada.component.css']
})
export class ListaTemperaturasOrdenadaComponent implements OnInit {

  @Input() listTempSort: any;

  constructor() { }

  ngOnInit(): void {
  }

}
