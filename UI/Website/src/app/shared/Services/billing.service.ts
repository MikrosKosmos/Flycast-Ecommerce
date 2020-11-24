import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url, apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getOrderList(): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.httpClient.get(url.GetOrderDetails, { headers: header });
  }
  createOrder(postBody): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken')
    });
    return this.httpClient.post(url.CreateOrder, postBody, { headers: header });
  }
}
