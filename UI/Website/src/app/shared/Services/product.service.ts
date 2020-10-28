import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private authService: AuthService
  ) { }
  
  getProductDetailsById(id) {

  }
}
