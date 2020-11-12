import {NgxSpinnerService} from 'ngx-spinner';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/authentication.service';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'emp-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  isSubmitted = false;
  errorMessage: string = '';
  validToken;
  errorMessageToken = '';
  passwordResetErrorMessage = '';

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private auth: AuthenticationService,
              private spinner: NgxSpinnerService,
              private toast: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.spinner.show();
    console.log(window.location.href.split('=')[1]);
    this.auth.getValidResetPasswordToken(window.location.href.split('=')[1]).subscribe((response) => {
      console.log(response);
      if (response.status === 200) {
        this.validToken = true;
        this.errorMessageToken = '';
        this.spinner.hide();
      } else {
        this.errorMessageToken = response.message;
        this.spinner.hide();
      }
    }, (error) => {
      this.errorMessageToken = 'Sorry the link/token has been expired';
      this.passwordResetErrorMessage = '';
      this.spinner.hide();
    });
    this.resetPasswordForm = this.fb.group({
      newPassword: ['',
        [Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,25}$')]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  resetPassword() {
    this.isSubmitted = true;
    if (this.checkPassword()) {
      this.spinner.show();
      console.log('reset password');
      console.log(this.resetPasswordForm.value);
      let data = {};
      data['password'] = this.resetPasswordForm.get('newPassword').value;
      data['email'] = '';
      data['token'] = window.location.href.split('=')[1];
      console.log(data);
      this.auth.setNewPassword(data).subscribe((response) => {
        if(response.status === 200){
          this.spinner.hide();
          this.toast.success(response.message);
          this.router.navigateByUrl('/auth/login');
        }
      }, (error) => {
        this.passwordResetErrorMessage = 'Something went wrong. Please try again later!';
        this.spinner.hide();
        console.log(error);
      });
    } else {
      console.log('something went wrong');
    }
  }

  get passwordControl() {
    return this.resetPasswordForm.controls;
  }

  checkPassword() {
    if (this.resetPasswordForm.get('newPassword').value === this.resetPasswordForm.get('confirmPassword').value) {
      this.errorMessage = '';
      return true;
    } else {
      this.errorMessage = 'Password and confirm Password not matched, Please try again';
      return false;
    }
  }

}
