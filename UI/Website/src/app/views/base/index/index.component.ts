import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  images: any;
  pauseOnHover = true;
  pauseOnFocus = true;
  constructor() { }

  ngOnInit() {
    this.images = [
      "../assets/img/slide/Drone-Photography-UAV-Coach.jpg",
      "../assets/img/slide/photo-drone-1500x750.jpg",
      "../assets/img/slide/wp1896530-drone-wallpapers.jpg"
    ]
  }

}
