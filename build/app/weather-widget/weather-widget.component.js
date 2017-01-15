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
var weather_1 = require("./../shared/weather");
var WeatherWidgetComponent = (function () {
    function WeatherWidgetComponent() {
        this.removeWidget = new core_1.EventEmitter();
    }
    WeatherWidgetComponent.prototype.ngOnInit = function () { };
    WeatherWidgetComponent.prototype.remove = function () {
        this.removeWidget.emit({
            value: this.weather
        });
    };
    return WeatherWidgetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", weather_1.Weather)
], WeatherWidgetComponent.prototype, "weather", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WeatherWidgetComponent.prototype, "removeWidget", void 0);
WeatherWidgetComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'weather-widget',
        templateUrl: 'weather-widget.component.html',
        styleUrls: ['weather-widget.component.css'],
        animations: [
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                core_1.transition('void => *', [
                    core_1.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_1.animate('0.5s ease-in')
                ]),
                core_1.transition('* => void', [
                    core_1.animate('0.2s 10 ease-out', core_1.style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], WeatherWidgetComponent);
exports.WeatherWidgetComponent = WeatherWidgetComponent;
//# sourceMappingURL=weather-widget.component.js.map