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
var router_1 = require("@angular/router");
var open_weather_service_1 = require("./open-weather.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var OpenWeatherComponent = (function () {
    function OpenWeatherComponent(router, openWeatherService) {
        this.router = router;
        this.openWeatherService = openWeatherService;
        this.weatherList = [];
    }
    OpenWeatherComponent.prototype.search = function () {
        var _this = this;
        var itemExists = false;
        this.openWeatherService.getWeather(this.city)
            .then(function (weather) {
            _this.weatherList.forEach(function (element) {
                if (weather.name === element.name) {
                    itemExists = true;
                }
            });
            if (!itemExists) {
                _this.weatherList.push(weather);
                _this.city = '';
            }
        });
    };
    OpenWeatherComponent.prototype.ngOnInit = function () { };
    OpenWeatherComponent.prototype.removeWidget = function (widget) {
        var _this = this;
        var weatherItem = widget.value;
        // Simple implementation to remove a specific item
        var tempWeatherItems = this.weatherList.slice(0);
        this.weatherList = [];
        tempWeatherItems.forEach(function (item) {
            if (JSON.stringify(weatherItem) !== JSON.stringify(item))
                _this.weatherList.push(item);
        });
    };
    return OpenWeatherComponent;
}());
OpenWeatherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'open-weather',
        templateUrl: 'open-weather.component.html',
        styleUrls: ['open-weather.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        open_weather_service_1.OpenWeatherService])
], OpenWeatherComponent);
exports.OpenWeatherComponent = OpenWeatherComponent;
//# sourceMappingURL=open-weather.component.js.map