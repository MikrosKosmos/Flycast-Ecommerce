import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-attribute-list",
  templateUrl: "./attribute-list.component.html",
  styleUrls: ["./attribute-list.component.scss"],
})
export class AttributeListComponent implements OnInit {
  activeOpenTab: string = "tab-active";
  activeLatestTab: string = "";
  currentIndex: number = 0;
  attributeList = [];

  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getAttribute(0);
  }

  /**
   * Method to change attribute tab
   * @param index : Variable to get attribute
   */
  tabChanged(index) {
    this.currentIndex = index;
    if (index == 0) {
      this.activeOpenTab = "tab-active";
      this.activeLatestTab = "";
    } else if (index == 1) {
      this.activeOpenTab = "";
      this.activeLatestTab = "tab-active";
    }
    this.getAttribute(index);
  }

  /**
   * Method to get attribute by category
   * @param index Varibale to get category id
   */
  getAttribute = (index) => {
    this.spinner.show();
    let categoryId;
    if (index === 0) categoryId = 1;
    if (index === 1) categoryId = 2;
    setTimeout(() => {
      this._authService
        .request("get", `attribute?attribute_id=${categoryId}`)
        .subscribe((response) => {
          this.attributeList = response.res;
          this.spinner.hide();
        });
    }, 1000);
  };
}
