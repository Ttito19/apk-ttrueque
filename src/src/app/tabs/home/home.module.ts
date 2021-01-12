import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
import { NgxQRCodeModule } from "ngx-qrcode2";
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