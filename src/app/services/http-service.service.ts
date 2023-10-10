import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private apiKey = '5130dee0b367794af78300e4b48fd3b2';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeatherForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
