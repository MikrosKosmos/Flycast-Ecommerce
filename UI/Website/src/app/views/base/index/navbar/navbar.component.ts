import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isRegistered: boolean;
  userName: string;
  isCollapsed = true;
  isCollapsed2 = true;
  constructor(private router: Router) { }

  @ViewChild(LoginComponent) loginComponent: LoginComponent;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('FirstName');
    //console.log('firstname', this.userName, sessionStorage.getItem('FirstName'));
    if (this.userName != null)
      this.isRegistered = true;
    else
      this.isRegistered = false;
  }
  logout() {
    //console.log('clear the session');
    sessionStorage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
