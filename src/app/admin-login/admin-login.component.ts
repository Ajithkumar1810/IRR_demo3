import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
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
  app = initializeApp(environment.firebaseemail);

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
    onclickemail(){
      this.Email_entered=this.Admin_loginform.value.EmailId;
    this.Password_entered=this.Admin_loginform.value.Password;
      const auth = getAuth(this.app);
      console.log("emial:"+this.Email_entered+"Password:"+this.Password_entered)
createUserWithEmailAndPassword(auth, this.Email_entered, this.Password_entered)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("details:"+user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error code:"+error.code)
    console.log("error msg:"+error.message)


    // ..
  });
    }

    onvalidateemail(){
      this.Email_entered=this.Admin_loginform.value.EmailId;
    this.Password_entered=this.Admin_loginform.value.Password;
      const auth = getAuth(this.app);
signInWithEmailAndPassword(auth, this.Email_entered, this.Password_entered)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signed in as:"+user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("signin error");
  });
    }

    onoutemail(){

      const auth = getAuth(this.app);
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Sign-out successful")
}).catch((error) => {
  // An error happened.
  console.log("error signout")
});
    }
}
