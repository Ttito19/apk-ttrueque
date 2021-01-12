<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0af88d9... integration qr
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
        path: "profile",
        children: [
          {
            path: "",
            loadChildren: "./profile/profile.module#ProfilePageModule",
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
<<<<<<< HEAD

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  declarations: [TabsPage],
=======
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
=======
>>>>>>> 0af88d9... integration qr

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
<<<<<<< HEAD
  declarations: [TabsPage]
>>>>>>> ac861af... Initial commit
=======
  declarations: [TabsPage],
>>>>>>> 0af88d9... integration qr
})
export class TabsPageModule {}
