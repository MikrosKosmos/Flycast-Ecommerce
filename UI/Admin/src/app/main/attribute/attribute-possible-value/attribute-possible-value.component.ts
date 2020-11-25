import { FormArray } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import { RequiredValidator } from "src/app/core/validators/required.validator";
import Swal from "sweetalert2";

@Component({
  selector: "emp-attribute-possible-value",
  templateUrl: "./attribute-possible-value.component.html",
  styleUrls: ["./attribute-possible-value.component.scss"],
})
export class AttributePossibleValueComponent implements OnInit {
  possibleValuForm: FormGroup;
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
    this.possibleValuForm = this.formBuilder.group({
      category: [
        "",
        Validators.compose([RequiredValidator("Category is required")]),
      ],
      attribute_id: [
        "",
        Validators.compose([RequiredValidator("Attribute is required")]),
      ],
      attribute_values: this.formBuilder.array([]),
    });

    this.getCategoryList();
    this.addAttributeFrom();
  }

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
   * Dynamic form section.
   */
  get attributeFormArray() {
    return this.possibleValuForm.get("attribute_values") as FormArray;
  }

  createAttributeForm = () => {
    return this.formBuilder.group({
      possible_value: ["", Validators.compose([Validators.required])],
    });
  };

  addAttributeFrom = () => {
    this.attributeFormArray.push(this.createAttributeForm());
  };

  /**
   * Method to get category list.
   */
  getCategoryList = () => {
    this._authService.request("get", "category").subscribe((response) => {
      response.res.forEach((element) => {
        this.categoryList.push({
          code: element.id,
          value: element.category_name,
        });
      });
    });
  };

  /**
   * Method to get selected category.
   * @param event variable which recived selected category id.
   */
  selectedCategory = (event) => {
    if (event) {
      this.attributeList.length = 0;
      this.clearFormArray(this.attributeFormArray);
      this._authService
        .request("get", `attribute?category_id=${event}`)
        .subscribe((response) => {
          response.res.forEach((element) => {
            this.attributeList.push({
              code: element.attribute_id,
              value: element.attribute_name,
            });
          });
        });
    }
  };

  /**
   *Method to get selected attribute
   * @param event : Variable which recived selected attribute id.
   */
  selectedAttribute = (event) => {
    if (event) this.clearFormArray(this.attributeFormArray);
  };

  /**
   * Method to remove control from form
   * @param index Variable which recived clicked index
   */
  removeItem = (index) => {
    this.attributeFormArray.removeAt(index);
  };

  /**
   * Method to clear formarray when category and attribute will change.
   * @param formArray : Variable which accept a formarray
   */
  clearFormArray = (formArray: FormArray) => {
    while (formArray && formArray.length !== 1) {
      formArray.removeAt(formArray.length - 1);
    }
  };

  /**
   * Method to submit form.
   */
  submitForm = () => {
    this.isSubmitted = true;
    if (this.possibleValuForm.invalid)
      this.markFormGroupTouched(this.possibleValuForm);
    else {
      Swal.fire({
        title: "Do you want to add these values?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "",
        confirmButtonText: "Yes, Add it!",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          this.spinner.show();
          let data = { ...this.possibleValuForm.value };
          delete data.category;
          this._authService
            .request("post", "attribute", data)
            .subscribe((response) => {
              if (response.res.id > 0) {
                this.toastr.success(
                  "Flycast",
                  "Value added with attribute successfully"
                );
                this.router.navigateByUrl("/attribute/attributes-list");
                this.spinner.hide();
              } else {
                this.toastr.success("Flycast", "Something went wrong!");
                this.spinner.hide();
              }
            });
        }
      });
    }
  };
}
