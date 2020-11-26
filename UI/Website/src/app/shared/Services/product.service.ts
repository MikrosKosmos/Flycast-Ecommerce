import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { url, apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  getAllAssetsList(categoryId): Observable<any> {
    var header = new HttpHeaders({ 'key': apiKey.key });
    return this.httpClient.get(url.GetAllAssetsByCategory + Number(categoryId), { headers: header });
  }

  getProductDetailsBySKU(sku: string) {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken') ? sessionStorage.getItem('JwToken') : localStorage.getItem('JwToken')
    });
    return this.httpClient.get(url.GetSKUs + sku, { headers: header });
  };

  addProductTocart(putBody) {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken') ? sessionStorage.getItem('JwToken') : localStorage.getItem('JwToken')
    });
    return this.httpClient.put(url.AddToCart, putBody, { headers: header });
  }

  getCartDetails(): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken') ? sessionStorage.getItem('JwToken') : localStorage.getItem('JwToken')
    });
    return this.httpClient.get(url.AddToCart, { headers: header });
  }

  updateSKURating(putBody): Observable<any> {
    var header = new HttpHeaders({
      'key': apiKey.key,
      'jw_token': sessionStorage.getItem('JwToken') ? sessionStorage.getItem('JwToken') : localStorage.getItem('JwToken')
    });
    console.log(url.UpdateRating, putBody, { headers: header });
    return this.httpClient.put(url.UpdateRating, putBody, { headers: header });
  }
}
