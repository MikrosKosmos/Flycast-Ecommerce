import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/Guards/auth.guard';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserComponent } from './user.component';

export const UserRoutes: Routes = [
  {
    path: "",
    component: UserComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: "userDetails",
        component: UserAccountComponent
      }
    ]
  }
];