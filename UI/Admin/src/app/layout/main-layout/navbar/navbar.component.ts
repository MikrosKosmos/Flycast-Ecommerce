import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: "emp-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  status: boolean = false;

  statusSafetyIncident: Boolean = false;
  statusSafetyUA_UE: Boolean = false;

  profileName: string;
  grade: string;
  user;
  permitMealBooking;
  timer;
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit() {}
  clickEvent() {
    this.status = !this.status;
  }
  subMenu() {
    this.status = !this.status;
  }

  subMenuSafetyIncident() {
    this.status = !this.statusSafetyIncident;
  }

  subMenuSafetyUA_UE() {
    this.status = !this.statusSafetyUA_UE;
  }
}
