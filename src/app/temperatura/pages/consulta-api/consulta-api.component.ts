import { Component, OnInit } from '@angular/core';

import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-consulta-api',
  templateUrl: './consulta-api.component.html',
  styleUrls: ['./consulta-api.component.css']
})
export class ConsultaApiComponent implements OnInit {

  data: any;
  datos: Array<any> = [];

  constructor(private temperaturaService: TemperaturaService) { }

  ngOnInit(): void {
    this.temperaturaService.getData()
      .subscribe(
        res => {
          console.log(res);
          this.data = res;
          for (let i = 0; i < 5; i++) {
            this.datos[i] = this.data.list[i].main.temp;
          }
        },
        err => console.log(err)
      );

  }


}
