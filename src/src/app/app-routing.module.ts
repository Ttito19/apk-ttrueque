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
<<<<<<< HEAD:src/src/app/app-routing.module.ts
<<<<<<< HEAD:src/src/app/app-routing.module.ts
<<<<<<< HEAD:src/src/app/app-routing.module.ts
  },  {
    path: 'modal-category',
    loadChildren: () => import('./modal-category/modal-category.module').then( m => m.ModalCategoryPageModule)
=======
>>>>>>> 07bad5b... new changes repair 001:src/app/app-routing.module.ts
=======
  },  {
    path: 'modal-category',
    loadChildren: () => import('./modal-category/modal-category.module').then( m => m.ModalCategoryPageModule)
>>>>>>> 6dac046... new merge 001:src/app/app-routing.module.ts
  },
=======
  }
>>>>>>> 73319f4... new merge for david:src/app/app-routing.module.ts

  {
    path: 'intro',
    loadChildren: () => import('./tabs/intro/intro.module').then( m => m.IntroPageModule)
  }


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
