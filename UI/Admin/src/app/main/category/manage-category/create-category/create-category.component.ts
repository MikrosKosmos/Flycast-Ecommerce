import { FormGroup, Validators } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import { FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "emp-create-category",
  templateUrl: "./create-category.component.html",
  styleUrls: ["./create-category.component.scss"],
})
export class CreateCategoryComponent implements OnInit {
  @Input() parentForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addForm();
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
   * Dynamic form section
   */
  get categoryFormArray() {
    return this.parentForm.get("categories") as FormArray;
  }

  createForm = () => {
    return this.formBuilder.group({
      category_name: ["", Validators.compose([Validators.required])],
      category_description: ["", Validators.compose([Validators.required])],
      parent_category: 0,
    });
  };

  addForm = () => {
    this.categoryFormArray.push(this.createForm());
  };

  /**
   * Method to remove item from formArray
   * @param index Index of item
   */
  removeItem = (index) => {
    this.categoryFormArray.removeAt(index);
  };

  /**
   * Method to create Category
   */
  submitCreateCategoryt = () => {
    this.isSubmitted = true;
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
      Swal.fire({
        title: "Do you want to create this category?",
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
          this._authService
            .request("post", "category", data)
            .subscribe((response) => {
              if (response.res.id > 0) {
                this.toastr.success("Flycast", "Category Created Successfully");
                this.router.navigateByUrl("/category/category-list");
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
