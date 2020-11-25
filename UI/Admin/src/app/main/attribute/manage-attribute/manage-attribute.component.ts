import { FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { RequiredValidator } from "src/app/core/validators/required.validator";

@Component({
  selector: "emp-manage-attribute",
  templateUrl: "./manage-attribute.component.html",
  styleUrls: ["./manage-attribute.component.scss"],
})
export class ManageAttributeComponent implements OnInit {
  createAttributeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createAttributeForm = this.formBuilder.group({
      attributes: this.formBuilder.array([]),
    });
  }
}
