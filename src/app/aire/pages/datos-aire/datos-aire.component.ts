import { Component, OnInit, Input } from '@angular/core';

// Importar el servicio
import { AireServiceService } from 'src/app/services/aire-service.service';

@Component({
  selector: 'app-datos-aire',
  templateUrl: './datos-aire.component.html',
  styleUrls: ['./datos-aire.component.css']
})
export class DatosAireComponent implements OnInit {


  pollutionForecast: any;
  forecast: Array<any> = [];

  @Input() pollution: any;
  @Input() valorLat: any;
  @Input() valorLon: any;

  constructor(private aireService: AireServiceService) { }

  ngOnInit(): void {
  }

  getPollutionForecast(latitud: string, longitud: string) {
    this.aireService.getPollutionForecast(latitud, longitud)
      .subscribe(
        resFor => {
          console.log(resFor);
          this.pollutionForecast = resFor;
          
          this.forecast[0] = this.pollutionForecast.list[100].components.co;
          this.forecast[1] = this.pollutionForecast.list[100].components.no;
          this.forecast[2] = this.pollutionForecast.list[100].components.no2;
          this.forecast[3] = this.pollutionForecast.list[100].components.o3;
          this.forecast[4] = this.pollutionForecast.list[100].components.so2;
          this.forecast[5] = this.pollutionForecast.list[100].components.pm2_5;
          this.forecast[6] = this.pollutionForecast.list[100].components.pm10;
          this.forecast[7] = this.pollutionForecast.list[100].components.nh3;
        },
        errFor => console.log(errFor)
      )
  }

  submitForecast(latitud: HTMLInputElement, longitud: HTMLInputElement) {

    this.getPollutionForecast(latitud.value, longitud.value);
    return false;
  }

}
