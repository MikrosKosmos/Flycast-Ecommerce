import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/Guards/auth.guard';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CheckoutComponent } from './checkout.component';
import { ResultComponent } from './result/result.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

export const checkoutRoutes: Routes = [{
    path: "checkouts",
    //component: CheckoutComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: '', component: CheckoutComponent
        },
        {
            path: "shipping-details",
            component: ShippingDetailsComponent,
            canActivate: [AuthGuard]
            //outlet: "checkOutlet",
        },
        {
            path: "billing-details",
            component: BillingDetailsComponent,
            canActivate: [AuthGuard]
            //outlet: "checkOutlet",
        },
        {
            path: "result",
            component: ResultComponent,
            //outlet: "checkOutlet",
        },
    ],
}];
@NgModule({
    imports: [RouterModule.forChild(checkoutRoutes)],
    exports: [RouterModule],
})
export class CheckoutRoutingModule { }
