import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin: boolean;
  userLoginPhoneNumber: number;
  isAccepted: boolean = false;
  isUserRegistered: boolean = false;
  registeredUserId: number;
  registeredUserPhoneNumber: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService,
    public tostrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      otp: ['', Validators.required],
      // username: ['', Validators.required],
      // password: ['', Validators.required],
      // confirmPassword: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['', Validators.required],
      checkArray: this.formBuilder.array([], [Validators.required]),
    });
    this.isLogin = false;
  }

  registerUser(formInput) {
    var registrationDetails = {
      "first_name": formInput.value.firstname,
      "last_name": formInput.value.lastname,
      "phone_number": "+91" + formInput.value.phoneNumber,
      "gender": formInput.value.gender
    };
    console.log(registrationDetails, formInput.valid);
    this.authService.UserRegistrationValidation(registrationDetails).subscribe(data => {
      console.log("LOGIN data", data.res.id);
      if (data.res.id > 0) {
        this.isUserRegistered = true;
        this.registeredUserPhoneNumber = registrationDetails.phone_number;
        console.log('ready to accept otp: ', this.isUserRegistered, this.registeredUserPhoneNumber);
        this.tostrService.success('Customer account registered', formInput.value.firstname + ' ' + formInput.value.lastname);
      }
      else
        this.tostrService.error('Contact number not found');
    });

  }

  otpVerification(formInput) {
    var otpVerification = {
      "phone_number": this.registeredUserPhoneNumber,
      "otp": formInput.value.otp
    };
    this.authService.UserOTPRegistration(otpVerification).subscribe(data => {
      console.log('after otp validation: ', data);
      if (data.res.id != -1) {
        this.tostrService.success('OTP validation successful', formInput.value.firstname + ' ' + formInput.value.lastname);
        sessionStorage.setItem('FirstName', data.res.first_name);
        sessionStorage.setItem('LastName', data.res.last_name);
        sessionStorage.setItem('JwToken', data.res.jw_token);
        sessionStorage.setItem('RoleName', data.res.roles[0].role_name);
        sessionStorage.setItem('RequestKey', data.res.request_Key);

        this.isLogin = true;
        this.tostrService.success('Please Login with your phone number');
      }
      else
        this.tostrService.error('OTP validation failed');
    });
  }

  formLogin(formInput) {
    console.log("user login phone number: ", formInput.value.phoneNumber);
    this.isUserRegistered = true;
    this.registeredUserPhoneNumber = formInput.value.phoneNumber;
  }

  otpVerificationLogin(formInput) {
    console.log("Entered OTP: ", formInput.value.otp);
    var otpVerification = {
      "phone_number": "+91" + this.registeredUserPhoneNumber,
      "otp": formInput.value.otp
    };
    console.log("input variables: ", otpVerification);

    // this.authService.UserLogin(otpVerification).subscribe(data => {
    //   console.log('after otp validation: ', data);
    // });
    //this.router.navigate(['/products/']);
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.loginForm.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      this.isAccepted = true;
    } else {
      this.isAccepted = false;
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  changeFormType(user) {
    console.log(user);
    user.active = !user.active
  }
}
