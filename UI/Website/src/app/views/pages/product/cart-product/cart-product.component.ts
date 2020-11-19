import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/Services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  cartDetails: [];
  productQuantity: number;
  isInStock: boolean;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails() {
    this.productService.getCartDetails().subscribe(data => {
      this.cartDetails = data['res'];
      console.log(data['res'][0]);
      // if(this.cartDetails['total_products'])
    });
  }

  changeQuantity(value, type) {
    console.log('on change cart', value, type);
    this.productQuantity = Number(value);
    if (type = 'inc') {
      while (value > 0 && value < 6) {
        this.productQuantity = this.productQuantity + 1;
        console.log(this.productQuantity);
      }
    }
    else if (type = 'dec') {
      while (value > 0 && value < 6) {
        this.productQuantity = this.productQuantity - 1;
        console.log(this.productQuantity);
      }
    }
  }

  deleteFromCart(value) {
    var putBody = {
      "sku": value,
      "quantity": 0
    }
    console.log('add to cart put body', putBody);
    this.productService.addProductTocart(putBody).subscribe(data => {
      console.log(data);
      this.toastr.success('Product has been deleted from cart');
      window.location.reload();
    });
  }
}
