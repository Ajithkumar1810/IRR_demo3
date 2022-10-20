import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { SlotsComponent } from './slots/slots.component';
import { VolunteerAppointedComponent } from './volunteer-appointed/volunteer-appointed.component';
import { VolunteerRequestComponent } from './volunteer-request/volunteer-request.component';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';

const routes: Routes = [
{path:'Appointments',component:AppointmentsComponent},
{path:'Volunteers_list',component:VolunteersListComponent},
{path:'Volunteers_Request',component:VolunteerRequestComponent},
{path:'Volunteers_Appointed',component:VolunteerAppointedComponent},
{path:'Slots',component:SlotsComponent},
{path:'Profile',component:ProfileComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomePageRoutingModule { }
