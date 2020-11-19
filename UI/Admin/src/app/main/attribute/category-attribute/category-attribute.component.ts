import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { RequiredValidator } from "src/app/core/validators/required.validator";
import { AuthenticationService } from "src/app/authentication.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "emp-category-attribute",
  templateUrl: "./category-attribute.component.html",
  styleUrls: ["./category-attribute.component.scss"],
})
export class CategoryAttributeComponent implements OnInit {
  parentForm: FormGroup;
  categoryList = [];
  attributeList = [];
  isSubmitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      category_id: [
        "",
        Validators.compose([RequiredValidator("Category is required")]),
      ],
      attributes: this.formBuilder.array([]),
    });
    this.addAttributeForm();
    this.getCategoryList();
  }

  /**
   * Method to get list of category
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
   * Dynamic form section
   */

  get attributeFormArray() {
    return this.parentForm.get("attributes") as FormArray;
  }

  addAttributeForm = () => {
    this.attributeFormArray.push(this.createAttributeForm());
  };

  createAttributeForm = () => {
    return this.formBuilder.group({
      attribute_id: ["", Validators.compose([Validators.required])],
    });
  };

  /**
   * Method to remove item from formArray
   * @param index Index of item
   */
  removeItem = (index) => {
    this.attributeFormArray.removeAt(index);
  };

  /**
   * Method to clear formarray when category will change.
   * @param formArray : Variable which accept a formarray
   */
  clearFormArray = (formArray: FormArray) => {
    while (formArray && formArray.length !== 1) {
      formArray.removeAt(formArray.length - 1);
    }
  };

  /**
   * Method to get selected category ID
   * @param value Variable to get selected category id
   */
  selectedCategory = (value) => {
    if (value) {
      this.attributeList = [];
      this.clearFormArray(this.attributeFormArray);
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
   *Method to assign attribute with category
   */
  assignAttribute = () => {
    this.isSubmitted = true;
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
      this.spinner.show();
      this._authService
        .request("post", `category/attribute`, this.parentForm.value)
        .subscribe((response) => {
          if (response.res.id > 0) {
            this.router.navigateByUrl("/attribute/attributes-list");
            this.toastr.success("Flycast", "Attributes assigned successfully");
            this.spinner.hide();
          } else {
            this.toastr.error("Flycast", "Something went wrong");
            this.spinner.hide();
          }
        });
    }
  };
}
