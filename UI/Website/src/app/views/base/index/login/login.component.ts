import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
//import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin: boolean;
  userLoginPhoneNumber: number;
  isAccepted: boolean = false;
  isUserRegistered: boolean = false;
  registeredUserId: number;
  registeredUserPhoneNumber: string = '';
  public displayCount: number;
  public formData: any = {};
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    //console.log('screen dimension:', this.scrHeight, this.scrWidth);
  }
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService,
    public tostrService: ToastrService,
    public spinner: NgxSpinnerService,
    //private cookieService: CookieService
  ) {
    this.displayCount = 1;
  }

  ngOnInit(): void {
    this.getScreenSize();
    this.loginForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      otp: ['', Validators.required],
      rememberMe: [''],
      // username: ['', Validators.required],
      // password: ['', Validators.required],
      // confirmPassword: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      gender: ['', Validators.required],
      checkArray: this.formBuilder.array([], [Validators.required]),
    });
    this.isLogin = false;
  }

  /**
   * Method to registration of a user
   * @param formInput
   */
  registerUser(formInput) {
    this.displayCount = 4;
    var registrationDetails = {
      first_name: formInput.value.firstname,
      last_name: formInput.value.lastname,
      phone_number: '+91' + formInput.value.phoneNumber,
      gender: formInput.value.gender,
    };
    console.log('registrationDetails', registrationDetails);
    this.spinner.show();
    this.authService
      .UserRegistrationValidation(registrationDetails)
      .subscribe((data) => {
        console.log('LOGIN data', data.res.id);
        this.spinner.hide();
        if (data.res.id > 0) {
          this.isUserRegistered = true;
          this.registeredUserPhoneNumber = registrationDetails.phone_number;
          console.log(
            'ready to accept otp: ',
            this.isUserRegistered,
            this.registeredUserPhoneNumber
          );
          this.tostrService.warning(
            formInput.value.firstname + ' ' + formInput.value.lastname,
            'OTP was sent to your registered phone number'
          );
        } else this.tostrService.error('Contact number not found');
      });
  }

  otpVerification(formInput) {
    var otpVerification = {
      phone_number: this.registeredUserPhoneNumber,
      otp: formInput.value.otp,
    };
    console.log('after details', otpVerification);
    this.authService.UserOTPRegistration(otpVerification).subscribe((data) => {
      console.log('after otp validation: ', data);
      if (data.res.id != -1) {
        this.tostrService.success(
          'OTP validation successful',
          formInput.value.firstname + ' ' + formInput.value.lastname
        );
        sessionStorage.setItem('FirstName', data.res.first_name);
        sessionStorage.setItem('LastName', data.res.last_name);
        sessionStorage.setItem('JwToken', data.res.jw_token);
        sessionStorage.setItem('UserID', data.res.id);
        this.isLogin = true;
        if (formInput.value.otp != null) {
          this.tostrService.success(
            sessionStorage.getItem('FirstName') ? sessionStorage.getItem('FirstName') : localStorage.getItem('FirstName'), 'Welcome');
        }
        this.router.navigate(['']);
      } else {
        this.tostrService.error('OTP validation failed');
        this.router.navigate(['/login']);
      }
    });
    //this.router.navigate(['/userDetails']);
  }

  formLogin(formInput) {
    this.displayCount = 2;
    this.isUserRegistered = true;
    this.registeredUserPhoneNumber = formInput.value.phoneNumber;
    //console.log('registered status', this.isUserRegistered, this.registeredUserPhoneNumber);
    var otpVerification = {
      phone_number: '+91' + this.registeredUserPhoneNumber,
      otp: formInput.value.otp,
    };
    console.log('input variables: ', otpVerification, formInput);
    if (formInput.value.otp > 0) {
      this.spinner.show();
    }
    this.authService.UserLogin(otpVerification).subscribe((data) => {
      console.log('after otp validation: ', data);
      if (data.res.id > 0 && formInput.value.otp > 0) {
        if (formInput.value.rememberMe == true) {
          console.log('local storage');
          localStorage.setItem('FirstName', data.res.first_name);
          localStorage.setItem('LastName', data.res.last_name);
          localStorage.setItem('JwToken', data.res.jw_token);
          localStorage.setItem('UserID', data.res.id);
        } else {
          console.log('session storage');
          sessionStorage.setItem('FirstName', data.res.first_name);
          sessionStorage.setItem('LastName', data.res.last_name);
          sessionStorage.setItem('JwToken', data.res.jw_token);
          sessionStorage.setItem('UserID', data.res.id);
        }
        //this.tostrService.success('OTP validation successful', formInput.value.firstname + ' ' + formInput.value.lastname);

        this.isLogin = true;
        this.displayCount = 2;
        this.tostrService.success(
          sessionStorage.getItem('FirstName') ? sessionStorage.getItem('FirstName') : localStorage.getItem('FirstName'),
          'Welcome'
        );
        this.spinner.hide();
        //this.router.navigate(['/']);
        const currentRoute = this.router.url; //get current route
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/']); // navigate to same route
        });
        //window.location.reload();
      } else if (data.res.id == -1)
        this.tostrService.error('OTP validation failed');
    });
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
    user.active = !user.active;
  }
}
