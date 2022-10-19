import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-login',
  templateUrl: './volunteer-login.component.html',
  styleUrls: ['./volunteer-login.component.css']
})
export class VolunteerLoginComponent implements OnInit {
  Volunteer_loginform!:FormGroup;
  Email='Shekar@gmail.com'
  Password='shekar123'
  Email_entered=''
  Password_entered=''
  emailerror=''
  passworderror=''
  constructor(private formBuilder: FormBuilder,private router: Router,private route:ActivatedRoute) {
    this.Volunteer_loginform=this.formBuilder.group({
      EmailId:[''],
      Password:['']
 
     }) 
   }

  ngOnInit(): void {
    this.Email_entered=this.Volunteer_loginform.value.EmailId;
    this.Password_entered=this.Volunteer_loginform.value.Password;
   
    
  }
  onSubmit(){
    this.Email_entered=this.Volunteer_loginform.value.EmailId;
    this.Password_entered=this.Volunteer_loginform.value.Password;
      if(this.Email!==this.Email_entered){
        this.emailerror='Invalid Email'
        this.passworderror=''
      }
      else if(this.Password!==this.Password_entered){
        this.passworderror='Invalid Password'
        this.emailerror=''
      }
      else {
        this.passworderror=''
        this.emailerror=''
        this.router.navigate(['/AppointmentsPage']),
        {relatvieTo:this.route}
      }
    
    }

}

