import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "emp-drone-list",
  templateUrl: "./drone-list.component.html",
  styleUrls: ["./drone-list.component.scss"],
})
export class DroneListComponent implements OnInit {
  constructor(private _authService: AuthenticationService) {}

  ngOnInit() {
    this._authService.headerText.next({
      headerStrong: "Drones",
      headerText: "",
    });
  }
}
