import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { RequiredValidator } from "src/app/core/validators/required.validator";

@Component({
  selector: "emp-manage-mobile",
  templateUrl: "./manage-mobile.component.html",
  styleUrls: ["./manage-mobile.component.scss"],
})
export class ManageMobileComponent implements OnInit {
  addMobileForm: FormGroup;
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
      case "add-mobile":
        console.log("this is add mobile");
        this.fromActive.add = true;
        break;
      case "mobile-view":
        this.fromActive.view = true;
        break;
    }
    if (this.fromActive.add) {
      this.addMobileForm = this.formBuilder.group({
        asset_name: [
          "",
          Validators.compose([RequiredValidator("Asset name is required")]),
        ],
        asset_unique_number: [
          "",
          Validators.compose([RequiredValidator("Unique number is required")]),
        ],
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
          Validators.compose([RequiredValidator("Product Grade is required")]),
        ],
        procurement_price: [
          "",
          Validators.compose([
            RequiredValidator("Procurement Price is required"),
          ]),
        ],
        base_price: [
          "",
          Validators.compose([RequiredValidator("Base Price is required")]),
        ],
        selling_price: [
          "",
          Validators.compose([RequiredValidator("Selling Price is required")]),
        ],
        Display: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Batteries: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        USB_C: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Micro_SD_Card: [
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
        Wireless: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        GPS: [
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
        Form_Factor: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Audio_Jack: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        USB_Connector: [
          "",
          Validators.compose([RequiredValidator("This field is required")]),
        ],
        Wireless_Charge: [
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
