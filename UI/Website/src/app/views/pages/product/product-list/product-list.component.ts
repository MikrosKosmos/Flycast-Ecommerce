import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  filterCategories: { filterType: string, sortOrder: number }[];
  productCategory: string;
  productCategoryName: string;
  productDetails: [];
  closeResult = '';
  productInModal;
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //console.log(this.productService.productList);
    this.getAllProducts();
  }

  getAllProducts() {
    // this.filterCategories = [
    //   { filterType: "Price", sortOrder: 1 },
    //   { filterType: "Brand", sortOrder: 2 },
    //   { filterType: "Resolution", sortOrder: 3 },
    //   { filterType: "RAM", sortOrder: 4 },
    //   { filterType: "CPU", sortOrder: 5 },
    //   { filterType: "Screen Size", sortOrder: 6 },
    //   { filterType: "Internal Storage", sortOrder: 7 },
    //   { filterType: "Battery Capacity", sortOrder: 8 },
    //   { filterType: "Customer Rating", sortOrder: 9 }
    // ];
    this.productCategory = this.activeRoute.snapshot.paramMap.get("catId");
    //console.log('cat id: ', this.productCategory)
    this.productService.getAllAssetsList(this.productCategory).subscribe(data => {
      console.log(data.res);
      this.productCategoryName = data.res[0].category_name;
      this.productDetails = data.res;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getProductDetailsBySKU(value) {
    console.log('SKU value', value);
    this.route.navigate(['/products/product/', value])
  }

  quickViewProductsById(content, productDetail) {
    this.productInModal = [];
    this.productInModal.push(productDetail);
    console.log('product id: ', productDetail, content);
    this.modalService.open(content, { centered: true, size: 'xl', scrollable: true, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //this.productService.getProductDetailsById(productDetail);
  }

  addFavourite(product) {
    //this.productService.addFavouriteProduct(product);
  }

  addToCart(product) {
    //this.productService.addToCart(product);
  }
}
