import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    UserComponent,
    UserAccountComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule { }
