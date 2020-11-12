import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emp-work-flow-route-map',
  templateUrl: './work-flow-route-map.component.html',
  styleUrls: ['./work-flow-route-map.component.scss']
})
export class WorkFlowRouteMapComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
