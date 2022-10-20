import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name='Ajith Kumar'
  email='ajith@gmail.com'
phone='Password123'
sample:any;
  constructor() { }

  ngOnInit(): void {
  }

}
