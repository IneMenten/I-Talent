import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityComponent } from './components/activity/activity.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

const routes: Routes = [
  {
    path: 'voorstelling',
    component: IntroductionComponent,
    data: { title: 'Voorstelling', state: '0' },
  },
  {
    path: 'overzicht',
    component: ActivitiesComponent,
    data: { title: 'Overzicht', state: '1' },
  },
  {
    path: 'activiteiten/:activityId',
    component: ActivityComponent,
    data: { title: 'Activiteiten', state: '2' },
  },
  {
    path: '',
    redirectTo: 'voorstelling',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'voorstelling',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
