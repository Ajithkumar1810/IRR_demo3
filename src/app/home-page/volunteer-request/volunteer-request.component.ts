import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-request',
  templateUrl: './volunteer-request.component.html',
  styleUrls: ['./volunteer-request.component.css']
})
export class VolunteerRequestComponent implements OnInit {
  pagepersheetno=50;
  pageno=1;
  totallength:any;
  sample:any=[
    {
        Name:'AjithKumar',
        Email:'ajith@gmail.com',
        Phoneno:'9874563210',
        Address:'Vellore'
    },
    {
      Name:'raviKumar',
      Email:'ravi@gmail.com',
      Phoneno:'7414563210',
      Address:'Chennai'
    },
    {
      Name:'harihKumar',
      Email:'hari@gmail.com',
      Phoneno:'9879633210',
      Address:'Delhi'
    },
    {
      Name:'parthiban',
      Email:'parthi@gmail.com',
      Phoneno:'9885263210',
      Address:'Mumbai'
    },
    {
      Name:'sana',
        Email:'sana@gmail.com',
        Phoneno:'9874741210',
        Address:'Pune'
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
