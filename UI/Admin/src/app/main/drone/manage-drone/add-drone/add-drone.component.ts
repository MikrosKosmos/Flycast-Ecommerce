import { AuthenticationService } from "src/app/authentication.service";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "emp-add-drone",
  templateUrl: "./add-drone.component.html",
  styleUrls: ["./add-drone.component.scss"],
})
export class AddDroneComponent implements OnInit {
  @Input() parentForm;
  categoryList = [];
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
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCategory();
    this.getAttributeList();
    this.getSKUList();
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
   * Method to create new drone
   */
  submitDrone = () => {
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
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
          let data = { ...this.parentForm.value };

          data.attribute_values = [
            { attribute_id: 1, attribute_value: data.Display },
            { attribute_id: 2, attribute_value: data.Batteries },
            { attribute_id: 3, attribute_value: data.Extra_Propellers },
            { attribute_id: 4, attribute_value: data.USB_C },
            { attribute_id: 5, attribute_value: data.Microfiber },
            { attribute_id: 6, attribute_value: data.Micro_SD_Card },
            { attribute_id: 7, attribute_value: data.Joystick_Controller },
            { attribute_id: 8, attribute_value: data.CPU },
            { attribute_id: 9, attribute_value: data.GPU },
            { attribute_id: 10, attribute_value: data.RAM },
            { attribute_id: 11, attribute_value: data.storage },
            { attribute_id: 12, attribute_value: data.Primary_Camera },
            { attribute_id: 13, attribute_value: data.Secondary_Camera },
            { attribute_id: 14, attribute_value: data.Navigation_Camera },
            { attribute_id: 15, attribute_value: data.Night_Mode_Camera },
            { attribute_id: 16, attribute_value: data.Wireless },
            { attribute_id: 17, attribute_value: data.GPS },
            { attribute_id: 18, attribute_value: data.Thermal_Camera },
            { attribute_id: 19, attribute_value: data.range },
            { attribute_id: 20, attribute_value: data.Operations },
            { attribute_id: 21, attribute_value: data.Gimbal },
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
            { attribute_id: 34, attribute_value: data.USB_Connector },
            { attribute_id: 36, attribute_value: data.Model_Name },
            { attribute_id: 37, attribute_value: data.Brand },
          ];

          delete data.Display;
          delete data.Batteries;
          delete data.Extra_Propellers;
          delete data.USB_C;
          delete data.Microfiber;
          delete data.Micro_SD_Card;
          delete data.Joystick_Controller;
          delete data.CPU;
          delete data.GPU;
          delete data.RAM;
          delete data.storage;
          delete data.Primary_Camera;
          delete data.Secondary_Camera;
          delete data.Navigation_Camera;
          delete data.Night_Mode_Camera;
          delete data.Wireless;
          delete data.GPS;
          delete data.Thermal_Camera;
          delete data.range;
          delete data.Operations;
          delete data.Gimbal;
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
          delete data.USB_Connector;
          delete data.Model_Name;
          delete data.Brand;

          console.log("Form data", data);
          this._authService
            .request("post", "asset", data)
            .subscribe((response) => {
              if (response.res.asset_id > 0) {
                this.toastr.success("Flycast", "Asset created Successfully");
                this.router.navigateByUrl("/drone/drone-list");
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
   * Method to get Drone category
   */
  getCategory = () => {
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
   * Method to get Drone attribute.
   */
  getAttributeList = () => {
    this._authService
      .request("get", "attribute?category_id=2")
      .subscribe((response) => {
        console.log("Attribute ", response);
      });
  };

  /**
   * Method to get SKU List.
   */
  getSKUList = () => {
    this._authService.request("get", "sku").subscribe((response) => {
      console.log("SKUs ", response);
    });
  };
}
