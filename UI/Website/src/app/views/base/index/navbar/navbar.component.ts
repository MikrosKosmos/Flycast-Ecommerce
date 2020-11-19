import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isRegistered: boolean;
  userName: string;
  isCollapsed = true;
  isCollapsed2 = true;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    private router: Router,
    public location: Location,
    private element: ElementRef
  ) {
    this.sidebarVisible = false;
  }

  @ViewChild(LoginComponent) loginComponent: LoginComponent;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('FirstName');
    //console.log('username ', this.userName);
    if (this.userName != null) this.isRegistered = true;
    else this.isRegistered = false;
  }
  logout() {
    //console.log('clear the session');
    sessionStorage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
