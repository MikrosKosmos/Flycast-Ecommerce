import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url, apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  UserDetailsById(userId): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.http.get(url.GetUserDetails + Number(userId), { headers: header });
  }

  UpdateUserDetailsById(body): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.http.put(url.RegisterUser, body, { headers: header });
  }

  UpdateOrAddAddress(body): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.http.put(url.AddOrUpdateAddress, body, { headers: header });
  }

  GetUserAddress(userId): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.http.get(url.GetUserAddress + Number(userId), { headers: header });
  }

  GetStateList(): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key
    });
    return this.http.get(url.GetStates, { headers: header });
  }

  GetCityListByStateId(param): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key
    });
    return this.http.get(url.GetCity + Number(param), { headers: header });
  }
}
