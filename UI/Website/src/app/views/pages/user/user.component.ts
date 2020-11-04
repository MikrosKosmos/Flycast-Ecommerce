import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  /*personal details input variables*/
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  userPhoneNumber: string;
  stateList = [];
  cityList = [];
  addressList = [];

  /*new address input variables*/
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

  /*Pages*/
  addressPage: boolean;
  accountDetailsPage: boolean;
  ordersPage: boolean;

  /*button name changes*/
  editPI: boolean = true;
  editEmailid: boolean = true;
  editPhoneNumber: boolean = true;

  userName: string;

  accountDetailsForm: FormGroup;
  newAddressForm: FormGroup;

  userId = sessionStorage.getItem('UserID');

  @ViewChild('FN') inputFirstName: ElementRef;
  @ViewChild('LN') inputLastName: ElementRef;
  @ViewChild('Email') inputEmail: ElementRef;
  @ViewChild('PhoneNumber') inputNumber: ElementRef;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toster: ToastrService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('FirstName');
    this.getUserDetailsByID();
    this.accountDetailsPage = true;

    this.accountDetailsForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['', Validators.required],
    });
  }

  getUserDetailsByID() {
    this.userService.UserDetailsById(this.userId).subscribe(data => {
      console.log('UserDetails: ', data.res.phone_number);
      this.firstName = data.res.first_name;
      this.lastName = data.res.last_name;
      this.email = data.res.email;
      this.gender = data.res.gender;
      this.userPhoneNumber = data.res.phone_number.replace('+91', '');
      console.log('Phone Number 1', this.userPhoneNumber);
    });
  }

  editPersonalInformation(e) {
    console.log(e, this.inputLastName.nativeElement);
    this.editPI = false;
    this.inputFirstName.nativeElement.removeAttribute('disabled');
    this.inputLastName.nativeElement.removeAttribute('disabled');
    //this.accountDetailsForm.controls['lastName'].enable();
  }

  cancelPersonalInformation() {
    this.editPI = true;
    this.inputFirstName.nativeElement.setAttribute('disabled', '');
    this.inputLastName.nativeElement.setAttribute('disabled', '');
    //this.accountDetailsForm.controls['lastName'].enable();
    console.log(this.inputLastName.nativeElement);
  }

  editEmailId() {
    this.editEmailid = false;
    this.inputEmail.nativeElement.removeAttribute('disabled');
  }

  cancelEmailId() {
    this.editEmailid = true;
    this.inputEmail.nativeElement.setAttribute('disabled', '');
  }

  updateUserEmailId(emailInput) {
    var updateEmail = {
      "id": Number(this.userId),
      "email": emailInput.value.email,
    };
    //console.log('api body', updateEmail);
    this.userService.UpdateUserDetailsById(updateEmail).subscribe(data => {
      console.log('after update', data);
      if (data.res.id == 1) {
        this.toster.success('EmailId updated');
      }
    });
  }

  editUserPhoneNumber() {
    this.editPhoneNumber = false;
    this.inputNumber.nativeElement.removeAttribute('disabled');
  }

  cancelUserPhoneNumber() {
    this.editPhoneNumber = true;
    this.inputNumber.nativeElement.setAttribute('disabled', '');
  }

  updatePhoneNumber(phoneNumberInput) {
    var updateNumber = {
      "id": Number(this.userId),
      "phone_number": "+91" + phoneNumberInput.value.phoneNumber,
    }
    //need to integrate OTP service
    this.userService.UpdateUserDetailsById(updateNumber).subscribe(data => {
      console.log('after update', data);
      if (data.res.id == 1) {
        this.toster.success('Phone Number Changed');
      }
    });
  }

  passwordChangeNewWindow() {
    window.open('/users/change-password', '_blank');
  }

  switchToAddress() {
    this.ordersPage = false;
    this.accountDetailsPage = false;
    this.addressPage = true;
    this.loadNewAddressForm();
    this.getStatesList();
    this.getUserAddressList();
  }

  switchToAccountDetails() {
    this.ordersPage = false;
    this.accountDetailsPage = true;
    this.addressPage = false;
  }

  switchToOrders() {
    this.ordersPage = true;
    this.accountDetailsPage = false;
    this.addressPage = false;
  }

  loadNewAddressForm() {
    this.newAddressForm = this.formBuilder.group({
      contactPersonName: ['', Validators.required],
      contactPersonPhNo: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      addressType: ['', Validators.required],
      deliveryInstructions: [''],
      isDefault: ['']
    });
  }

  getStatesList() {
    this.stateList = [];
    this.userService.GetStateList().subscribe(data => {
      this.stateList = data.res;
      //console.log('state list', this.stateList);
    });
  }

  selectCityOnStateId(event) {
    this.cityList = [];
    //console.log('state id value', event.target.value);
    this.userService.GetCityListByStateId(event.target.value).subscribe(data => {
      //console.log(data.res);
      this.cityList = data.res;
    });
  }

  addNewAddress(formInput) {
    //console.log('form input value', formInput.value);
    var putBody = {
      "user_id": Number(this.userId),
      "address_id": 0,
      "contact_person_name": formInput.value.contactPersonName,
      "contact_phone_number": '+91' + formInput.value.contactPersonPhNo,
      "address_1": formInput.value.address1,
      "address_2": formInput.value.address2,
      "city_id": Number(formInput.value.city),
      "pincode": Number(formInput.value.pinCode),
      "address_type": formInput.value.addressType,
      "delivery_instructions": formInput.value.deliveryInstructions,
      "is_default": (formInput.value.isDefault == true) ? 1 : 0
    };
    //console.log('put body', putBody);
    this.userService.UpdateOrAddAddress(putBody).subscribe(data => {
      //console.log('response', data.res);
      if (data.res.id > 0) {
        this.toster.success('Address Updated');
      }
      else
        this.toster.error('Address Update Failed');
    });
    window.location.reload();
    this.switchToAddress();
  }

  getUserAddressList() {
    this.userService.GetUserAddress(this.userId).subscribe(data => {
      console.log('addresses', data.res);
      this.addressList = data.res;
    });
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
        console.log('address at position ', i, this.addressList[i]);
      }
    }
  }
}
