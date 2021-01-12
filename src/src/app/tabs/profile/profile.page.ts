import { Component, OnInit } from '@angular/core';
import { HkApiproviderProvider } from "../../services/hk-apiprovider.service";

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
    email:"",
    telefono:"",
    puntos:""
  };
  public datauser: any;
  resposeData: any;
  selectuser = {};
  constructor(
    private auth: HkApiproviderProvider,

  ) {
    var data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.userDetails = data.userData;
      this.userData.nombre_cliente = this.userDetails.nombre_cliente;
      this.userData.apellido_cliente = this.userDetails.apellido_cliente;
      this.userData.logo = this.userDetails.logo;
      this.userData.nameStore = this.userDetails.nombre_tienda;
      this.userData.email = this.userDetails.email_cliente;
      this.userData.telefono = this.userDetails.telefono;
      this.userData.condicion = this.userDetails.condicion;   
    }
    this.getUserId()
   }
 
  ngOnInit() {
  }


getUserId(){

this.selectuser={
  id_cliente: this.userDetails.id_cliente,
  token:this.userDetails.token
}
  this.auth.postData(this.selectuser, "selectuserid").then(
    (result) => {
      this.resposeData = result;
      this.datauser= this.resposeData.userData;
      this.userData.puntos=this.datauser.puntos
    },
    (err) => {
    console.log(err);
    
    
    }
  );
}


  
<<<<<<< HEAD
}
=======
}
>>>>>>> e3e5553... changes failed
