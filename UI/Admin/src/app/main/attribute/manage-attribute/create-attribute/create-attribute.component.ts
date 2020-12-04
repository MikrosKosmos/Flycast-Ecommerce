import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import Swal from "sweetalert2";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "emp-create-attribute",
  templateUrl: "./create-attribute.component.html",
  styleUrls: ["./create-attribute.component.scss"],
})
export class CreateAttributeComponent implements OnInit {
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

  get attributeFormArray() {
    return this.parentForm.get("attributes") as FormArray;
  }

  createForm = () => {
    return this.formBuilder.group({
      attribute_name: ["", Validators.compose([Validators.required])],
      attribute_description: ["", Validators.compose([Validators.required])],
      default_value: ["Not Available"],
    });
  };

  addForm = () => {
    this.attributeFormArray.push(this.createForm());
  };

  /**
   * Method to remove item from formArray
   * @param index Index of item
   */
  removeItem = (index) => {
    this.attributeFormArray.removeAt(index);
  };

  /**
   * Method to create new attribute
   */
  submitNewAttribute = () => {
    this.isSubmitted = true;
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
      Swal.fire({
        title: "Do you want to create these features?",
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
          console.log(data);
          this._authService
            .request("post", "attribute", data)
            .subscribe((response) => {
              if (response.res.id > 0) {
                this.toastr.success("Flycast", "Features Created Successfully");
                this.router.navigateByUrl("/attribute/attributes-list");
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
