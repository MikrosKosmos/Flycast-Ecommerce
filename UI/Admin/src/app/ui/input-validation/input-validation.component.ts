import { Component, OnInit, Input } from '@angular/core';
export const FormValidationRequired = ' is required';
export const FormValidationEmail = 'Enter valid email';
// export const FormValidationName = 'Enter atleast 5 character';
@Component({
  selector: 'emp-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit {
  @Input() formInput: any;
  @Input() name: string;
  @Input() identifier: string;
  required : string = FormValidationRequired;
	email = FormValidationEmail;
	// username = FormValidationName;
  constructor() { }

  ngOnInit() {
  }

}
