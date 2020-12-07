import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/Services/product.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  images: any;
  categoryMobile: string;
  categoryDrone: string;
  categoryAccessories: string;
  pauseOnHover = true;
  pauseOnFocus = true;
  AssetList = [];
  userName: string;
  scrHeight: any;
  scrWidth: any;

  constructor(
    private productService: ProductService,
    public router: Router,
    public toster: ToastrService,
    public spinner: NgxSpinnerService,
  ) { }
  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log('screen dimension:', this.scrHeight, this.scrWidth);
  }
  ngOnInit() {
    this.getScreenSize();
    this.spinner.show();
    this.images = [
      "../assets/img/slide/Drone-Photography-UAV-Coach.jpg",
      "../assets/img/slide/photo-drone-1500x750.jpg",
      "../assets/img/slide/wp1896530-drone-wallpapers.jpg"
    ];
    this.categoryMobile = "../assets/img/slide/IndexPage/Best-Phones-of-2020.jpg";
    this.categoryDrone = "../assets/img/slide/IndexPage/drone-img.webp"
    this.categoryAccessories = "../assets/img/slide/IndexPage/MB-Mobile-Accessories.webp";
    this.userName = sessionStorage.getItem('FirstName') ? sessionStorage.getItem('FirstName') : localStorage.getItem('FirstName');
    console.log('firstname from index', this.userName);
    this.spinner.hide();
    //this.getAllAssets();
  }

  getAllAssets(value) {
    //console.log(value);
    sessionStorage.setItem('CategoryId', value);
    this.productService.getAllAssetsList(value).subscribe(data => {
      console.log('product list', data.res);
      if (data.res.length > 1) {
        this.router.navigate(['/products/all-products/', value]);
      }
      else {
        this.toster.error('Products Unavailable');
      }
    });
  }
  // get data(): any{
  //   return this.productService.productList;
  // }
  // set data(value:any){
  //   this.productService.productList = value;
  // }

}
