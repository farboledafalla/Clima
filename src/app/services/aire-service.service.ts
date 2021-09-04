import { Injectable } from '@angular/core';

// 1. Importar Módulo
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AireServiceService {

  // 3. Definición de propiedades
  apiKey = '2f80ffd6bb02e9d8abfc2f88d059e299';
  URI: string = '';
  URI_FORECAST: string = "";

  // 2. Instanciar para poder usar
  constructor(private http: HttpClient) {

    // 4. Se forma la URI - http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=
    this.URI = `https://api.openweathermap.org/data/2.5/air_pollution?appid=${this.apiKey}&units=metric&lang=es&lat=`;

    this.URI_FORECAST = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?appid=${this.apiKey}&lat=`;
  }

  // 5. Función que hace solicitud http
  getPollution(latitud: string, longitud: string) {
    return this.http.get(`${this.URI}${latitud}&lon=${longitud}`);
  }

  getPollutionForecast(latitud: string, longitud: string) {
    return this.http.get(`${this.URI_FORECAST}${latitud}&lon=${longitud}`);
  }
}
