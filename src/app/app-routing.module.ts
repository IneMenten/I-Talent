import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivitiesComponent} from "./components/activities/activities.component";
import {VoorstellingComponent} from "./components/voorstelling/voorstelling.component";

const routes: Routes = [
  {
    path: 'voorstelling',
    component: VoorstellingComponent,
    data: {title: 'Voorstelling', state: '0'}
  },
  {
    path: 'activiteiten',
    component: ActivitiesComponent,
    data: {title: 'Activiteiten', state: '1'}
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
