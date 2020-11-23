import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: "emp-create-sku",
  templateUrl: "./create-sku.component.html",
  styleUrls: ["./create-sku.component.scss"],
})
export class CreateSkuComponent implements OnInit {
  @Input() parentForm: FormGroup;
  productGradeList = [
    { code: "Excellent", value: "Excellent" },
    { code: "New", value: "New" },
    { code: "Like New", value: "Like New" },
    { code: "Poor", value: "Poor" },
    { code: "Very Poor", value: "Very Poor" },
  ];
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
   * Method to create SKU.
   */
  submitSku = () => {
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
      Swal.fire({
        title: "Do you want to create this SKU?",
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
          data.parent_category = 1;
          this._authService
            .request("post", "sku", data)
            .subscribe((response) => {
              if (response.res.id > 0) {
                this.toastr.success("Flycast", "SKU created successfully");
                this.router.navigateByUrl("/sku/sku-list");
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
