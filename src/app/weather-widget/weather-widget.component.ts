import { Component, Input, EventEmitter, Output, OnInit,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';
import { Weather } from './../shared/weather';

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather-widget.component.html',
    styleUrls: ['weather-widget.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class WeatherWidgetComponent implements OnInit {
    @Input() weather: Weather;
    @Output() removeWidget = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    remove() {
        this.removeWidget.emit({
            value: this.weather
        });
    }
}