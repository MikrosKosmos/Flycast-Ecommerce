import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "emp-add-drone",
  templateUrl: "./add-drone.component.html",
  styleUrls: ["./add-drone.component.scss"],
})
export class AddDroneComponent implements OnInit {
  @Input() parentForm;
  brandList = [{ code: "red", value: "Red" }];
  constructor() {}

  ngOnInit() {}

  /**
   * Method to create new drone
   */
  submitDrone = () => {};
}
