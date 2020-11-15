import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from '@ionic/angular';


import { VendedorPage } from './vendedor.page';


const routes: Routes = [
  {
    path: "",
    component: VendedorPage,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VendedorPage]
})
export class VendedorPageModule {}
