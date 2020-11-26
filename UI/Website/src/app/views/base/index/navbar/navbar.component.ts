import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isRegistered: boolean = true;
  userName: string;
  isCollapsed = true;
  isCollapsed2 = true;
  private toggleButton: any;
  private sidebarVisible: boolean;
  isLoggedIn: any;

  @Input('userName') userNameButton: string;
  constructor(
    private router: Router,
    public location: Location,
    private element: ElementRef
  ) {
    // this.sidebarVisible = false;
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // }
    // this.isLoggedIn = this.router.events.subscribe((e: any) => {
    //   if (event instanceof NavigationEnd) {
    //     this.router.navigated = false;
    //   }
    // });
  }

  //@ViewChild(LoginComponent) loginComponent: LoginComponent;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('FirstName') ? sessionStorage.getItem('FirstName') : localStorage.getItem('FirstName');
    console.log('username ', sessionStorage.getItem('FirstName'), localStorage.getItem('FirstName'));
    setTimeout(() => {
      if (this.userName != null) this.isRegistered = true;
      else this.isRegistered = false;
    }, 1000)
    //this.getUserName();
  }

  ngOnDestroy() {
    if (this.isLoggedIn) {
      this.isLoggedIn.unsubscribe();
    }
  }
  logout() {
    //console.log('clear the session');
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
  }

  // getUserName() {
  //   return !!(localStorage.getItem('FirstName'));
  // }
}
