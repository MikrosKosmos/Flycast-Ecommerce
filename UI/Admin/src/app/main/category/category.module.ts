import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryListComponent } from "./category-list/category-list.component";
import { ManageCategoryComponent } from "./manage-category/manage-category.component";
import { CreateCategoryComponent } from "./manage-category/create-category/create-category.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { UiModule } from "src/app/ui/ui.module";

const categoryRoutes: Routes = [
  { path: "category-list", component: CategoryListComponent },
  { path: "create-category", component: ManageCategoryComponent },
];

@NgModule({
  declarations: [
    CategoryListComponent,
    ManageCategoryComponent,
    CreateCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
  ],
})
export class CategoryModule {}
