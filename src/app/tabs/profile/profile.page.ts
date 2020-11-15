import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public userDetails: any;
  userData = {
    nombre_cliente: "",
    apellido_cliente: "",
    condicion:"",
    logo:"",
    nameStore:"",
    puntos:""
  };

  constructor() {
    var data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.userDetails = data.userData;
      this.userData.nombre_cliente = this.userDetails.nombre_cliente;
      this.userData.apellido_cliente = this.userDetails.apellido_cliente;
      this.userData.logo = this.userDetails.logo;
      this.userData.nameStore = this.userDetails.nombre_tienda;
      this.userData.puntos = this.userDetails.puntos;
    

      this.userData.condicion = this.userDetails.condicion;
    }

    console.log(this.userDetails);
    
   }
 
  ngOnInit() {
  }

}
