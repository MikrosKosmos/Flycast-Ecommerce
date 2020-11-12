import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'emp-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {
  @Output() addNewCes: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Input() submitIdentifier: string = '';
  @Input() cancelIdentifier: string = '';
  @Input() isCancel:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  clickSubmit(){
    //this.submitted.emit();
  }
  clickCancel(){
    this.cancel.emit();
  }
}
