import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/authentication.service";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "emp-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private route: Router,
    private toster: ToastrService
  ) {}

  ngOnInit() {
    this._authService.headerText.next({
      headerStrong: "Dashboard",
      headerText: "",
    });
  }
}
