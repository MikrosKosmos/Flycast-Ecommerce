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
  SKUList = [];
  isSKUSelected: boolean = false;
  imageTypeError: string;
  imagesSizeError: string;
  successMessage: string;
  uploadedImageList = [];
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
      if (response.res.length > 0) {
        response.res.forEach((element) => {
          this.SKUList.push({ code: element.sku, value: element.sku });
        });
      }
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
   * Method to check image type if image type is jpge or png will return true else return false
   * @param type Variable which will recive type of images
   */
  checkFileType = (type) => {
    return type === "image/jpeg" || type === "image/png";
  };

  /**
   * Method to check image type if image size is <= 4 MB will return true else return false
   * @param size Variable which will recive size of images
   */
  checkImageSize = (size) => {
    return size / 1024 / 1024 <= 4;
  };

  /**
   * Method will return file type jpge or png
   * @param type Variable which will recive type of images
   */
  getImageType = (type) => {
    return type.split("/")[1];
  };

  /**
   * Method to upload image at position one
   * @param event Variable which will recive Image at position one.
   * @param pos variable will recive position.
   */
  convertImageAsBinaryString = (event, pos) => {
    //this.spinner.show();
    let file = event.target.files[0];
    let imageExt = this.getImageType(file.type);
    this.imageTypeError = this.checkFileType(file.type)
      ? ""
      : "Only jpeg or png Image";
    this.imagesSizeError = this.checkImageSize(file.size)
      ? ""
      : "Can not upload more than 4 MB";
    if (!this.imageTypeError && !this.imagesSizeError) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = () =>
        this.uploadImageToServer(
          btoa(fileReader.result.toString()),
          pos,
          imageExt
        );
    }
  };

  /**
   * Method to upload image to server
   * @param encryptedImage : Variable for value of encrypted iames
   * @param pos Variable for position of image,
   * @param imgExt Variable for image extension.
   */
  uploadImageToServer = (encryptedImage, pos, imgExt) => {
    if (encryptedImage && pos && imgExt) {
      this.spinner.show();
      let data = {};
      data["file_extension"] = imgExt;
      data["position"] = pos;
      data["sku"] = this.parentForm.controls.sku.value;
      data["image_data"] = encryptedImage;
      this._authService
        .request("post", "sku/picture", data)
        .subscribe((response) => {
          if (response.res.id > 0) {
            this.uploadedImageList.push(response.res.url);
            this.toastr.success("Flycast", "Image uploaded successfully");
            this.spinner.hide();
          } else {
            this.toastr.error("Flycast", "Something went wrong!");
            this.spinner.hide();
          }
        });
    }
  };
}
