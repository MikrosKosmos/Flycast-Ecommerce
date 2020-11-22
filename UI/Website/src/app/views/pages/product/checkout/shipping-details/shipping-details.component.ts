import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constants';
import { UserService } from 'src/app/shared/Services/user.service';

declare const Razorpay: any;

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private constant: Constant) { }

  addressList = [];
  userId = sessionStorage.getItem('UserID');
  contactName: string;
  contactNumber: string;
  address1: string;
  address2: string;
  pincode: number;
  cityId: number;
  addressType: string;
  deliveryInstructions: string;
  isDefault: Number;
  stateName: string;
  cityName: string;
  addressId: number = 0;
  isAddressSelected: boolean;

  ngOnInit(): void {
    this.getUserAddressList();
  }
  getUserAddressList() {
    this.spinner.show();
    this.userService.GetUserAddress(this.userId).subscribe(data => {
      console.log('addresses', data.res);
      this.spinner.hide();
      this.addressList = data.res;
    });
    console.log(this.addressList);
  }

  getAddressOnForm(addressIdInput) {
    console.log('address id', addressIdInput, this.addressList.length);
    for (var i = 0; i < this.addressList.length; i++) {
      if (addressIdInput == this.addressList[i].address_id) {
        this.contactName = this.addressList[i].contact_person_name;
        this.contactNumber = this.addressList[i].contact_phone_number.replace('+91', '');
        this.address1 = this.addressList[i].address_1;
        this.address2 = this.addressList[i].address_2;
        this.pincode = this.addressList[i].pincode;
        this.stateName = this.addressList[i].state_name;
        this.cityName = this.addressList[i].city_name;
        this.addressType = this.addressList[i].address_type;
        this.deliveryInstructions = this.addressList[i].delivery_instructions;
        this.addressId = this.addressList[i].address_id;
        console.log('address at position ', i, this.addressList[i]);
      }
    }
  }

  getAddressId(value){
    sessionStorage.setItem('AddressId', value);
    console.log('Address id', sessionStorage.getItem('AddressId'));
    this.toastr.success('Address Selected');
    this.router.navigate(['/checkouts/billing-details']);
  }
}
