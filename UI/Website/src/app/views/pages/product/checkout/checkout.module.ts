import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CheckoutComponent } from './checkout.component';
import { Constant } from 'src/app/shared/constants';
import { RouterModule } from '@angular/router';
import { checkoutRoutes, CheckoutRoutingModule } from './checkout.routing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BillingDetailsComponent } from './billing-details/billing-details.component';



@NgModule({
  declarations: [
    ResultComponent, 
    ShippingDetailsComponent, 
    CheckoutComponent, 
    BillingDetailsComponent
  ],
  imports: [
    CommonModule,
    //RouterModule.forChild(checkoutRoutes),
    NgxSpinnerModule,
    CheckoutRoutingModule
  ],
  exports: [
    CheckoutComponent
  ],
  providers: [Constant]
})
export class CheckoutModule { }
