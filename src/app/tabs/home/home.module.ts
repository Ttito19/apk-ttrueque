import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
<<<<<<< HEAD
import {NgxQRCodeModule} from "ngx-qrcode2"
=======
>>>>>>> 0af88d9... integration qr
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
<<<<<<< HEAD
    NgxQRCodeModule,
=======
>>>>>>> 0af88d9... integration qr
  ],
  declarations: [HomePage],
})
export class HomePageModule {}