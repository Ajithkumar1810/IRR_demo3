import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-signup',
  templateUrl: './volunteer-signup.component.html',
  styleUrls: ['./volunteer-signup.component.css']
})
export class VolunteerSignupComponent implements OnInit {

  Register_loginform!:FormGroup;
  Email='Shekar@gmail.com'
  Name=''
  Phonenumber=''
  Email_entered=''
  Phonenumber_entered=''
  Name_entered=''
  emailerror=''
  phoneerror=''
  nameerror=''
  successmsg=''
  constructor(private formBuilder: FormBuilder,private router: Router,) {
    this.Register_loginform=this.formBuilder.group({
      EmailId:[''],
      Name:[''],
      PhoneNumber:['']

 
     }) 
   }

  ngOnInit(): void {
    this.Email_entered=this.Register_loginform.value.EmailId;
    this.Name_entered=this.Register_loginform.value.Name;
    this.Phonenumber=this.Register_loginform.value.PhoneNumber;
   
    
  }
  onSubmit(){
    this.Email_entered=this.Register_loginform.value.EmailId;
    this.Name_entered=this.Register_loginform.value.Name;
    this.Phonenumber=this.Register_loginform.value.PhoneNumber;
      if(this.Email!==this.Email_entered){
        this.emailerror='Invalid Email'
        this.phoneerror=''
        this.nameerror=''
      }
      else if(this.Name!==this.Name_entered){
        this.nameerror='Invalid Name'
        this.emailerror=''
        this.phoneerror=''
      }
      else if(this.Phonenumber!==this.Phonenumber_entered){
        this.phoneerror='Invalid Phonenumber'
        this.emailerror=''
        this.nameerror=''
      }
     
      else {
        this.phoneerror=''
        this.emailerror=''
        this.nameerror=''
        this.successmsg='Registraion successfull wait for Admin to Accept!'
      }
    
    }

}

