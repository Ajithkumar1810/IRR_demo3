import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerLoginRoutingModule } from './volunteer-login-routing.module';



@NgModule({
  declarations: [
    // AppoinmentsPageComponent
  ],
  imports: [
    CommonModule,
    VolunteerLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class VolunteerLoginModule { }
