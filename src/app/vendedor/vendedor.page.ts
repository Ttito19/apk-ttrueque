import { Component, OnInit, } from "@angular/core";
import { NavController } from "@ionic/angular";
// import { UserDetailService } from "../services/user-detail.service";
import { HkApiproviderProvider } from "../services/hk-apiprovider.service";
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 6e50916... new changes into david 014

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.page.html',
  styleUrls: ['./vendedor.page.scss'],
})
export class VendedorPage implements OnInit {

  remember: boolean;
  resposeData: any;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e7d0c4c... new changes into merge 013
  order: string;

  userData = { email_cliente: "", telefono: "" };
  constructor(
   
<<<<<<< HEAD
=======
=======
=======
  order: string;

>>>>>>> c669313... new changes into merge 006
  userData = { email_cliente: "", telefono: "" };
  constructor(
>>>>>>> 975e1f0... new changes into merge 004
>>>>>>> e7d0c4c... new changes into merge 013
=======
  userData = { email_cliente: "", telefono: "" };
  constructor(
>>>>>>> 6e50916... new changes into david 014
    private _navController: NavController,
    // private userDetailService: UserDetailService,
    private auth: HkApiproviderProvider
  ) {
    localStorage.setItem("userLogin", JSON.stringify(this.userData));
    if (localStorage.getItem("userLogin")) {
      const data = JSON.parse(localStorage.getItem("userLogin"));
      this.userData.email_cliente = data.email_cliente;
      this.userData.telefono = data.telefono;
    }
  }

<<<<<<< HEAD
  ngOnInit() {
  
    }
 
=======
  ngOnInit() {}
>>>>>>> 6e50916... new changes into david 014

  onLogin() {
    if (this.userData.email_cliente != "" && this.userData.telefono != "") {
      if (this.remember == true) {
        localStorage.setItem("userLogin", JSON.stringify(this.userData));
      }
      this.auth.postData(this.userData, "login").then(
        (result) => {
          this.resposeData = result;
      
          if (this.resposeData.userData) {
          
            
            localStorage.setItem("user", JSON.stringify(this.resposeData));
            this._navController.navigateRoot("/lateral");
          } else if (this.resposeData.error) {
            console.log("error");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("campos vavios");
    }
  }
}
