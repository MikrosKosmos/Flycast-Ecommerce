import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePwdForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toster: ToastrService,
    public router: Router) { }

  ngOnInit(): void {
    this.changePwdForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  updatePassword(inputPassword){
    var encryptedText = CryptoJS.AES.encrypt('encrypt the text', inputPassword.value.confirmPassword).toString();
    console.log(encryptedText);
    if(inputPassword.value.password == inputPassword.value.confirmPassword && inputPassword.value.password.length > 7){
      var updatePassword = {
        "id": Number(sessionStorage.getItem('UserID')),
        "password": encryptedText,
      };
      console.log('api var', updatePassword);
      this.userService.UpdateUserDetailsById(updatePassword).subscribe(data => {
        console.log('after update', data);
        // if (data.res.id == 1) {
          this.toster.success('Passowrd updated');
          sessionStorage.clear();
          this.router.navigate(['/login']);
          this.toster.success('Login with new password');
        // }
      });
    }
    else
    {
      this.toster.error('Password Unmatched')
    }
  }
}
