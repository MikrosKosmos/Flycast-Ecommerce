import Swal from "sweetalert2";
import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "emp-add-mobile",
  templateUrl: "./add-mobile.component.html",
  styleUrls: ["./add-mobile.component.scss"],
})
export class AddMobileComponent implements OnInit {
  @Input() parentForm: FormGroup;
  productGradeList = [
    { code: "Excellent", value: "Excellent" },
    { code: "New", value: "New" },
    { code: "Like New", value: "Like New" },
    { code: "Poor", value: "Poor" },
    { code: "Very Poor", value: "Very Poor" },
  ];
  SKUList = [
    {
      code: "FC-Mavic-Mavic-Mini-Blue-Excellent",
      value: "FC-Mavic-Mavic-Mini-Blue-Excellent",
    },
  ];
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMobilesAttributes();
  }

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
          this.spinner.show();
          let data = { ...this.parentForm.value };
          data.category = "1";
          data.sub_category = "";
          data.attribute_values = [
            { attribute_id: 1, attribute_value: data.Display },
            { attribute_id: 2, attribute_value: data.Batteries },
            { attribute_id: 4, attribute_value: data.USB_C },
            { attribute_id: 6, attribute_value: data.Micro_SD_Card },
            { attribute_id: 8, attribute_value: data.CPU },
            { attribute_id: 9, attribute_value: data.GPU },
            { attribute_id: 10, attribute_value: data.RAM },
            { attribute_id: 11, attribute_value: data.storage },
            { attribute_id: 12, attribute_value: data.Primary_Camera },
            { attribute_id: 13, attribute_value: data.Secondary_Camera },
            { attribute_id: 16, attribute_value: data.Wireless },
            { attribute_id: 17, attribute_value: data.GPS },
            { attribute_id: 22, attribute_value: data.Length },
            { attribute_id: 23, attribute_value: data.Width },
            { attribute_id: 24, attribute_value: data.Breadth },
            { attribute_id: 25, attribute_value: data.Height },
            { attribute_id: 26, attribute_value: data.Resolution },
            { attribute_id: 27, attribute_value: data.Color },
            { attribute_id: 28, attribute_value: data.Manufacturer },
            { attribute_id: 29, attribute_value: data.Weight },
            { attribute_id: 30, attribute_value: data.Water_Resistant },
            { attribute_id: 31, attribute_value: data.Dust_Resistant },
            { attribute_id: 32, attribute_value: data.Form_Factor },
            { attribute_id: 33, attribute_value: data.Audio_Jack },
            { attribute_id: 34, attribute_value: data.USB_Connector },
            { attribute_id: 35, attribute_value: data.Wireless_Charge },
            { attribute_id: 36, attribute_value: data.Model_Name },
            { attribute_id: 37, attribute_value: data.Brand },
          ];

          delete data.Display;
          delete data.Batteries;
          delete data.USB_C;
          delete data.Micro_SD_Card;
          delete data.CPU;
          delete data.GPU;
          delete data.RAM;
          delete data.storage;
          delete data.Primary_Camera;
          delete data.Secondary_Camera;
          delete data.Wireless;
          delete data.GPS;
          delete data.Length;
          delete data.Width;
          delete data.Breadth;
          delete data.Height;
          delete data.Resolution;
          delete data.Color;
          delete data.Manufacturer;
          delete data.Weight;
          delete data.Water_Resistant;
          delete data.Dust_Resistant;
          delete data.Form_Factor;
          delete data.Audio_Jack;
          delete data.USB_Connector;
          delete data.Wireless_Charge;
          delete data.Model_Name;
          delete data.Brand;

          this._authService
            .request("post", "asset", data)
            .subscribe((response) => {
              if (response.res.asset_id > 0) {
                this.toastr.success("Flycast", "Asset created Successfully");
                this.router.navigateByUrl("/mobile/mobile-list");
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

  /**
   * Method to get attributes of a Mobile.
   */
  getMobilesAttributes = () => {
    this._authService
      .request("get", "attribute?category_id=1")
      .subscribe((response) => {
        console.log("Mobiles attributes ", response);
      });
  };
}
