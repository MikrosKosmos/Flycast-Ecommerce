import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'emp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // display = 'block';
  @Output() closed: EventEmitter<boolean>=new EventEmitter();
  constructor() { }
  // onCloseHandled() {

	// 	this.display = 'none';

	// }
  ngOnInit() {
  }
  
	// openModal(){
 
	// 	this.display='block';
   
  //  }
  dismissModal(){
    this.closed.emit(true);
  }
}
