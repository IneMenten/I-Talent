import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ActivitiesComponent } from './components/activities/activities.component';
import { VoorstellingComponent } from './components/voorstelling/voorstelling.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivitiesComponent,
    VoorstellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
