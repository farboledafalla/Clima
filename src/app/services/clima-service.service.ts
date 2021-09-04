import { Injectable } from '@angular/core';

// 35. Importo módulo para hacer peticiones 'http'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaServiceService {

  // 38. Propiedad para el id del API
  apiKey = '2f80ffd6bb02e9d8abfc2f88d059e299';
  // 36. Propiedad para almacenar la dirección
  URI: String = '';

  // 36. Instanciar el módulo para poder usarlo
  constructor(private http: HttpClient) {
    // 37. Usamos las tildes especiales de JavaScript y concatenamos la variable que contiene la clave del API
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&lang=es&q=`;
  }

  // 39. Metodo para obtener los datos del clima y me devuelve un objeto JSON con los datos del clima
  getWeather(cityName: String, countryCode: String) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}

// 40. Ahora vamos a usar este servicio