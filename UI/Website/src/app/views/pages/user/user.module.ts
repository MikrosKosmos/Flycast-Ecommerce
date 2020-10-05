import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAccountComponent } from './user-account/user-account.component';


@NgModule({
  declarations: [UserComponent, UserAccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
