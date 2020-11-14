import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LateralPage } from "./lateral.page";
import { Routes, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
const routes: Routes = [
  ///generamos la ruta yendo a la carpeta,  para poder invocarla despues,
  {
    path: "",
    component: LateralPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "../tabs/home/home.module#HomePageModule",
          },
        ],
      },
      {
        path: "trending",
        children: [
          {
            path: "",
            loadChildren: "../tabs/trending/trending.module#TrendingPageModule",
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: "../tabs/map/map.module#MapPageModule",
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: "../tabs/about/about.module#AboutPageModule",
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            loadChildren: "../tabs/settings/settings.module#SettingsPageModule",
          },
        ],
      },
      {
        path: "category",
        children: [
          {
            path: "",
            loadChildren: "../tabs/category/category.module#CategoryPageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/lateral/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/lateral/home",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  declarations: [LateralPage],
})
export class LateralPageModule {}
