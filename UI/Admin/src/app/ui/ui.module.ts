import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { InputOptionListComponent } from './input-option-list/input-option-list.component';
import { TextareaFieldComponent } from './textarea-field/textarea-field.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InputDatepickerComponent } from './input-datepicker/input-datepicker.component';

import { NgDatepickerModule } from 'ng2-datepicker';
import { DpDatePickerModule } from 'ng2-date-picker';


@NgModule({
  declarations: [
    InputFieldComponent,
    TextareaFieldComponent,
    InputOptionListComponent,
    InputValidationComponent,
    ModalComponent,
    SubmitButtonComponent,
    ButtonComponent,
    InputDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
  ],
  exports: [
    InputFieldComponent,
    TextareaFieldComponent,
    InputOptionListComponent,
    InputValidationComponent,
    ModalComponent,
    SubmitButtonComponent,
    ButtonComponent,
    NgDatepickerModule,
    InputDatepickerComponent

  ],
  providers: [
    DatePipe
  ]

})
export class UiModule { }
