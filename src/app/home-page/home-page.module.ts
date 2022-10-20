import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerRequestComponent } from './volunteer-request/volunteer-request.component';
import { VolunteerAppointedComponent } from './volunteer-appointed/volunteer-appointed.component';
// import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    // ProfileComponent
  
    // VolunteerRequestComponent
  
    // VolunteerAppointedComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule { }
