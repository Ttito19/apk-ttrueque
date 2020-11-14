import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TabsPage } from "./tabs.page";
import { TranslateModule } from "@ngx-translate/core";
const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "./home/home.module#HomePageModule",
          },
        ],
      },
      {
        path: "trending",
        children: [
          {
            path: "",
            loadChildren: "./trending/trending.module#TrendingPageModule",
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: "./map/map.module#MapPageModule",
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: "./about/about.module#AboutPageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
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
  declarations: [TabsPage],
})
export class TabsPageModule {}
