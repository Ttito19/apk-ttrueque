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
 
  ];

  public userDetails: any;
  userData = {
    nombre_cliente: "",
    apellido_cliente: "",
    condicion:"",
    logo:""
  };

  constructor(private _navController: NavController, private router: Router) {
    var data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.userDetails = data.userData;
      this.userData.nombre_cliente = this.userDetails.nombre_cliente;
      this.userData.apellido_cliente = this.userDetails.apellido_cliente;
      this.userData.condicion = this.userDetails.condicion;
      this.userData.logo = this.userDetails.logo;
    }
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
    this.items();
    
     
  }

items(){

  if(this.userData.condicion=="ACTIVO"){       
    this.pages = [
      {
        title: "Inicio",
        url: "/lateral/home",
        icon: "home",
      },
    
    ]
  }else{
    this.pages = [
      {
        title: "Inicio",
        url: "/lateral/home",
        icon: "home",
      },
     
      {
        title: "Sobre nosotros",
        url: "/lateral/about",
        icon: "information-circle",
      },
      
      // {
      //   title: "Ajustes",
      //   url: "/lateral/settings",
      //   icon: "settings-outline",
      // },
    ];

  }  

}


  ngOnInit() {}
  onLogout() {
    // this._userDetailService.clearUserData();
    localStorage.clear();
    this._navController.navigateRoot("/intro");
    // console.log("hola");
  }
}