import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from '@ionic/angular';


import { EmpleadoPage } from './empleado.page';
const routes: Routes = [
  {
    path: "",
    component: EmpleadoPage,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmpleadoPage]
})
export class EmpleadoPageModule {}
