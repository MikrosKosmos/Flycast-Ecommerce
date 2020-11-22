import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssetsListComponent } from "./assets-list/assets-list.component";
import { ManageAssetsComponent } from "./manage-assets/manage-assets.component";
import { CreateAssetsComponent } from "./manage-assets/create-assets/create-assets.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { UiModule } from "src/app/ui/ui.module";
const assetsRouting: Routes = [
  { path: "assets-list", component: AssetsListComponent },
  { path: "create-assets", component: CreateAssetsComponent },
];
@NgModule({
  declarations: [
    AssetsListComponent,
    ManageAssetsComponent,
    CreateAssetsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(assetsRouting),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
  ],
})
export class AssetsModule {}
