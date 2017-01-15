import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenWeatherComponent } from './open-weather/open-weather.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: OpenWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [OpenWeatherComponent];
