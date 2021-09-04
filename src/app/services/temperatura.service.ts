import { Injectable } from '@angular/core';

// 1.
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  // 2.
  constructor(private http: HttpClient) { }

  // 3.
  getData() {
    return this.http.get('https://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=5&lang=es&units=metric&appid=2f80ffd6bb02e9d8abfc2f88d059e299');
  }
}
