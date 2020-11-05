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

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: String;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.hide();
    this.loginForm = this._formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
    });
  }
  onSubmitLogin() {
    this.spinner.show();
    if (
      this.loginForm.controls.username.value === "admin" &&
      this.loginForm.controls.password.value === "admin"
    ) {
      this.router.navigateByUrl("dashboard");
      this.spinner.hide();
    } else {
      this.errorMessage = "Invalid Username or Password";
      this.spinner.hide();
    }
  }
}
