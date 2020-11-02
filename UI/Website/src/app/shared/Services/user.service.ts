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

  UpdateUserDetailsById(body): Observable<any>{
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.http.put(url.RegisterUser, body, { headers: header })
  }
}
