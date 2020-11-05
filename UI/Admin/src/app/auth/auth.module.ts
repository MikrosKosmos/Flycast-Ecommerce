import { UiModule } from './../ui/ui.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

export const AuthRoute: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'forget/:token', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetpasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgetPasswordComponent, ResetpasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoute),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    FormsModule
  ]
})
export class AuthModule { }
