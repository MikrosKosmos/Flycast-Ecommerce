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
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber: string;

  /*button name changes*/
  editPI: boolean = true;
  editEmailid: boolean = true;
  editPhoneNumber: boolean = true;

  userName: string;
  accountDetailsForm: FormGroup;
  userId = sessionStorage.getItem('UserID');

  @ViewChild('FN') inputFirstName: ElementRef;
  @ViewChild('LN') inputLastName: ElementRef;
  @ViewChild('Email') inputEmail: ElementRef;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toster: ToastrService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('FirstName');
    this.getUserDetailsByID();

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
      console.log('UserDetails: ', data.res);
      this.firstName = data.res.first_name;
      this.lastName = data.res.last_name;
      this.email = data.res.email;
      this.gender = data.res.gender;
      this.phoneNumber = data.res.phone_number;
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
    console.log('api body', updateEmail);
    this.userService.UpdateUserDetailsById(updateEmail).subscribe(data => {
      console.log('after update', data);
      if (data.res.id == 1) {
        this.toster.success('EmailId updated');
      }
    })
  }
}
