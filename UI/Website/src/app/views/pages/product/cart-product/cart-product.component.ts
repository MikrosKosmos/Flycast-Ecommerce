import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/Services/product.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Constant } from 'src/app/shared/constants';
import { UserService } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  cartDetails: [];
  productQuantity: number;
  isInStock: boolean;
  userId = sessionStorage.getItem('UserID') ? sessionStorage.getItem('UserID') : localStorage.getItem('UserID');
  firstName = sessionStorage.getItem('FirstName') ? sessionStorage.getItem('FirstName') : localStorage.getItem('FirstName');
  lastName = sessionStorage.getItem('LastName') ? sessionStorage.getItem('LastName') : localStorage.getItem('LastName');
  addressId = sessionStorage.getItem('AddressId') ? sessionStorage.getItem('AddressId') : localStorage.getItem('AddressId');
  address1: string;
  address2: string;
  email: string;
  paymentAmount: Number;
  addressDetais = [];
  isEmptyCart: boolean;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private constant: Constant
  ) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails() {
    this.productService.getCartDetails().subscribe(data => {
      this.spinner.show();
      this.cartDetails = data['res'];
      //console.log('cart details', this.cartDetails.length);
      if (this.cartDetails.length > 0) {
        this.paymentAmount = data['res'][0]['price'];
        localStorage.setItem('CartId', data['res'][0]['id']);
        this.isEmptyCart = false;
      }
      else
        this.isEmptyCart = true;
      this.spinner.hide();
      console.log('cart details', this.cartDetails, this.paymentAmount, localStorage.getItem('CartId'));
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
    this.spinner.show();
    this.productService.addProductTocart(putBody).subscribe(data => {
      this.spinner.hide();
      if (data['res'].id == -1) {
        this.toastr.error('Unable to remove product from cart')
      }
      else
        this.toastr.success('Product has been deleted from cart');
      console.log(data);
      //window.location.reload();
    });
  }

  proceedToBuy(cartId) {
    localStorage.setItem('CartId', cartId);
    if (this.addressId === null)
      this.router.navigate(['/checkouts/shipping-details']);
    else {
      this.router.navigate(['/checkouts/billing-details']);
      //this.buyItem();
    }
  }

  getUserAddress = (addressId) => {
    this.userService.GetUserAddress(this.userId).subscribe(data => {
      this.addressDetais = data.res.find(x => x.address_id === +addressId);
      this.address1 = this.addressDetais['address_1']
      console.log('addresss details ', this.address1);
      /* for (var i = 0; i < data.res.length; i++) {
        if (data.res[i]['address_id'] === addressId) {
          console.log('loop', i, data.res[i]['address_id']);
          this.address1 = data.res[i]['address_1'];
          this.address2 = data.res[i]['address_2'];
          statecity = ',' + data.res[i]['state_name'] + data.res[i]['city_name'] + '-' + data.res[i]['pincode'];
          console.log('addresses', this.address1, this.address2);
        }
      } */
    });
    console.log('addresses', this.address1, this.address2);
  }
}
