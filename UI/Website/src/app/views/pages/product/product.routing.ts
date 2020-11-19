import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { constants } from 'buffer';
import { AuthGuard } from 'src/app/shared/Guards/auth.guard';
import { IndexComponent } from '../../base/index/index.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WishlistProductComponent } from './wishlist-product/wishlist-product.component';


const routes: Routes = [];

export const ProdcutRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "all-products/:catId",
        component: ProductListComponent
      },
      {
        path: "cart-items",
        component: CartProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-list",
        component: OrderListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "wishlist",
        component: WishlistProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "product/:sku",
        component: ProductDetailsComponent
      }
    ]
  }
]