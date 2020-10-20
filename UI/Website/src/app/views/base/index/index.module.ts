import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from "./../../../shared/shared.module";
import { IndexComponent } from './index.component';
import { ProductModule } from '../../pages/product/product.module';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FooterComponent, 
    LoginComponent, 
    NavbarComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductModule,
    NgbModule,
    RouterModule.forChild(IndexRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent],
  providers: [],
})
export class IndexModule { }
