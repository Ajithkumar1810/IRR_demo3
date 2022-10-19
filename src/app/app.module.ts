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
import { VolunteersListComponent } from './home-page/volunteers-list/volunteers-list.component';
import { AppointmentsComponent } from './home-page/appointments/appointments.component';
import { SlotsComponent } from './home-page/slots/slots.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './home-page/home-page.module';
import { ProfileComponent } from './home-page/profile/profile.component';
import { AppoinmentsPageComponent } from './volunteer-login/appoinments-page/appoinments-page.component';
import { VolunteerLoginModule } from './volunteer-login/volunteer-login.module';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    VolunteerLoginComponent,
    VolunteerSignupComponent,
    MainPageComponent,
    HomePageComponent,
    VolunteersListComponent,
    AppointmentsComponent,
    SlotsComponent,
    ProfileComponent,
    AppoinmentsPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    HomePageModule,
    VolunteerLoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
