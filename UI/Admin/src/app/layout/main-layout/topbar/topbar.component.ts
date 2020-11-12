import { UserDetails } from "./../../../authentication.service";
import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { AuthenticationService } from "src/app/authentication.service";
import { fail } from "assert";

@Component({
  selector: "emp-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  // headerText$: Observable<string> = "<strong>CES(N) New</strong> Request Form";
  public header;
  status: boolean = false;
  profileName: string;
  grade: string;

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (
      this.eRef.nativeElement.contains(event.target) &&
      event.target.lastChild == undefined
    ) {
      this.status = !this.status;
    } else {
      this.status = false;
    }
  }

  constructor(
    private _authService: AuthenticationService,
    private eRef: ElementRef
  ) {}

  ngOnInit() {
    this._authService.headerText.subscribe((response) => {
      this.header = response;
    });
    /* this._authService.getUser(); */
  }

  clickEvent() {
    //  this.status = !this.status;
  }

  logout() {
    this._authService.logout();
  }
}
