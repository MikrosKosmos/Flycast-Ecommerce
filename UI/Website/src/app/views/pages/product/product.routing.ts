import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { constants } from 'buffer';
import { IndexComponent } from '../../base/index/index.component';
import { CartProductComponent } from './cart-product/cart-product.component';
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
        component: CartProductComponent
      },
      {
        path: "wishlist",
        component: WishlistProductComponent
      },
      {
        path: "product/:sku",
        component: ProductDetailsComponent
      }
    ]
  }
]