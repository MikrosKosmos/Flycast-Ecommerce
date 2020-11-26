import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-assets-list",
  templateUrl: "./assets-list.component.html",
  styleUrls: ["./assets-list.component.scss"],
})
export class AssetsListComponent implements OnInit {
  parentForm: FormGroup;
  assetsList = [];
  categoryList = [];
  isCategory: boolean = false;
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCategoryList();
    this.parentForm = this.formBuilder.group({
      category: [""],
    });
  }

  getCategoryList = () => {
    this._authService.request("get", "category").subscribe((response) => {
      if (response.res.length > 0) {
        response.res.forEach((element) => {
          this.categoryList.push({
            code: element.id,
            value: element.category_name,
          });
        });
      }
    });
  };

  /**
   * Method to get assets list
   */
  getAssetsList = (value) => {
    console.log(value);
    if (value) {
      this.spinner.show();
      this.isCategory = true;
      setTimeout(() => {
        this._authService
          .request("get", `asset?category_id=${value}`)
          .subscribe((response) => {
            console.log("assets list ", response);
            this.assetsList = response.res;
            this.spinner.hide();
          });
      }, 1000);
    }
  };
}
