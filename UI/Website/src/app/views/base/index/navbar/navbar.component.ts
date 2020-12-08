import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/Services/product.service';
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
  cartItemsCount: Number;

  @Input('userName') userNameButton: string;
  constructor(
    private router: Router,
    public location: Location,
    private element: ElementRef,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    // console.log(
    //   'username ',
    //   sessionStorage.getItem('FirstName'),
    //   localStorage.getItem('FirstName')
    // );
    setTimeout(() => {
      if (this.userName != null) {
        this.isRegistered = true;
        this.productService.getCartDetails().subscribe(data => {
          console.log('cart', data.res.length)
          this.cartItemsCount = +data.res.length
        });
      }
      else this.isRegistered = false;
    }, 1000);
    //this.getUserName();
  }

  /**
   * Method to check user is logged in or not
   */
  getUserDetails = () => {
    this.userName = sessionStorage.getItem('FirstName')
      ? sessionStorage.getItem('FirstName')
      : localStorage.getItem('FirstName');
    return (
      localStorage.getItem('FirstName') || sessionStorage.getItem('FirstName')
    );
  };

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
