import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  sample:any=[
    {
        BookingID: "123456789285",
        PhoneNumber: "123456789",
        FullName: "Ajay Krishnan",
        Date: "2022-09-30T18:30:00.000Z",
        Day_of_the_week: "Saturday",
        Time: "10:00",
        TTL_Tag: "2022-12-01",
        Fin: "285"
    },
    {
        BookingID: "4567891230200",
        PhoneNumber: "4567891230",
        FullName: " Ajith Kumar",
        Date: "2022-10-01T18:30:00.000Z",
        Day_of_the_week: "Sunday",
        Time: "14:00",
        TTL_Tag: "2022-12-02",
        Fin: "200"
    },
    {
        BookingID: "753148620280",
        PhoneNumber: "753148620",
        FullName: " Ajith K",
        Date: "2022-10-01T18:30:00.000Z",
        Day_of_the_week: "Sunday",
        Time: "14:00",
        TTL_Tag: "2022-12-02",
        Fin: "280"
    },
    {
        BookingID: "9871236540488",
        PhoneNumber: "9871236540",
        FullName: " Krishnan",
        Date: "2022-09-30T18:30:00.000Z",
        Day_of_the_week: "Saturday",
        Time: "14:00",
        TTL_Tag: "2022-12-01",
        Fin: "488"
    },
    {
        BookingID: "9876543210388",
        PhoneNumber: "9876543210",
        FullName: "Ajay Krishnan",
        Date: "2022-09-30T18:30:00.000Z",
        Day_of_the_week: "Saturday",
        Time: "10:00",
        TTL_Tag: "2022-12-01",
        Fin: "388"
    }
]
  title = 'IRR_Appoinments';
 object:any=[{  bookingId:'', phoneNumber:'',fullName:'',appoinmentDateFrom:'',day:'',time:'',appoinmentDateto:'',fin:''}]
 
  pagepersheetno=3
  pageno=1;
  totallength:any;
  // filterDetailsData!:MatTableDataSource<any>
  filterDetailsForm!: FormGroup;

  
  constructor(private formBuilder: FormBuilder,private http:HttpClient){
    this.filterDetailsForm=this.formBuilder.group({
      bookingId:[""],
      phoneNumber:[''],
      fullName:[''],
      appoinmentDatefrom:[''],
      day:[''],
      time:[''],
      appoinmentDateto:[''],
      fin:[''],

    })   
  }

  ngOnInit():void{
    this.totallength=this.sample.length;
    this.object.bookingId=this.filterDetailsForm.value.bookingId
    this.object.phoneNumber=this.filterDetailsForm.value.phoneNumber
    this.object.fullName=this.filterDetailsForm.value.fullName
    this.object.appoinmentDate=this.filterDetailsForm.value.appoinmentDatefrom
    this.object.day=this.filterDetailsForm.value.day
    this.object.time=this.filterDetailsForm.value.time
    this.object.appoinmentDateto=this.filterDetailsForm.value.appoinmentDateto
    this.object.fin=this.filterDetailsForm.value.fin
  }
  onPagepersheet(value:Event){
  this.pagepersheetno= parseInt((<HTMLInputElement>value.target).value, 10)
 
}

  onSubmit(){
    
    // let filterdata=[{
    //   BookingID: this.object.bookingId,
    //   PhoneNumber: this.object.phoneNumber,
    //   FullName: this.object.fullName,
    //   Date: this.object.appoinmentDate,
    //   Day_of_the_week: this.object.day,
    //   Time: this.object.time,
    //   TTL_Tag: this.object.ttTag,
    //   Fin: this.object.fin
    // }]
    // this.fetchData(filterdata)

    this.fetchData()
  
  
  
}
// filterdata:any
fetchData(){
  
  this.http.get('https://us-central1-irrexperiments.cloudfunctions.net/testing')
  // .pipe(map(responseData => {
  //   let postsArray = [];
  //   for (let key in responseData) {
  //     if (responseData.hasOwnProperty(key)) {
  //       postsArray.push({ ...responseData[key],  id: key})
  //     }
  //   }
  //   return postsArray;
  // }))
  .subscribe(posts => {
      console.log(posts);
  });
}





}
