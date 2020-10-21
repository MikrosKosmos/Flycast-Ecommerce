import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url, apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  UserLogin(loginDetails): Observable<any> {
    console.log('Login post body: ', loginDetails);
    var header = new HttpHeaders({ 'key': apiKey.key });
    return this.http.post(url.Login, loginDetails, { headers: header });
  }

  UserRegistrationValidation(signupDetails): Observable<any> {
    var header = new HttpHeaders({ 'key': apiKey.key });
    //console.log('user regsitration details: ', this.http.post(url.RegisterUser, signupDetails, { headers: header }));
    return this.http.post(url.RegisterUser, signupDetails, { headers: header });
  }

  UserOTPRegistration(otpPhoneNumber): Observable<any> {
    console.log('user regsitration details: ', otpPhoneNumber);
    var header = new HttpHeaders({ 'key': apiKey.key });
    return this.http.post(url.RegisterUser, otpPhoneNumber, { headers: header });
  }
}
