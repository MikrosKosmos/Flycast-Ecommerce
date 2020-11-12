import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DroneListComponent } from "./drone-list/drone-list.component";
import { ManageDroneComponent } from "./manage-drone/manage-drone.component";
import { AddDroneComponent } from "./manage-drone/add-drone/add-drone.component";
import { ViewDroneComponent } from "./manage-drone/view-drone/view-drone.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { UiModule } from "src/app/ui/ui.module";

const droneRoutes: Routes = [
  { path: "drone-list", component: DroneListComponent },
  { path: "add-drone", component: ManageDroneComponent },
  { path: "", pathMatch: "full", redirectTo: "drone-list" },
];

@NgModule({
  declarations: [
    DroneListComponent,
    ManageDroneComponent,
    AddDroneComponent,
    ViewDroneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(droneRoutes),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
  ],
})
export class DroneModule {}
