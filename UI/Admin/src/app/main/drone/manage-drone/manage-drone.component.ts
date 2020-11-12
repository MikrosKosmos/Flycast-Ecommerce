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
        brand: [
          "",
          Validators.compose([RequiredValidator("Brand is required")]),
        ],
        product: [
          "",
          Validators.compose([RequiredValidator("Product is required")]),
        ],
      });
    }
  }
}
