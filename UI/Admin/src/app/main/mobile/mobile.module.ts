import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MobileListComponent } from "./mobile-list/mobile-list.component";
import { RouterModule, Routes } from "@angular/router";
import { ManageMobileComponent } from "./manage-mobile/manage-mobile.component";
import { AddMobileComponent } from "./manage-mobile/add-mobile/add-mobile.component";
import { EditMobileComponent } from "./manage-mobile/edit-mobile/edit-mobile.component";
import { ViewMobileComponent } from "./manage-mobile/view-mobile/view-mobile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { UiModule } from "./../../ui/ui.module";

const mobileRoures: Routes = [
  { path: "mobile-list", component: MobileListComponent },
  { path: "add-mobile", component: ManageMobileComponent },
  { path: "", pathMatch: "full", redirectTo: "mobile-list" },
];

@NgModule({
  declarations: [
    MobileListComponent,
    ManageMobileComponent,
    AddMobileComponent,
    EditMobileComponent,
    ViewMobileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mobileRoures),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
  ],
})
export class MobileModule {}
