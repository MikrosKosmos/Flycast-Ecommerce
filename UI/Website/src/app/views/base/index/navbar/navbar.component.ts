import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isRegistered: boolean;
  userName: string;
  constructor() { }

  ngOnInit(): void {
    this.isRegistered = true;
    this.userName = 'Suresh';
  }

}
