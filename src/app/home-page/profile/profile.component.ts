import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  UserName='Ajith Kumar'
  UserEmail='ajith@gmail.com'
 UserPassword='Password123'
  constructor() { }

  ngOnInit(): void {
  }

}
