import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Admin_loginform!:FormGroup;
  Email='Shekar@gmail.com'
  Password='shekar123'
  Email_entered=''
  Password_entered=''
  emailerror=''
  passworderror=''
  constructor(private formBuilder: FormBuilder,private router: Router,) {
    this.Admin_loginform=this.formBuilder.group({
      EmailId:[''],
      Password:['']
 
     }) 
   }

  ngOnInit(): void {
    this.Email_entered=this.Admin_loginform.value.EmailId;
    this.Password_entered=this.Admin_loginform.value.Password;
   
    
  }
  onSubmit(){
    this.Email_entered=this.Admin_loginform.value.EmailId;
    this.Password_entered=this.Admin_loginform.value.Password;
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
        this.router.navigate(['/Home_Page'])
      }
    
    }

}
