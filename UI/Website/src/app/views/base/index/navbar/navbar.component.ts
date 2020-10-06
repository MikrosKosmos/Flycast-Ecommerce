import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isRegistered: boolean;
  userName: string;

  constructor() { }

  @ViewChild(LoginComponent) loginComponent: LoginComponent;

  ngOnInit(): void {
    this.isRegistered = true;
    this.userName = 'Suresh';
  }

}
