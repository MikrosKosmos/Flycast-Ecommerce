import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'emp-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {
  // @Input() type: InputType = 'text';
  @Input() form: FormGroup;
  @Input() defaultValue: string = '';
	@Input() placeholder: string = '';
	@Input() identifier: string;
	@Input() name: string = '';
	@Input() readonly: boolean = false;
	@Input() autofocus: boolean = false;
	@Input() required: boolean = false;
  @Input() autocomplete: boolean = false;
  @Input() validation: boolean = false;
  @Input() maxLength?: string = '';
  constructor() { }

  ngOnInit() {}
  changeText(event) {
    this.defaultValue = event;
  }

}
