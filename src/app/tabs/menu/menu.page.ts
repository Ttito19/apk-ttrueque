import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

import { UserDetailService } from "../../services/user-detail.service";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  constructor(
    // private _navController: NavController,
    // private _userDetailService: UserDetailService

  ) {}

  ngOnInit() {}

  // onLogout() {
  //   this._userDetailService.clearUserData();
  //   this._navController.navigateRoot("/auth");
  //   console.log("hola");
  // }
}
