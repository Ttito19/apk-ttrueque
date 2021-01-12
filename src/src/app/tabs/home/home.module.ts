import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
<<<<<<< HEAD:src/src/app/tabs/home/home.module.ts
<<<<<<< HEAD:src/src/app/tabs/home/home.module.ts
<<<<<<< HEAD:src/src/app/tabs/home/home.module.ts
<<<<<<< HEAD:src/src/app/tabs/home/home.module.ts
import { NgxQRCodeModule } from "ngx-qrcode2";
=======
=======
>>>>>>> f98a07d... new changes repair 036:src/app/tabs/home/home.module.ts
<<<<<<< HEAD
import {NgxQRCodeModule} from "ngx-qrcode2"
=======
>>>>>>> 0af88d9... integration qr
<<<<<<< HEAD:src/src/app/tabs/home/home.module.ts
>>>>>>> e8f51b8... new changes repair 032:src/app/tabs/home/home.module.ts
=======
import {NgxQRCodeModule} from "ngx-qrcode2"
>>>>>>> f10c034... new changes repair 033:src/app/tabs/home/home.module.ts
=======
>>>>>>> f98a07d... new changes repair 036:src/app/tabs/home/home.module.ts
=======
import {NgxQRCodeModule} from "ngx-qrcode2"
>>>>>>> c800254... new changes repair 037:src/app/tabs/home/home.module.ts
const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgxQRCodeModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
