import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-temperaturas',
  templateUrl: './lista-temperaturas.component.html',
  styleUrls: ['./lista-temperaturas.component.css']
})
export class ListaTempereaturasComponent implements OnInit {

  @Input() listTemp: any;

  constructor() { }

  ngOnInit(): void {
  }

}
