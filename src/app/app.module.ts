import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VolunteerLoginComponent } from './volunteer-login/volunteer-login.component';
import { VolunteerSignupComponent } from './volunteer-signup/volunteer-signup.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VolunteersListComponent } from './home-page/volunteers-list/volunteers-list.component';
import { AppointmentsComponent } from './home-page/appointments/appointments.component';
import { SlotsComponent } from './home-page/slots/slots.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    VolunteerLoginComponent,
    VolunteerSignupComponent,
    MainPageComponent,
    HomePageComponent,
    NavbarComponent,
    VolunteersListComponent,
    AppointmentsComponent,
    SlotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
