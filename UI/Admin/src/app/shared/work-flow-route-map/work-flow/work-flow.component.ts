import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emp-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss']
})
export class WorkFlowComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
