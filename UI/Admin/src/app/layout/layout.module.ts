import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopbarComponent } from './main-layout/topbar/topbar.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { FooterComponent } from './main-layout/footer/footer.component';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, TopbarComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutModule { }
