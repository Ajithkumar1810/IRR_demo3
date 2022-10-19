import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appoinments-page',
  templateUrl: './appoinments-page.component.html',
  styleUrls: ['./appoinments-page.component.css']
})
export class AppoinmentsPageComponent implements OnInit {

  data: any;
  test: any;
  test1:string='';

  test2: any = [];

  //  
  sample:any;
  title = 'IRR_Appoinments';
  object: any = [{ bookingId: '', phoneNumber: '', fullName: '', appoinmentDateFrom: '', day: '', time: '', appoinmentDateto: '', fin: '' }]

  pagepersheetno = 3
  pageno = 1;
  totallength: any;
  // filterDetailsData!:MatTableDataSource<any>
  filterDetailsForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router:Router ,private route:ActivatedRoute) {
    this.filterDetailsForm = this.formBuilder.group({
      bookingId: [""],
      phoneNumber: [''],
      fullName: [''],
      appoinmentDatefrom: [''],
      day: [''],
      time: [''],
      appoinmentDateto: [''],
      fin: [''],

    })
    this.http.get(environment.appoinments)


      .subscribe((data:any) => {
        console.log(data);
        // this.test = data;
        // console.log("This is a intent name" + this.test.intentname);
        // this.test1 = this.test.result;
        
        // for (const value of this.test.result) {
          
        //   for (const value2 of value.text.text) {
        //     console.log(value2);


        //   }

        // }
        this.sample=data.result


      });
  }

  ngOnInit(): void {
    // this.totallength = this.sample.length;
    this.object.bookingId = this.filterDetailsForm.value.bookingId
    this.object.phoneNumber = this.filterDetailsForm.value.phoneNumber
    this.object.fullName = this.filterDetailsForm.value.fullName
    this.object.appoinmentDate = this.filterDetailsForm.value.appoinmentDatefrom
    this.object.day = this.filterDetailsForm.value.day
    this.object.time = this.filterDetailsForm.value.time
    this.object.appoinmentDateto = this.filterDetailsForm.value.appoinmentDateto
    this.object.fin = this.filterDetailsForm.value.fin
  }

  onClickProfile(){
    this.router.navigate(['/VolunteerProfile'],{relativeTo:this.route})
  }
  onClickLogout(){
    this.router.navigate(['/'],{relativeTo:this.route})
  }
  onPagepersheet(value: Event) {
    this.pagepersheetno = parseInt((<HTMLInputElement>value.target).value, 10)

  }

  onSubmit() {

    let filterdata=[{
      BookingID: this.object.bookingId,
      PhoneNumber: this.object.phoneNumber,
      FullName: this.object.fullName,
      Date: this.object.appoinmentDate,
      Day_of_the_week: this.object.day,
      Time: this.object.time,
      TTL_Tag: this.object.ttTag,
      Fin: this.object.fin
    }]
    // this.fetchData(filterdata)
    this.fetchData(filterdata)


    // this.fetchData2()



  }
  fetchData2() {

    this. data= {
      "message": "9 am",
     
    };
   
    this.http.post('http://localhost:3000/getintentmessage', this.data)

      .subscribe((data1) => {
        console.log(data1);
        this.test = data1;
        this.test1= this.test.data;
        console.log(this.test1);
      })
  }
  // filterdata:any
  fetchData(filterdata:any) {

    // this.http.get('https://us-central1-irrexperiments.cloudfunctions.net/testing')
    // .pipe(map(responseData => {
    //   let postsArray = [];
    //   for (let key in responseData) {
    //     if (responseData.hasOwnProperty(key)) {
    //       postsArray.push({ ...responseData[key],  id: key})
    //     }
    //   }
    //   return postsArray;
    // }))
    // this.data = {
    //   "message": "9 am"
    // };

    // this.http.post(environment.appoinments, filterdata)
    this.http.get(environment.appoinments)


      .subscribe((data:any) => {
        console.log(data);
        // this.test = data;
        // console.log("This is a intent name" + this.test.intentname);
        // this.test1 = this.test.result;
        
        // for (const value of this.test.result) {
          
        //   for (const value2 of value.text.text) {
        //     console.log(value2);


        //   }

        // }
        this.sample=data.result


      });

  }
}






