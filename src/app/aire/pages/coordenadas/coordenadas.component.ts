import { Component, OnInit } from '@angular/core';

// 1. Importar servicio
import { AireServiceService } from 'src/app/services/aire-service.service';

@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css']
})
export class CoordenadasComponent implements OnInit {

  viewMap: boolean = false;

  // Google Maps
  title = "Gmaps";

  lati: string = "";
  long: string = "";

  position = {
    lat: 4.5339,
    lng: -75.6811
  };

  label = {
    color: "white",
    text: "Marcador"
  };

  // 7. Defino la propiedad donde quedará almacenada el objeto JSON enviado por el servidor
  pollution: any;

  pollutionArray: Array<any> = [];
  valorLat: any;
  valorLon: any;


  // 2. Instanciamos el servicio para poder usarlo en la clase
  constructor(private aireService: AireServiceService) { }

  ngOnInit(): void {
  }

  // 5. Función que recibe los datos y los envía al servicio
  getPollution(latitud: string, longitud: string) {

    // 6.
    this.aireService.getPollution(latitud, longitud)
      .subscribe(
        // res => console.log(res),
        res => {
          console.log(res);
          this.pollution = res;

          this.valorLat = this.pollution.coord.lat;
          this.valorLon = this.pollution.coord.lon;

          for (let i = 0; i < 10; i++) {
            if (i == 0) {
              this.pollutionArray[i] = this.pollution.list[0].main.aqi;
            }
            else if (i == 1) {
              this.pollutionArray[i] = this.pollution.list[0].components.co;
            }
            else if (i == 2) {
              this.pollutionArray[i] = this.pollution.list[0].components.no;
            }
            else if (i == 3) {
              this.pollutionArray[i] = this.pollution.list[0].components.no2;
            }
            else if (i == 4) {
              this.pollutionArray[i] = this.pollution.list[0].components.o3;
            }
            else if (i == 5) {
              this.pollutionArray[i] = this.pollution.list[0].components.nh3;
            }
            else if (i == 6) {
              this.pollutionArray[i] = this.pollution.list[0].components.so2;
            }
            else if (i == 7) {
              this.pollutionArray[i] = this.pollution.list[0].components.pm2_5;
            }
            else if (i == 8) {
              this.pollutionArray[i] = this.pollution.list[0].components.pm10;
            }
          }
        },
        err => console.log(err)
      )
  }

  // 3. Función que recoge los datos del formulario y a través de otra función los entrega al servicio para que haga la petición http
  submitPollution(latitud: HTMLInputElement, longitud: HTMLInputElement) {

    this.position.lat = parseFloat(latitud.value);
    this.position.lng = parseFloat(longitud.value);
    this.viewMap = true;

    // 4. Llamado a la función para entregar los datos
    this.getPollution(latitud.value, longitud.value);


    latitud.value = '';
    longitud.value = '';
    latitud.focus();
    return false;
  }

}
