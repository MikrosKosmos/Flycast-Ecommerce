import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-create-pucture-sku",
  templateUrl: "./create-pucture-sku.component.html",
  styleUrls: ["./create-pucture-sku.component.scss"],
})
export class CreatePuctureSkuComponent implements OnInit {
  parentForm: FormGroup;
  SKUList = [
    {
      code: "FC-Mavic-Mavic-Mini-Blue-Excellent",
      value: "FC-Mavic-Mavic-Mini-Blue-Excellent",
    },
  ];
  isSKUSelected: boolean = false;
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getSKUList();
    this.parentForm = this.formBuilder.group({
      sku: [""],
    });
  }

  /**
   * Method to get SKU List
   */
  getSKUList = () => {
    this._authService.request("get", "sku").subscribe((response) => {
      console.log("SKU list ", response);
    });
  };

  /**
   * Method to get selected SKU.
   * @param value : Varibale which will recive id of selected SKU
   */
  selectedSku = (value) => {
    if (value) {
      this.isSKUSelected = true;
    }
  };

  /**
   * Method to upload image at position one
   * @param event Variable which will recive Image at position one
   */
  uploadFilePosOne = (event) => {
    this.spinner.show();
    let file = event.target.files[0];
    let fileReader = new FileReader();
  };
}
