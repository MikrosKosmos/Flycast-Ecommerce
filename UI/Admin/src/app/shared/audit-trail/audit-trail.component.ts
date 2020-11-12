import { HelperService } from './../../core/services/helper.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'emp-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {

  @Input() fromId: any;
  @Input() taskId: any;
  public auditTrails:any = [];

  public collapseState: string = 'close';
  public collapseStateIcon: string = "fa-plus"

  constructor(
    private _authService: AuthenticationService,
    public _helperService: HelperService
  ) { }

  ngOnInit() {
    this.getAuditTrail();
  }

  getAuditTrail() {
    this._authService.request('get', `fe/history?txId=${this.taskId}&formCode=${this.fromId}`).subscribe((response) => {
      this.auditTrails = [...response];
    })
  }

  toggleAuditTrail() {
    this.collapseState = this.collapseState === 'close' ? 'open' : 'close';
    this.collapseStateIcon = this.collapseState === 'open' ? 'fa-minus' : 'fa-plus';
  }

  getDateAsFormat(value) {
     return moment(value).local().format('DD-MM-YYYY HH:mm:ss');
  }

}
