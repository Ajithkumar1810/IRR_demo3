import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  error=''
  constructor(private formBuilder: FormBuilder) {
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
      if(this.Email!==this.Email_entered){
        this.error='Invalid Email'
      }
      else if(this.Password!==this.Password_entered){
        this.error='Invalid Password'
      }
      else {
        this.error='Sucess'
      }
    // this.router.navigate(['/'])
    }

}
