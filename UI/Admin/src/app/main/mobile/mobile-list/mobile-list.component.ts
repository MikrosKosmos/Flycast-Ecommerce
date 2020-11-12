import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-mobile-list",
  templateUrl: "./mobile-list.component.html",
  styleUrls: ["./mobile-list.component.scss"],
})
export class MobileListComponent implements OnInit {
  constructor(private _authService: AuthenticationService) {}

  ngOnInit() {
    this._authService.headerText.next({
      headerStrong: "Mobiles",
      headerText: "",
    });
  }
}
