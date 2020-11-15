<<<<<<< HEAD
import { Component, OnInit, } from "@angular/core";
=======
import { Component, OnInit } from "@angular/core";
>>>>>>> 0af88d9... integration qr
import { NavController } from "@ionic/angular";
// import { UserDetailService } from "../services/user-detail.service";
import { HkApiproviderProvider } from "../services/hk-apiprovider.service";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
<<<<<<< HEAD

=======
>>>>>>> 0af88d9... integration qr
})
export class AuthPage implements OnInit {
  remember: boolean;
  resposeData: any;
  userData = { mobile: "", password: "", fname: "" };
  constructor(
    private _navController: NavController,
    // private userDetailService: UserDetailService,
    private auth: HkApiproviderProvider
  ) {
    localStorage.setItem("userLogin", JSON.stringify(this.userData));
    if (localStorage.getItem("userLogin")) {
      const data = JSON.parse(localStorage.getItem("userLogin"));
      this.userData.mobile = data.mobile;
      this.userData.password = data.password;
    }
  }

  ngOnInit() {}

  onLogin() {
    if (this.userData.mobile != "" && this.userData.password != "") {
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
