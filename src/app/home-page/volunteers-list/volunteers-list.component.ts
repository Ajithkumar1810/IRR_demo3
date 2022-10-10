import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {

  
  sample:any=[
    {
        Name:'AjithKumar',
        Email:'ajith@gmail.com',
        Phoneno:'9874563210',
        Fin:'748'
    },
    {
      Name:'raviKumar',
      Email:'ravi@gmail.com',
      Phoneno:'7414563210',
      Fin:'418'
    },
    {
      Name:'harihKumar',
      Email:'hari@gmail.com',
      Phoneno:'9879633210',
      Fin:'741'
    },
    {
      Name:'parthiban',
      Email:'parthi@gmail.com',
      Phoneno:'9885263210',
      Fin:'718'
    },
    {
      Name:'sana',
        Email:'sana@gmail.com',
        Phoneno:'9874741210',
        Fin:'518'
    }
]
  title = 'IRR_Appoinments';
  object:any=[{  name:'',email:'', phoneNumber:'',fin:''}]
  
   pagepersheetno=3
   pageno=1;
   totallength:any;
   // filterDetailsData!:MatTableDataSource<any>
   filterDetailsForm!: FormGroup;
   
   
   constructor(private formBuilder: FormBuilder,private http:HttpClient){
     this.filterDetailsForm=this.formBuilder.group({
       Name:[""],
       Phoneno:[''],
       Email:[''],
       Fin:[''],
 
     })   
   }
  ngOnInit(): void {
  }
  onSubmit(){

  }
  onPagepersheet(value:Event){
    this.pagepersheetno= parseInt((<HTMLInputElement>value.target).value, 10)
   
  }

}
