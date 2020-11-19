import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttributeListComponent } from "./attribute-list/attribute-list.component";
import { ManageAttributeComponent } from "./manage-attribute/manage-attribute.component";
import { CreateAttributeComponent } from "./manage-attribute/create-attribute/create-attribute.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { UiModule } from "src/app/ui/ui.module";
import { CategoryAttributeComponent } from "./category-attribute/category-attribute.component";

const attributeRoutes: Routes = [
  { path: "attributes-list", component: AttributeListComponent },
  { path: "create-attribute", component: ManageAttributeComponent },
  { path: "category-attribute", component: CategoryAttributeComponent },
];
@NgModule({
  declarations: [
    AttributeListComponent,
    ManageAttributeComponent,
    CreateAttributeComponent,
    CategoryAttributeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(attributeRoutes),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
  ],
})
export class AttributeModule {}
