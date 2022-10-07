import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClickAppointments(){
    this.router.navigate(['/Appointments'],{relativeTo:this.route})
  }
  onClickVolunteers(){
    this.router.navigate(['/Volunteers'],{relativeTo:this.route})
  }
  onClickSlots(){
    this.router.navigate(['/Slots'],{relativeTo:this.route})

  }
  onClickProfile(){
    this.router.navigate(['/Profile'],{relativeTo:this.route})
  }
  onClickLogout(){
    this.router.navigate(['/'],{relativeTo:this.route})
  }
}
