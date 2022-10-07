import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VolunteerLoginComponent } from './volunteer-login/volunteer-login.component';
import { VolunteerSignupComponent } from './volunteer-signup/volunteer-signup.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'Admin_Login',component:AdminLoginComponent},
  {path:'Volunteer_Login',component:VolunteerLoginComponent},
  {path:'Volunteer_Signup',component:VolunteerSignupComponent,},
  {path:'Home_Page',component:HomePageComponent},
  {
    path: 'Home_Page',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
