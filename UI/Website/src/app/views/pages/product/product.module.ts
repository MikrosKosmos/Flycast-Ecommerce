import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdcutRoutes } from './product.routing';

import { CheckoutModule } from './checkout/checkout.module';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product.component';
import { WishlistProductComponent } from './wishlist-product/wishlist-product.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { StarRatingComponent } from 'ng-starrating';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/shared/Guards/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CartProductComponent } from './cart-product/cart-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartProductComponent,
    WishlistProductComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProdcutRoutes),
    SharedModule,
    CheckoutModule,
    FormsModule,
    RatingModule.forRoot(),
    NgxSpinnerModule
    //NgbRatingModule.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule { }
