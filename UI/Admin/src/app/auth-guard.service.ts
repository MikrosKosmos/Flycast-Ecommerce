import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/auth');
      return false;
    }
    return true;
  }
  // canLoad(route: Route): boolean {
  //   let url: string = route.path;
  //   if (this.authService.isUserLoggedIn()) {
  //      return true; 
  //   }
  //         this.authService.setRedirectUrl(url);
  //         this.router.navigate([ this.authService.getLoginUrl() ]);
  //         return false;		
  //   }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   let url: string = state.url;
  //   if (!this.authService.isLoggedIn()) {
  //         this.router.navigateByUrl('/auth/login');
  //         return false;
  //   }
  //   // this.authService.setRedirectUrl(url);
  //   // this.router.navigate([this.authService.getLoginUrl()]);
  //   return true;

  // }
}