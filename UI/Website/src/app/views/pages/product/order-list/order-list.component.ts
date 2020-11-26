import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BillingService } from 'src/app/shared/Services/billing.service';
import { UserService } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderLists = [];
  addressDetails = [];
  userId = sessionStorage.getItem('UserID') ? sessionStorage.getItem('UserID') : localStorage.getItem('UserID');

  constructor(
    private billingService: BillingService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private userService: UserService,) { }

  ngOnInit(): void {
    this.getUserDeliveryAddress();
    this.getOrderDetails();
  }

  getUserDeliveryAddress() {
    this.spinner.show();
    this.userService.GetUserAddress(this.userId).subscribe(data => {
      this.addressDetails = data.res;
      this.spinner.hide();
    });
  }

  getOrderDetails() {
    this.spinner.show();
    this.billingService.getOrderList().subscribe(data => {
      this.orderLists = data.res;
      this.spinner.hide();
      console.log(this.orderLists, this.addressDetails)
      for (var i = 0; i < this.orderLists.length; i++) {
        for (var j = 0; j < this.addressDetails.length; j++) {
          if (+this.orderLists[i]['shipping_address_id'] == +this.addressDetails[j]['address_id']) {
            this.orderLists[i]['address_combination'] = `${this.addressDetails[j]['address_1']}, ${this.addressDetails[j]['address_2']}, ${this.addressDetails[j]['state_name']}, ${this.addressDetails[j]['city_name']}-${this.addressDetails[j]['pincode']}`;
          }
        }
      }
      console.log('after', this.orderLists);
    });
  }
}
