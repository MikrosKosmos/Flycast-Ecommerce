import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-attribute-list",
  templateUrl: "./attribute-list.component.html",
  styleUrls: ["./attribute-list.component.scss"],
})
export class AttributeListComponent implements OnInit {
  parentForm: FormGroup;
  attributeList = [];
  categoryList = [];
  isCategorySelected: boolean = false;

  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      category: [""],
    });
    this.getCategoryList();
    this.getAttribute(0);
  }

  getCategoryList = () => {
    this.spinner.show();
    setTimeout(() => {
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
    }, 1000);
    this.spinner.hide();
  };

  /**
   * Method to get attribute by category
   * @param index Varibale to get category id
   */
  getAttribute = (index) => {
    this.spinner.show();
    if (index) {
      this.isCategorySelected = true;
      this.attributeList.length = 0;
      setTimeout(() => {
        this._authService
          .request("get", `attribute?category_id=${index}`)
          .subscribe((response) => {
            this.attributeList = response.res;
            this.spinner.hide();
          });
      }, 1000);
    }
  };
}
