import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { AuthGuard } from './Guards/auth.guard';
import { AuthService } from './Services/auth.service';
import { ProductService } from './Services/product.service';
import { UserService } from './Services/user.service';
import { BillingService } from './Services/billing.service';
import { ShippingService } from './Services/shipping.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    NgxContentLoadingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    NgxContentLoadingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    ProductService,
    UserService,
    BillingService,
    ShippingService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
