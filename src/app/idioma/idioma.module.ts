import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
=======
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
// import { BrowserModule } from "@angular/platform-browser";
>>>>>>> 0af88d9... integration qr
import { IdiomaPage } from "./idioma.page";
const routes: Routes = [
  {
    path: "",
    component: IdiomaPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // BrowserModule,
  ],
  // declarations: [IdiomaPage],
})
export class IdiomaPageModule {}
