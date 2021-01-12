<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD
=======
>>>>>>> 0af88d9... integration qr
=======
>>>>>>> 09ad79d... union changes branchs 003:src/app/tabs/tabs.module.ts
=======
>>>>>>> eae84f8... new changes repair 003:src/app/tabs/tabs.module.ts
=======
<<<<<<< HEAD
>>>>>>> 6dac046... new merge 001:src/app/tabs/tabs.module.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 0af88d9... integration qr
>>>>>>> fc6e842... new changes repair 005:src/app/tabs/tabs.module.ts
=======
>>>>>>> 15bc888... new changes repair 007:src/app/tabs/tabs.module.ts
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  declarations: [TabsPage],
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
=======
>>>>>>> 6dac046... new merge 001:src/app/tabs/tabs.module.ts
=======
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
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
=======
=======
>>>>>>> 6dac046... new merge 001:src/app/tabs/tabs.module.ts
=======
=======
>>>>>>> 0af88d9... integration qr
>>>>>>> fc6e842... new changes repair 005:src/app/tabs/tabs.module.ts

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
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
<<<<<<< HEAD:src/src/app/tabs/tabs.module.ts
>>>>>>> 09ad79d... union changes branchs 003:src/app/tabs/tabs.module.ts
=======
>>>>>>> eae84f8... new changes repair 003:src/app/tabs/tabs.module.ts
=======
>>>>>>> 6dac046... new merge 001:src/app/tabs/tabs.module.ts
=======
=======
  declarations: [TabsPage],
>>>>>>> 0af88d9... integration qr
>>>>>>> fc6e842... new changes repair 005:src/app/tabs/tabs.module.ts
=======
>>>>>>> 15bc888... new changes repair 007:src/app/tabs/tabs.module.ts
})
export class TabsPageModule {}
