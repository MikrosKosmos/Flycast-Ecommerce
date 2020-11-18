import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/Services/product.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productSKU: string;
  productDetails: [];
  productQuantity: number = 1;
  IsAvailable: boolean;
  /*Test Rating*/
  max: number = 5;
  rate: number;
  isReadonly: boolean = false;
  overStar: number;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.productSKU = this.activeRoute.snapshot.paramMap.get("sku");
    this.getProductDetailsBySKU();
  }

  getProductDetailsBySKU() {
    this.productService.getProductDetailsBySKU(this.productSKU).subscribe(data => {
      this.productDetails = data['res'];
      //this.overStar = data['res'][0].average_rating;
      this.rate = data['res'][0].average_rating;
      if (data['res'][0].stock_quantity > 0)
        this.IsAvailable = true;
      else
        this.IsAvailable = false;
      // this.IsAvailable = 
      console.log(data['res'][0])
    });
  }

  addToCart() {
    var putBody = {
      "sku": this.productSKU,
      "quantity": Number(this.productQuantity)
    }

    console.log('add to cart put body', putBody);
    this.productService.addProductTocart(putBody).subscribe(data => {
      console.log(data['res'].id);
      if (data['res'].id > 0) {
        this.toaster.success('Product has been added into cart');
      }
    });
  }

  changeQuantity(qty) {
    //console.log('Quantity', qty);
    this.productQuantity = qty;
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  hoveringOverRating(value: number): void {
    this.overStar = value;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  updateRating() {
    console.log(this.rate);
    var putBody = {
      "sku": this.productSKU,
      "rating": Number(this.rate)
    }
    console.log('add to cart put body', putBody);
    this.productService.updateSKURating(putBody).subscribe(data => {
      console.log(data.res.id);
      if (data.res.id > 0)
        this.ngOnInit();
      //   window.location.reload();
    });
  }
}
