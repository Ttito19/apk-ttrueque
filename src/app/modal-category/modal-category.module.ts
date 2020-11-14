import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ModalCategoryPage } from "./modal-category.page";
const routes: Routes = [
  {
    path: "",
    component: ModalCategoryPage,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ModalCategoryPage],
})
export class ModalCategoryPageModule {}
