import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkuListComponent } from "./sku-list/sku-list.component";
import { ManageSkuComponent } from "./manage-sku/manage-sku.component";
import { CreateSkuComponent } from "./manage-sku/create-sku/create-sku.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { UiModule } from "src/app/ui/ui.module";
import { CreatePuctureSkuComponent } from "./create-pucture-sku/create-pucture-sku.component";

const skuRoutes: Routes = [
  { path: "sku-list", component: SkuListComponent },
  { path: "create-sku", component: ManageSkuComponent },
  { path: "picture-sku", component: CreatePuctureSkuComponent },
];

@NgModule({
  declarations: [
    SkuListComponent,
    ManageSkuComponent,
    CreateSkuComponent,
    CreatePuctureSkuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(skuRoutes),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
  ],
})
export class SkuModule {}
