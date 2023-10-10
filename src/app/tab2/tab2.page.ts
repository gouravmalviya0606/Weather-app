import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  weatherForecast: any = {};
  isLoading: boolean = false;
  error: string = '';
  city: String = '';

  constructor(private service: HttpServiceService) {}

  ngOnInit() {
    this.getWeatherForecast(this.city.toString());
  }

  SearchWeather() {
    this.getWeatherForecast(this.city.toString());
  }

  getWeatherForecast(cityName: string) {
    this.isLoading = true;
    this.error = '';

    this.service.getWeatherForecast(cityName).subscribe(
      (data) => {
        this.weatherForecast = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Error fetching weather forecast data';
        this.isLoading = false;
        console.error('Error fetching weather forecast data:', error);
      }
    );
  }
}
