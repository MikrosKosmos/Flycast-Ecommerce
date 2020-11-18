import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { AuthenticationService } from "src/app/authentication.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: String;
  public displayCount: number = 1;
  public otpErrorMessage: String;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.spinner.hide();
    this.loginForm = this._formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      otp: ["", Validators.compose([Validators.required])],
    });
  }
  onSubmitLogin() {
    this.spinner.show();
    if (this.loginForm.controls.username.value.length === 10) {
      const data = {
        phone_number: `+91${this.loginForm.controls.username.value}`,
      };
      if (data) {
        this._authService.request("post", `auth`, data).subscribe(
          (response) => {
            if (response.res.id === 1) {
              this.displayCount = 2;
            } else {
              this.toastr.error("Flycast", "Phone Number is not registered!");
            }
          },
          (err) => {
            this.toastr.error("Flycast", "Something went wrong!");
          }
        );
      } else {
        this.toastr.error("Flycast", "Something went wrong!");
      }
    } else this.errorMessage = "Invalid Phone number";
    this.spinner.hide();
  }

  /**
   * Method to verify OTP and login.
   */
  otpVerificationSubmit = () => {
    this.spinner.show();
    if (this.loginForm.controls.otp.value.length === 4) {
      const data = {
        phone_number: `+91${this.loginForm.controls.username.value}`,
        otp: +this.loginForm.controls.otp.value,
      };
      if (data) {
        this._authService.request("post", "auth", data).subscribe((res) => {
          if (res.res.id !== -1) {
            this._authService.saveUserDetails(res);
            this.router.navigateByUrl("dashboard");
          } else {
            this.toastr.error("Flycast", "Something went wrong!");
          }
        });
      } else {
        this.toastr.error("Flycast", "Something went wrong!");
      }
    } else {
      this.otpErrorMessage = "Invalid OTP";
    }
    this.spinner.hide();
  };
}
