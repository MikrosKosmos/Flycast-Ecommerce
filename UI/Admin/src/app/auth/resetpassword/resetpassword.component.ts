import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../authentication.service';
import {NgxSpinnerService} from 'ngx-spinner';
import Swal from "sweetalert2";

@Component({
  selector: 'emp-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthenticationService,
              private spinner: NgxSpinnerService,
              private route: Router,
              private activatedRout: ActivatedRoute) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])]
    });
  }

  resetPasswoord() {
    console.log(this.activatedRout.snapshot.paramMap.get('token'));
    //this.route.navigateByUrl('/auth/reset-password')
    //console.log(this.forgetPasswordForm.value);
    let data = {};
    data['email'] = this.forgetPasswordForm.get('email').value;
    data['password'] = '';
    this.spinner.show();
    this.auth.resetPassword(data).subscribe(
      (response) => {
          Swal.fire({
            title: response.message,
            showConfirmButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            allowOutsideClick: false
          }).then((result) =>{
            if(result.value){
              this.route.navigateByUrl('/auth/login');
            }
          });
        console.log(response);
        this.spinner.hide();
      }, (err) => {
        Swal.fire({
          title: err.error.message,
          showConfirmButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          allowOutsideClick: false
        });
        this.spinner.hide();
        console.log(err);
      }
    )
  }
}
