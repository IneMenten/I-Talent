import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { EigenProjectComponent } from './components/activities/eigen-project/eigen-project.component';
import { HackathonSintOdaComponent } from './components/activities/hackathon-sint-oda/hackathon-sint-oda.component';
import { InnovatierouteComponent } from './components/activities/innovatieroute/innovatieroute.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ReflectionComponent } from './components/reflection/reflection.component';

const routes: Routes = [
  {
    path: 'voorstelling',
    component: IntroductionComponent,
    data: { title: 'Voorstelling', state: '0' },
  },
  {
    path: 'activiteiten',
    component: ActivitiesComponent,
    data: { title: 'Activiteiten', state: '1' },
  },
  {
    path: 'website-studenten-vroedkunde',
    component: EigenProjectComponent,
    data: { title: 'Website studenten vroedkunde', state: '2' },
  },
  {
    path: 'innovatieroute',
    component: InnovatierouteComponent,
    data: { title: 'Innovatieroute', state: '3' },
  },
  {
    path: 'hackathon-sint-oda',
    component: HackathonSintOdaComponent,
    data: { title: 'Hackathon Sint-Oda', state: '4' },
  },
  {
    path: 'eindreflectie',
    component: ReflectionComponent,
    data: { title: 'Eindreflectie', state: '5' },
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
