import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import { RequiredValidator } from "src/app/core/validators/required.validator";
import Swal from "sweetalert2";

@Component({
  selector: "emp-create-assets",
  templateUrl: "./create-assets.component.html",
  styleUrls: ["./create-assets.component.scss"],
})
export class CreateAssetsComponent implements OnInit {
  parentForm: FormGroup;
  attributeValueForm: FormGroup;
  productGradeList = [
    { code: "Excellent", value: "Excellent" },
    { code: "New", value: "New" },
    { code: "Like New", value: "Like New" },
    { code: "Poor", value: "Poor" },
    { code: "Very Poor", value: "Very Poor" },
  ];
  SKUList = [];
  categoryList = [];
  attributeList = [];
  attributePossibleValue = [];
  attribute_values = [];
  attributeDisplayList = [];
  errorMessage: string;
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initParentForm();
    this.initAttributeValueForm();
    this.getCategoryList();
    this.getSKUList();
  }

  /**
   * Method to init parent form
   */
  initParentForm = () => {
    this.parentForm = this.formBuilder.group({
      asset_name: [
        "",
        Validators.compose([RequiredValidator("Asset Name is required")]),
      ],
      asset_unique_number: [
        "",
        Validators.compose([RequiredValidator("Unique Number is required")]),
      ],
      category: [
        "",
        Validators.compose([RequiredValidator("Category is required")]),
      ],
      sub_category: [""],
      manufacturer: [
        "",
        Validators.compose([RequiredValidator("Manufacturer is required")]),
      ],
      location: [
        "",
        Validators.compose([RequiredValidator("Location is required")]),
      ],
      sku: ["", Validators.compose([RequiredValidator("SKU is required")])],
      product_grade: [
        "",
        Validators.compose([RequiredValidator("Product Grade is required")]),
      ],
      procurement_price: [
        "",
        Validators.compose([
          RequiredValidator("Procurement Price is required"),
        ]),
      ],
      base_price: [
        "",
        Validators.compose([RequiredValidator("Base Price is required")]),
      ],
      selling_price: [
        "",
        Validators.compose([RequiredValidator("Selling Price is required")]),
      ],
    });
  };

  /**
   * Method to init attribute possible value form
   */
  initAttributeValueForm = () => {
    this.attributeValueForm = this.formBuilder.group({
      attribute_id: [
        "",
        Validators.compose([RequiredValidator("Attribute is required")]),
      ],
      attribute_value: [
        "",
        Validators.compose([RequiredValidator("Attribute Value is required")]),
      ],
    });
  };

  /**
   * Marks all controls in a form group as touched
   * param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /**
   * Method to get category list
   */
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
   * Method to get category id
   * @param event Variable which recived selected category id
   */
  selectedCategory = (value) => {
    if (value) {
      this.attributeList.length = 0;
      this.attributePossibleValue.length = 0;
      this.attributeDisplayList.length = 0;
      this.attributeValueForm.markAsUntouched();
      this._authService
        .request("get", `attribute?category_id=${value}`)
        .subscribe((response) => {
          if (response.res.length > 0) {
            response.res.forEach((element) => {
              this.attributeList.push({
                code: element.attribute_id,
                value: element.attribute_name,
              });
            });
          }
        });
    }
  };

  /**
   * Method to get attribute id
   * @param value Variable which recived selected attribute id
   */
  selectedAttribute = (value) => {
    if (value) {
      this.attributePossibleValue.length = 0;
      this._authService
        .request("get", `attribute?attribute_id=${value}`)
        .subscribe((response) => {
          if (response.res.length > 0) {
            response.res.forEach((element) => {
              this.attributePossibleValue.push({
                code: element.possible_value,
                value: element.possible_value,
              });
            });
          }
        });
    }
  };

  /**
   * Method to remove item from attributeDisplay array
   * @param index Index of item
   */
  removeItem = (index) => {
    this.attributeDisplayList.splice(index, 1);
  };

  /**
   * Method to add attribute.
   */
  addAttribute = () => {
    if (this.attributeValueForm.invalid)
      this.markFormGroupTouched(this.attributeValueForm);
    else {
      this.attribute_values.push(this.attributeValueForm.value);
      let name = this.attributeList.filter(
        (x) => x.code === +this.attributeValueForm.controls.attribute_id.value
      );
      let value = this.attributePossibleValue.filter(
        (x) => x.code === this.attributeValueForm.controls.attribute_value.value
      );
      this.attributeDisplayList.push({
        attributeName: name[0].value,
        valueName: value[0].value,
      });
      this.attributePossibleValue.length = 0;
      this.attributeValueForm.controls.attribute_id.setValue("");
      this.attributeValueForm.controls.attribute_value.setValue("");
      this.attributeValueForm.markAsUntouched();
    }
  };

  getSKUList = () => {
    this._authService.request("get", "sku").subscribe((response) => {
      if (response.res.length > 0) {
        response.res.forEach((element) => {
          this.SKUList.push({ code: element.sku, value: element.sku });
        });
      }
    });
  };

  /**
   * Method to create new asste
   */
  createAsset = () => {
    if (this.parentForm.invalid && this.attributeDisplayList.length === 0) {
      this.markFormGroupTouched(this.parentForm);
      this.errorMessage = "This informations are required";
      this.attributeValueForm.markAsTouched();
    } else if (this.attributeDisplayList.length === 0) {
      this.errorMessage = "This informations are required";
      this.attributeValueForm.markAsTouched();
    } else {
      this.errorMessage = "";
      Swal.fire({
        title: "Do you want to create this asset?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "",
        confirmButtonText: "Yes, Create it!",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          this.spinner.show();
          const data = { ...this.parentForm.value };
          data.attribute_values = this.attribute_values;
          console.log(data);
          this._authService
            .request("post", `asset`, data)
            .subscribe((response) => {
              console.log(response);
              if (
                response.res.asset_id > 0 &&
                response.res.is_stock_updated > 0
              ) {
                this.toastr.success("Flycast", "Asset is created");
                this.router.navigateByUrl("/asset/assets-list");
                this.spinner.hide();
              } else {
                this.toastr.error("Flycast", "Something went wrong!");
                this.spinner.hide();
              }
            });
        }
      });
    }
  };
}
