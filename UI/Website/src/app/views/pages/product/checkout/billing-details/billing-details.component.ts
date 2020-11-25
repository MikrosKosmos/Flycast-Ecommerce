import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constants';
import { BillingService } from 'src/app/shared/Services/billing.service';
import { ProductService } from 'src/app/shared/Services/product.service';
import { UserService } from 'src/app/shared/Services/user.service';
var date_ob = new Date();
declare const Razorpay: any;

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {

  userId = sessionStorage.getItem('UserID');
  firstName = sessionStorage.getItem('FirstName');
  lastName = sessionStorage.getItem('LastName');
  addressId = sessionStorage.getItem('AddressId');
  cartId: number = Number(localStorage.getItem('CartId'));
  address1: string;
  address2: string;
  email: string;
  paymentAmount: Number;
  addressDetails = [];
  cartDetails = [];
  statecity: string;
  fullDate: string;
  userDetails = [];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private billingService: BillingService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private constant: Constant) { }

  ngOnInit(): void {
    this.getCartDetails();
    this.getUserDeliveryAddress();
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.UserDetailsById(this.userId).subscribe(data => {
      this.spinner.show();
      this.userDetails.push(data.res);
      console.log('userDetails', this.userDetails);
      this.spinner.hide();
    });
  }

  getCartDetails() {
    this.productService.getCartDetails().subscribe(data => {
      this.spinner.show();
      this.cartDetails.push(data.res.find(x => x.id === +this.cartId));
      this.cartDetails[0]['total_amount'] = this.cartDetails[0]['price'] * Number(this.cartDetails[0]['quantity']);
      // this.paymentAmount = data['res'][0]['price'];
      this.spinner.hide();
      //console.log(this.cartDetails, localStorage.getItem('CartId'), this.cartId);
      // if(this.cartDetails['total_products'])
    });
  }

  getUserDeliveryAddress() {
    this.spinner.show();
    this.userService.GetUserAddress(this.userId).subscribe(data => {
      //console.log('addresses', data.res);
      this.spinner.hide();
      this.addressDetails.push(data.res.find(x => x.address_id === +this.addressId));
      this.address1 = data.res[0]['address_1'];
      this.address2 = data.res[0]['address_2'];
      this.statecity = ',' + data.res[0]['state_name'] + ',' + data.res[0]['city_name'] + '-' + data.res[0]['pincode'];
    });
    //console.log('delivery address', this.addressDetails);
  }

  buyItem() {
    let price = 0;
    for (var i = 0; i < this.cartDetails.length; i++) {
      price = this.cartDetails[i]['price'];
    }
    const rzpConfig = {
      "key": this.constant.RAZORPAY_KEY_ID,
      "amount": price * 100, // 2000 paise = INR 20
      "name": "Flycast",
      "description": "Purchase Description",
      "image": '',
      "prefill": {
        "name": `${this.firstName} ${this.lastName}`,
        "email": `${this.userDetails[0]['email']}`
      },
      "notes": {
        "address": `${this.address1} ${this.address2} ${this.statecity}`
      },
      "theme": {
        "color": "#0d519c"
      },
      "handler": this.getTnxId.bind(this),
    }
    console.log('razor pay details', rzpConfig);
    let rzp = new Razorpay(rzpConfig);
    rzp.open();
  }

  /**
   * Method to get Tansaction id of Transaction.
   * @param response: Parameter to get razorpay payment id
   */
  getTnxId = (response) => {
    this.spinner.show();
    //current date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    this.fullDate = year + '-' + month + '-' + date;

    /* this.confirmRequest(response.razorpay_payment_id) */
    const data = {};
    var postData = {
      "order_date": this.fullDate,
      "address_id": Number(this.addressId),
      "base_amount": this.cartDetails[0]['total_amount'],
      "discount_amount": 0,
      "coupon_code": "",
      "replacement_order_id": 0,
      "transaction_id": response.razorpay_payment_id,
      "order_products": [
        {
          "sku": this.cartDetails[0]['sku'],
          "quantity": Number(this.cartDetails[0]['quantity'])
        }
      ]
    }
    //console.log('post data', postData);
    this.spinner.show();
    this.billingService.createOrder(postData).subscribe(data => {
      console.log('after order', data.res.order_id);
      this.spinner.hide();
      if (data.res.order_id > 0) {
        this.toastr.success("Order Placed Successfully");
        this.router.navigate(['/products/order-list']);
      }
      else
        this.toastr.error('Order Failed', 'Error');
      //if(data.res.)
    });
    //data['booking_id'] = this.bookingId;
    // data['transaction_id'] = response.razorpay_payment_id;
    // data['user_id'] = this.userId;
    // data['payment_amount'] = this.paymentAmount;
    // console.log('addresss details ', this.address1);
    // console.log('payment data ', data);
    // this._authService.request('post', `payment`, data)
    //   .subscribe(response => {
    //     console.log('payment response', response);
    //     this.spinner.hide();
    //     Swal.fire({
    //       title: 'Payment Successfull',
    //       icon: 'success'
    //     }).then(result => {
    //       if (result.value) {
    //         this.selectProfileTypeCount = 1;
    //         this.spinner.hide();
    //       }
    //     });
    //   }, err => {
    //     Swal.fire({
    //       text: 'Something went wrong! Please try again later',
    //       icon: 'error'
    //     })
    //   });
  }
}
