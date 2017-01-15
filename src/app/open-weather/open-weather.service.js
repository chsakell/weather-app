"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var OpenWeatherService = (function () {
    function OpenWeatherService(http) {
        this.http = http;
    }
    OpenWeatherService.prototype.search = function (term) {
        console.log('searching..');
        return this.http
            .get("api.openweathermap.org/data/2.5/weather?q=" + term + "&appid=3573a2123da5333f9c986be97e29daad")
            .map(function (r) {
            //console.log(r.json());
            return r.json().data;
        })
            .catch(function (error) {
            console.error('An friendly error occurred', error);
            return Observable_1.Observable.throw(error.message || error);
        });
    };
    OpenWeatherService.prototype.getWeather = function (term) {
        return this.http
            .get("http://api.openweathermap.org/data/2.5/weather?q=" + term + "&appid=3573a2123da5333f9c986be97e29daad")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OpenWeatherService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return OpenWeatherService;
}());
OpenWeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OpenWeatherService);
exports.OpenWeatherService = OpenWeatherService;
//# sourceMappingURL=open-weather.service.js.map