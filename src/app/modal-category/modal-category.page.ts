import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NavParams } from "@ionic/angular";
@Component({
  selector: "app-modal-category",
  templateUrl: "./modal-category.page.html",
  styleUrls: ["./modal-category.page.scss"],
})
export class ModalCategoryPage implements OnInit {
  public categorys = [];
  public url: String;
  constructor(public modalController: ModalController, navParams: NavParams) {
    this.categorys = navParams.get("categorys");
    this.url = navParams.get("url");
  }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
