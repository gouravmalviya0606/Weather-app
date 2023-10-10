import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  city: String = '';
  weatherData: any = {};
  isLoading = false;
  error = 'false';
  constructor(private service: HttpServiceService) {}

  SearchWeather() {
    this.isLoading = true;
    this.error = '';
    this.service.getWeather(this.city.toString()).subscribe(
      (res) => {
        this.weatherData = res;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Error fetching current weather data';
        this.isLoading = false;
        console.error('Error fetching current weather data:', error);
      }
    );
  }

  getWeatherIconUrl(iconCode: string): string {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  }
}
