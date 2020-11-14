import { Component, OnInit, } from "@angular/core";
import { NavController } from "@ionic/angular";
// import { UserDetailService } from "../services/user-detail.service";
import { HkApiproviderProvider } from "../services/hk-apiprovider.service";
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})
export class EmpleadoPage implements OnInit {

  remember: boolean;
  resposeData: any;
  userData = { email_cliente: "", telefono: "" };
  constructor(
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

  ngOnInit() {}

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
