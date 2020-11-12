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
        brand: [
          "",
          Validators.compose([RequiredValidator("Brand is required")]),
        ],
        product: [
          "",
          Validators.compose([RequiredValidator("Product is required")]),
        ],
        imei_one: [
          "",
          Validators.compose([RequiredValidator("IMEI One is required")]),
        ],
        imei_two: [""],
        ram: [""],
        storage: [""],
        color: [
          "",
          Validators.compose([RequiredValidator("Color is required")]),
        ],
        display: [""],
      });
    }
  }
}
