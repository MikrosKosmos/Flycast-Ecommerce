import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent implements OnInit {
  categoryList = [];
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this._authService.headerText.next({
      headerStrong: "Category",
      headerText: "",
    });
    this.getCategoryList();
  }

  /**
   * Mathod to get category list
   */
  getCategoryList = () => {
    setTimeout(() => {
      this._authService.request("get", "category").subscribe((response) => {
        this.categoryList = response.res;
        this.spinner.hide();
      });
    }, 1000);
  };
}
