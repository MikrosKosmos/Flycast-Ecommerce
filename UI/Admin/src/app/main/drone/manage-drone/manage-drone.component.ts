import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Validators } from "@angular/forms";
import { RequiredValidator } from "src/app/core/validators/required.validator";

@Component({
  selector: "emp-manage-drone",
  templateUrl: "./manage-drone.component.html",
  styleUrls: ["./manage-drone.component.scss"],
})
export class ManageDroneComponent implements OnInit {
  addDroneForm: FormGroup;
  fromActive = {
    add: false,
    view: false,
    edit: false,
  };
  constructor(
    private activeRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const routerState = this.activeRouter.routeConfig.path.split("/");
    switch (routerState[0]) {
      case "add-drone":
        this.fromActive.add = true;
        break;
    }
    if (this.fromActive.add) {
      this.addDroneForm = this.formBuilder.group({
        asset_name: [
          "",
          Validators.compose([RequiredValidator("Asset name is required")]),
        ],
        asset_unique_number: [
          "",
          Validators.compose([RequiredValidator("Unique number is required")]),
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
          Validators.compose([RequiredValidator("Product grade is required")]),
        ],
        procurement_price: [
          "",
          Validators.compose([
            RequiredValidator("Procurement price is required"),
          ]),
        ],
        base_price: [
          "",
          Validators.compose([RequiredValidator("Base price is required")]),
        ],
        selling_price: [
          "",
          Validators.compose([RequiredValidator("Selling price is required")]),
        ],
        Display: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Batteries: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Extra_Propellers: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        USB_C: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Microfiber: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Micro_SD_Card: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Joystick_Controller: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        CPU: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        GPU: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        RAM: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        storage: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Primary_Camera: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Secondary_Camera: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Navigation_Camera: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Night_Mode_Camera: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Wireless: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        GPS: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Thermal_Camera: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        range: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Operations: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Gimbal: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Length: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Width: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Breadth: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Height: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Resolution: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Color: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Manufacturer: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Weight: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Water_Resistant: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Dust_Resistant: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        USB_Connector: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Model_Name: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Brand: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
      });
    }
  }
}
