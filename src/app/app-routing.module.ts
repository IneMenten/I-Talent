import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ActivitiesComponent} from "./components/activities/activities.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home', state: 'home'}
  },
  {
    path: 'activiteiten',
    component: ActivitiesComponent,
    data: {title: 'Activiteiten', state: 'activiteiten'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
