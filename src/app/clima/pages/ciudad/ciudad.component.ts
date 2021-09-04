import { Component, OnInit } from '@angular/core';

// 44. 
import { ClimaServiceService } from '../../../services/clima-service.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  viewMap: boolean = false;

  datosUbicacion: Array<any> = [];
  datosClimaticos: Array<any> = [];
  
  // Google Maps
  title = "Gmaps";

  position = {
    lat: 4.5339,
    lng: -75.6811
  };

  label = {
    color: "white",
    text: "Marcador"
  };

  // 49.
  weather: any;
  logoWeather: any;

  // 46
  constructor(private climaService: ClimaServiceService) { }

  ngOnInit(): void {}

  // 47.
  getWeather(cityName: string, countryCode: string) {
    // 45.
    // 46.
    this.climaService.getWeather(cityName, countryCode)
    .subscribe(
      // res => console.log(res),
      res => {
        console.log(res);
        this.weather = res;

        this.logoWeather = this.weather.weather[0].icon;

        for(let i=0;i<10;i++) {
          if(i == 0) {
            this.datosUbicacion[i] = this.weather.id;
          }
          else if(i == 1) {
            this.datosUbicacion[i] = this.weather.coord.lat;
          }
          else if(i == 2) {
            this.datosUbicacion[i] = this.weather.coord.lon;
          }
          else if(i == 3) {
            this.datosClimaticos[i-3] = this.weather.weather[0].description;
          }
          else if(i == 4) {
            this.datosClimaticos[i-3] = this.weather.main.temp_min;
          }
          else if(i == 5) {
            this.datosClimaticos[i-3] = this.weather.main.temp;
          }
          else if(i == 6) {
            this.datosClimaticos[i-3] = this.weather.main.temp_max;
          }
          else if(i == 7) {
            this.datosClimaticos[i-3] = this.weather.main.humidity;
          }
          else if(i == 8) {
            this.datosClimaticos[i-3] = this.weather.main.pressure;
          }
          else if(i == 9) {
            this.datosClimaticos[i-3] = this.weather.wind.speed;
          }
        }

        this.position.lat = this.weather.coord.lat;
        this.position.lng = this.weather.coord.lon;
        this.viewMap = true;
      },
      err => console.log(err)
    )
  }
  
  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    // console.log(cityName.value, countryCode.value);
    // 48.
    this.getWeather(cityName.value, countryCode.value);
    cityName.value = '';
    countryCode.value = '';
    cityName.focus();
    
    return false;
  }

}
