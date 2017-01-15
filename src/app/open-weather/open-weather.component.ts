import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Weather } from './../shared/weather';

import { OpenWeatherService } from './open-weather.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'open-weather',
    templateUrl: 'open-weather.component.html',
    styleUrls: ['open-weather.component.css']
})
export class OpenWeatherComponent implements OnInit {
    weatherList: Weather[] = [];
    city: string;

    constructor(
        private router: Router,
        private openWeatherService: OpenWeatherService) { }

    search(): void {
        let itemExists: boolean = false;

        this.openWeatherService.getWeather(this.city)
            .then(weather => {
                this.weatherList.forEach(element => {
                    if (weather.name === element.name) {
                        itemExists = true;
                    }
                });

                if (!itemExists) {
                    this.weatherList.push(weather);
                    this.city = '';
                }
            });
    }

    ngOnInit(): void {  }

    removeWidget(widget: any) {
        let weatherItem = widget.value as Weather;

        // Simple implementation to remove a specific item
        let tempWeatherItems = this.weatherList.slice(0);
        this.weatherList = [];
        tempWeatherItems.forEach(item => {
            if (JSON.stringify(weatherItem) !== JSON.stringify(item))
                this.weatherList.push(item);
        });
    }
}
