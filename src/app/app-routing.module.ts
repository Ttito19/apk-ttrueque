import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthguardGuard } from "./services/authguard.guard";

const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", loadChildren: "./auth/auth.module#AuthPageModule" },

  { path: "", redirectTo: "/lateral", pathMatch: "full" },
  {
    path: "lateral",
    loadChildren: "./lateral/lateral.module#LateralPageModule",
    canActivate: [AuthguardGuard],
  },
  {
    path: "tabs",
    loadChildren: "./tabs/tabs.module#TabsPageModule",
    canActivate: [AuthguardGuard],
  }

  {
    path: 'intro',
    loadChildren: () => import('./tabs/intro/intro.module').then( m => m.IntroPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}