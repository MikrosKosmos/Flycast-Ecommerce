import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent,
        // children: [{
        //   path: '',
        //   loadChildren: './index.module#IndexModule'
        //   //loadChildren: () => import('./index.module').then(m => m.IndexModule)
        // }]
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
];
