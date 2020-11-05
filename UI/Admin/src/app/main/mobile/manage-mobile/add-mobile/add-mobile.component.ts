import Swal from "sweetalert2";
import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "emp-add-mobile",
  templateUrl: "./add-mobile.component.html",
  styleUrls: ["./add-mobile.component.scss"],
})
export class AddMobileComponent implements OnInit {
  @Input() parentForm: FormGroup;
  brandList = [{ code: "red", value: "Red" }];
  constructor() {}

  ngOnInit() {}

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /**
   * Method to create new mobile
   */
  submitMobile = () => {
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
      Swal.fire({
        title: "Do you want to submit this form?",
        text: "Concerned person will be notified",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#33b5e5",
        cancelButtonColor: "",
        confirmButtonText: "Yes, Submit it!",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
        }
      });
    }
  };
}
