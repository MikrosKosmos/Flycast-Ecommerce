import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  filterCategories: { filterType: string, sortOrder: number }[];
  productDetails: { productId: number, productName: string, price: number, description: string, imageSrc: string }[];
  closeResult = '';
  productInModal;
  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.filterCategories = [
      { filterType: "Price", sortOrder: 1 },
      { filterType: "Brand", sortOrder: 2 },
      { filterType: "Resolution", sortOrder: 3 },
      { filterType: "RAM", sortOrder: 4 },
      { filterType: "CPU", sortOrder: 5 },
      { filterType: "Screen Size", sortOrder: 6 },
      { filterType: "Internal Storage", sortOrder: 7 },
      { filterType: "Battery Capacity", sortOrder: 8 },
      { filterType: "Customer Rating", sortOrder: 9 }
    ];
    this.productDetails = [
      { productId: 1, productName: "Motorola Edge+ (Smoky Sangria, 256 GB)  (12 GB RAM)", price: 64999, description: "There are many ways to describe the Motorola Racer Turbo Edge+ smartphone! You can call it a powerful performer, thanks to the presence of 5G and the Qualcomm Snapdragon 865 processor. You can call it the professional photographer, as it comes with a 108 MP triple camera system. With features such as the tuning technology from Waves in place, this smartphone is an audio wonder too! So, whether it’s for work or for entertainment, you can count on this smartphone from Motorola to be by your side.", imageSrc: "assets/img/slide/product/mobiles/Motorola/motorola-racer-turbo-edge.jpeg" },
      { productId: 1, productName: "Samsung Galaxy S10 Plus (Prism Black, 128 GB)  (8 GB RAM)", price: 74999, description: "Get ready to explore the next generation of powerful computing and mobile photography with the Samsung Galaxy S10 Plus. It comes with an Intelligent Camera that automatically optimizes its settings to give you picture-perfect photos.", imageSrc: "assets/img/slide/product/mobiles/Samsung/samsung-galaxy-s10-plus.jpeg" },
      { productId: 1, productName: "Samsung Galaxy Note 10 (Aura Black, 256 GB)  (8 GB RAM)", price: 75000, description: "Powered by a 7nm processor, 8 GB of RAM, 256 GB of internal storage capacity and a 2.0 Gbps LTE connection, the Note 10 lets you download files, live-game, and stream content seamlessly.", imageSrc: "assets/img/slide/product/mobiles/Samsung/galaxy-note-10-256.jpeg" },
      { productId: 1, productName: "Samsung Galaxy S20 Ultra (Cosmic Gray, 128 GB)  (12 GB RAM)", price: 97999, description: "Say hello to the powerful and stylish Samsung Galaxy S20 Ultra smartphone. Featuring a 108 MP high-resolution camera with 100X Zoom, you can capture stunning photos like never before on this smartphone. It also comes with a long-lasting 5000 mAh battery so you can stay entertained for a long time.", imageSrc: "assets/img/slide/product/mobiles/Samsung/samsung-galaxy-s20-ultra.jpeg" },
      { productId: 1, productName: "Motorola Razr 5G (Polished Graphite, 256 GB)  (8 GB RAM)", price: 124999, description: "The Moto razr 5G combines the classic flip phone design with the performance needed for today’s smartphone user. This 5G-ready phone features a premium design that will definitely make its on-lookers be in awe of it.", imageSrc: "assets/img/slide/product/mobiles/Motorola/motorola-razr-5g.jpeg" },
    ];
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
