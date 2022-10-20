import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-appointed',
  templateUrl: './volunteer-appointed.component.html',
  styleUrls: ['./volunteer-appointed.component.css']
})
export class VolunteerAppointedComponent implements OnInit {
  pagepersheetno=50;
  pageno=1;
  totallength:any;
  sample:any=[
    {
        Name:'AjithKumar',
        Email:'ajith@gmail.com',
        Phoneno:'9874563210',
        Address:'Vellore',
        Date:'20-10-2022',
        Password:'njcsakjnc'
    },
    {
      Name:'raviKumar',
      Email:'ravi@gmail.com',
      Phoneno:'7414563210',
      Address:'Chennai',
      Date:'28-10-2022',
        Password:'svcdsddc'
    },
    {
      Name:'harihKumar',
      Email:'hari@gmail.com',
      Phoneno:'9879633210',
      Address:'Delhi',
      Date:'20-11-2022',
        Password:'plcsakjnc'
    },
    {
      Name:'parthiban',
      Email:'parthi@gmail.com',
      Phoneno:'9885263210',
      Address:'Mumbai',
      Date:'30-11-2022',
        Password:'lkmakjnc'
    },
    {
      Name:'sana',
        Email:'sana@gmail.com',
        Phoneno:'9874741210',
        Address:'Pune',
        Date:'20-12-2022',
        Password:'iujdakjnc'
    }
]
  constructor() { }

  ngOnInit(): void {
  }
  onPagepersheet(value:Event){
    this.pagepersheetno= parseInt((<HTMLInputElement>value.target).value, 10)
   
  }


    onSubmit(){

    }
}
