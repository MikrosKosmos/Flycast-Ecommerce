import { FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: "emp-create-sku",
  templateUrl: "./create-sku.component.html",
  styleUrls: ["./create-sku.component.scss"],
})
export class CreateSkuComponent implements OnInit {
  @Input() parentForm: FormGroup;
  productGradeList = [
    { code: "Excellent", value: "Excellent" },
    { code: "New", value: "New" },
    { code: "Like New", value: "Like New" },
    { code: "Poor", value: "Poor" },
    { code: "Very Poor", value: "Very Poor" },
  ];
  uploadErrorMessage: string = "";
  fileSizeErrorMessage: string = "";
  encryptedImage: string = "";
  fileExt: string;
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  /**
   * Method to upload file in server.
   * @param event Variable which recive uploaded file.
   */
  uploadImage = (event) => {
    if (event) {
      let file = event.target.files[0];
      let ext = file.type.split("/")[1];
      this.uploadErrorMessage =
        file.type === "image/jpeg" || file.type === "image/png"
          ? ""
          : "Only jpeg or png file";
      this.fileSizeErrorMessage =
        file.size / 1024 / 1024 <= 4 ? "" : "Only jpeg or png file";

      if (!this.uploadErrorMessage && !this.fileSizeErrorMessage) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(file);
        fileReader.onload = () =>
          this.getEncryptedImageValue(btoa(fileReader.result.toString()), ext);
      }
    }
  };

  /**
   * Method to assign encrypted value in variable
   * @param value Variable which recive encrypted value.
   */
  getEncryptedImageValue = (value, ext) => {
    this.encryptedImage = value;
    this.fileExt = ext;
  };

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
   * Method to create SKU.
   */
  submitSku = () => {
    if (this.parentForm.invalid) this.markFormGroupTouched(this.parentForm);
    else {
      Swal.fire({
        title: "Do you want to create this SKU?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "",
        confirmButtonText: "Yes, Create it!",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          this.spinner.show();
          const data = { ...this.parentForm.value };
          data.parent_category = 1;
          data.image_data = this.encryptedImage;
          data.file_extension = this.fileExt;
          data.position = 1;
          this._authService.request("post", "sku", data).subscribe(
            (response) => {
              if (response.res.id > 0) {
                this.toastr.success("Flycast", "SKU created successfully");
                this.router.navigateByUrl("/sku/sku-list");
                this.spinner.hide();
              } else {
                this.toastr.error("Flycast", "Something went wrong!");
                this.spinner.hide();
              }
            },
            (err) => {
              this.toastr.error(
                "Flycast",
                "Something went wrong. Please try again!"
              );
              this.spinner.hide();
            }
          );
        }
      });
    }
  };
}
