import { AppModule } from './app.module';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'weather-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Open Weather Map - Search by City';
}
