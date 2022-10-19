import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentsPageComponent } from './appoinments-page/appoinments-page.component';



const routes: Routes = [
  {path:'AppointmentsPage',component:AppoinmentsPageComponent},
  
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class VolunteerLoginRoutingModule { }
