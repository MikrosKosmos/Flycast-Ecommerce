import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private tostr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  showAlert() {
    this.tostr.success('Comming Soon');
  }
}
