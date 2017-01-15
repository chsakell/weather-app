import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Weather } from './../shared/weather';

@Injectable()
export class OpenWeatherService {
    constructor(private http: Http) { }

    search(term: string): Observable<Weather> {
        console.log('searching..');
        return this.http
            .get(`api.openweathermap.org/data/2.5/weather?q=${term}` + `&appid=3573a2123da5333f9c986be97e29daad`)
            .map((r: Response) => //{
                //console.log(r.json());
                r.json().data as Weather
            //}
            )
            .catch((error: any) => {
                console.error('An friendly error occurred', error);
                return Observable.throw(error.message || error);
            });
    }

    getWeather(term: string): Promise<Weather> {
        return this.http
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${term}` + "&appid=3573a2123da5333f9c986be97e29daad")
            .toPromise()
            .then(response => response.json() as Weather)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
