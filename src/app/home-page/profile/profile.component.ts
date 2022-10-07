import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  volunteerUserName='Ajith Kumar'
  volunteerUserEmail='ajith@gmail.com'
  volunteerUserPassword='Password123'
  constructor() { }

  ngOnInit(): void {
  }

}
