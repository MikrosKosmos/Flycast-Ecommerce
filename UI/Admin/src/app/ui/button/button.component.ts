import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'emp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() identifier:string = '';
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  @Input() buttonDisable:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  medUiButtonClicked(){
    this.buttonClicked.emit();
  }

}
