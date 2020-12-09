import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-sku-list",
  templateUrl: "./sku-list.component.html",
  styleUrls: ["./sku-list.component.scss"],
})
export class SkuListComponent implements OnInit {
  skuList = [];
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getSKUList();
  }

  /**
   * Method to get SKU List,
   */
  getSKUList = () => {
    setTimeout(() => {
      this._authService.request("get", "sku").subscribe((response) => {
        if (response.res.length > 0) {
          this.skuList = response.res;
          this.spinner.hide();
        } else {
          this.spinner.hide();
        }
      });
    }, 1000);
  };
}
