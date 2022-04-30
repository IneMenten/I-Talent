import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitiesComponent } from './components/activities/activities.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InnovatierouteComponent } from './components/activities/innovatieroute/innovatieroute.component';
import { EigenProjectComponent } from './components/activities/eigen-project/eigen-project.component';
import { HackathonSintOdaComponent } from './components/activities/hackathon-sint-oda/hackathon-sint-oda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivitiesComponent,
    IntroductionComponent,
    HeaderComponent,
    InnovatierouteComponent,
    EigenProjectComponent,
    HackathonSintOdaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
