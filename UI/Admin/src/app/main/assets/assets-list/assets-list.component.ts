import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-assets-list",
  templateUrl: "./assets-list.component.html",
  styleUrls: ["./assets-list.component.scss"],
})
export class AssetsListComponent implements OnInit {
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getAssetsList();
  }

  /**
   * Method to get assets list
   */
  getAssetsList = () => {
    setTimeout(() => {
      this._authService
        .request("get", `asset?category_id=2`)
        .subscribe((response) => {
          console.log("assets list ", response);
          this.spinner.hide();
        });
    }, 1000);
  };
}
