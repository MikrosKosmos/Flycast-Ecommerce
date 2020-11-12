import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'emp-input-option-list',
  templateUrl: './input-option-list.component.html',
  styleUrls: ['./input-option-list.component.scss']
})
export class InputOptionListComponent implements OnInit {
  @Input() options: any;
  @Input() displayField: string;
  @Input() defaultLabel: boolean = false;
  @Input() name: string = '';
  @Input() placeHolder: string;
  @Input() readonly: boolean = false;
  @Input() form: FormGroup;
  @Input() validation: boolean = false;
  @Input() required: boolean = false;

  @Output() optionValueChange : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onOptionListChange(event){
    this.optionValueChange.emit(event.target.value);
  }

}
