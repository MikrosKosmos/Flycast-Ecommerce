/* git */
import { AuthGuardService } from "./auth-guard.service";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const AppRoutes: Routes = [
  {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./auth/auth.module#AuthModule",
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuardService],
    component: MainLayoutComponent,
    children: [
      {
        path: "dashboard",
        canActivate: [AuthGuardService],
        loadChildren: "./main/dashboard/dashboard.module#DashboardModule",
      },
      {
        path: "mobile",
        canActivate: [AuthGuardService],
        loadChildren: "./main/mobile/mobile.module#MobileModule",
      },
      {
        path: "drone",
        canActivate: [AuthGuardService],
        loadChildren: "./main/drone/drone.module#DroneModule",
      },
      {
        path: "category",
        canActivate: [AuthGuardService],
        loadChildren: "./main/category/category.module#CategoryModule",
      },
      {
        path: "attribute",
        canActivate: [AuthGuardService],
        loadChildren: "./main/attribute/attribute.module#AttributeModule",
      },
      {
        path: "asset",
        canActivate: [AuthGuardService],
        loadChildren: "./main/assets/assets.module#AssetsModule",
      },
      { path: "**", redirectTo: "dashboard" },
    ],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
