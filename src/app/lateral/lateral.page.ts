import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";
@Component({
  selector: "app-lateral",
  templateUrl: "./lateral.page.html",
  styleUrls: ["./lateral.page.scss"],
})
export class LateralPage implements OnInit {
  selectedPath = "";
  //invocamos la ruta
  pages = [
    {
      title: "Inicio",
      url: "/lateral/home",
      icon: "home",
    },
    {
      title: "Tendencias",
      url: "/lateral/trending",
      icon: "trending-up",
    },
    {
      title: "Categorías",
      url: "/lateral/category",
      icon: "apps-outline",
    },
    {
      title: "Mapa",
      url: "/lateral/map",
      icon: "map",
    },
    {
      title: "Sobre nosotros",
      url: "/lateral/about",
      icon: "information-circle",
    },
    {
      title: "Ajustes",
      url: "/lateral/settings",
      icon: "settings-outline",
    },
  ];

  public userDetails: any;
  userData = {
    fname: "",
    lastname: "",
  };

  constructor(private _navController: NavController, private router: Router) {
    var data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.userDetails = data.userData;
      this.userData.fname = this.userDetails.fname;
      this.userData.lastname = this.userDetails.lastname;
    }
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
  onLogout() {
    // this._userDetailService.clearUserData();
    localStorage.clear();
    this._navController.navigateRoot("/auth");
    console.log("hola");
  }
}
