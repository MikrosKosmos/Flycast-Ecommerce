import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: "emp-create-attribute",
  templateUrl: "./create-attribute.component.html",
  styleUrls: ["./create-attribute.component.scss"],
})
export class CreateAttributeComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

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
   * Method to create new attribute
   */
  submitNewAttribute = () => {
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
            .request("post", "attribute", data)
            .subscribe((response) => {
              if (response.res.id > 0) {
                this.toastr.success(
                  "Flycast",
                  "Attribute Created Successfully"
                );
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
