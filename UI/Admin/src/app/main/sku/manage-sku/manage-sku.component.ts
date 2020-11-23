import { RequiredValidator } from "src/app/core/validators/required.validator";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "emp-manage-sku",
  templateUrl: "./manage-sku.component.html",
  styleUrls: ["./manage-sku.component.scss"],
})
export class ManageSkuComponent implements OnInit {
  skuForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.skuForm = this.formBuilder.group({
      brand: ["", Validators.compose([RequiredValidator("Brand is required")])],
      model: ["", Validators.compose([RequiredValidator("Model is required")])],
      color: ["", Validators.compose([RequiredValidator("Color is required")])],
      product_grade: [
        "",
        Validators.compose([RequiredValidator("Grade is required")]),
      ],
    });
  }
}
