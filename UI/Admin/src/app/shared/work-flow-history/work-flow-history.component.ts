import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'emp-work-flow-history',
  templateUrl: './work-flow-history.component.html',
  styleUrls: ['./work-flow-history.component.scss']
})
export class WorkFlowHistoryComponent implements OnInit {

  @Input() dccBookingId;
  @Input() commentHistory: any;
  public collapseState: string = 'close';
  public collapseStateIcon: string = "fa-plus";
  workFlowDetails = [];
  //commentHistory = [];
  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
    //this.fetchWorkFlowDetails();
  }
  fetchWorkFlowDetails() {
    this._authService.request('post', `wfcontroller/getWFCurrentStatusDetails?transaction_id=${this.dccBookingId}&process_name=DCC_Approval`).subscribe((response) => {
      console.log('workflow history', response);
      this.workFlowDetails = response;
    })
  }
  toggleAuditTrail() {
    this.collapseState = this.collapseState === 'close' ? 'open' : 'close';
    this.collapseStateIcon = this.collapseState === 'open' ? 'fa-minus' : 'fa-plus';
  }
}
