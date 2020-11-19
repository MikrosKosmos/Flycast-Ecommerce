import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  declarations: [ResultComponent, ShippingDetailsComponent, CheckoutComponent],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
