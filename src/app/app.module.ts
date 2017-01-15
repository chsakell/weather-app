import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { OpenWeatherService } from './open-weather/open-weather.service';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    WeatherWidgetComponent
  ],
  providers: [
    OpenWeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
