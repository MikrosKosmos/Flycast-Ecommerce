import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { RequiredValidator } from "src/app/core/validators/required.validator";

@Component({
  selector: "emp-manage-category",
  templateUrl: "./manage-category.component.html",
  styleUrls: ["./manage-category.component.scss"],
})
export class ManageCategoryComponent implements OnInit {
  createCategoryForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createCategoryForm = this.formBuilder.group({
      category_name: [
        "",
        Validators.compose([RequiredValidator("Category Name is required")]),
      ],
      category_description: [
        "",
        Validators.compose([
          RequiredValidator("Category Description is required"),
        ]),
      ],
    });
  }
}
