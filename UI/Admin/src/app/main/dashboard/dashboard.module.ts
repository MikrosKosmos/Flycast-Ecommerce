import { ToastrModule } from "ngx-toastr";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from "./task-list/task-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UiModule } from "src/app/ui/ui.module";
import { SupportOpenTaskComponent } from "./support-open-task/support-open-task.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

export const DashboardRoute: Routes = [
  { path: "", component: DashboardComponent },
  { path: "support/:taskId", component: SupportOpenTaskComponent },
  // { path: 'support/:id', component: SupportOpenTaskComponent }
];
@NgModule({
  declarations: [
    TaskListComponent,
    DashboardComponent,
    SupportOpenTaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoute),
    UiModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class DashboardModule {}
