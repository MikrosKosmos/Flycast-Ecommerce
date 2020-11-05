import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { WorkFlowRouteMapComponent } from './work-flow-route-map/work-flow-route-map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkFlowComponent } from './work-flow-route-map/work-flow/work-flow.component';
import { ToastrModule } from 'ngx-toastr';
import { HplWorkFlowComponent } from './hpl-work-flow/hpl-work-flow.component';
import { WorkFlowHistoryComponent } from './work-flow-history/work-flow-history.component';

@NgModule({
  declarations: [AuditTrailComponent, WorkFlowRouteMapComponent, WorkFlowComponent, HplWorkFlowComponent, WorkFlowHistoryComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
  ],
  exports: [AuditTrailComponent, WorkFlowRouteMapComponent, ToastrModule, HplWorkFlowComponent, WorkFlowHistoryComponent]
})
export class SharedModule { }
