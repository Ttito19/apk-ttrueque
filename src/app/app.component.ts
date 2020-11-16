import { Component } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public userDetails: any;
  userData = {
    fname: "",
    lastname: "",
  };
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _navController: NavController,
    private androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();

    var data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.userDetails = data.userData;
      this.userData.fname = this.userDetails.fname;
      this.userData.lastname = this.userDetails.lastname;
    }
  }

  initializeApp() {

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      (result) =>{
          if(!result.hasPermission){
            console.log('Has permission?',result.hasPermission);
          }
      },
      
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    

    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 500);
      this.checkDark();
      let userExist = localStorage.getItem("user");
      if (userExist) {
        this.splashScreen.hide();
        this._navController.navigateRoot("/lateral/home");
      } else {
        this.platform.ready().then(() => {
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString("#ba1f1a");
          this.splashScreen.hide();
        });
        this._navController.navigateRoot("/intro");
        this.splashScreen.hide();
      }
    });
  }

  //método for dark
  checkDark() {
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(prefersDark);
    // if (prefersDark.matches) {
    //   document.body.classList.toggle("dark");
    // }
  }
}