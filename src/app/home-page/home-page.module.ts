import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    // ProfileComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule { }
