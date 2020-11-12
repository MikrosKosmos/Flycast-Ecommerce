import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'emp-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.scss']
})

export class InputDatepickerComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() defaultValue: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() minDate: string = '';
  @Input() readonly: boolean = false;
  @Input() autofocus: boolean = false;
  @Input() autocomplete: boolean = false;
  @Input() identifier: string = '';
  @Input() validation: boolean = false;
  @Input() required: boolean = false;
  @Input() maxdate: string = '';
  @Output() dateChange = new EventEmitter<string>();

  public min: any;
  public max: any;

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    if (this.minDate == 'today'){
      // this.min = new Date().getFullYear()+'-0'+new Date().getMonth()+'-'+new Date().getDate();
      this.min = new Date().getFullYear();
      this.min = new Date().getMonth() + 1 < 10 ? this.min+'-0'+(new Date().getMonth() + 1):this.min+'-'+(new Date().getMonth() + 1);
      this.min = new Date().getDate() < 10 ? this.min+'-0'+new Date().getDate():this.min+'-'+new Date().getDate();
    }

    if(this.maxdate === 'today') {
      this.max = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
  }
  ngModelChange(event) {
    this.defaultValue = event;
    if(event !== ""){
      this.dateChange.emit(event);
    }
    
  }

}
