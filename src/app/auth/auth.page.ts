import { Component, OnInit, } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { HkApiproviderProvider } from "../services/hk-apiprovider.service";
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 0af88d9... integration qr
=======

>>>>>>> 7954b0a... new changes repair 021
=======
>>>>>>> 58c4d09... new changes repair 022
=======

>>>>>>> c2d0c25... new changes repair 0232
=======
​
>>>>>>> 1c7ac80... new changes repair 024
=======

>>>>>>> d458465... new changes repair 025
=======
>>>>>>> 8dbd52f... new changes repair 030
=======

>>>>>>> b7f4b2c... new changes repair 031
=======

=======
>>>>>>> 0af88d9... integration qr
>>>>>>> e8f51b8... new changes repair 032
=======
>>>>>>> f10c034... new changes repair 033
=======

>>>>>>> 856e3e3... new changes repair 034
=======
​
>>>>>>> 4d8bb94... new changes repair 035
=======

>>>>>>> f98a07d... new changes repair 036
=======
>>>>>>> c800254... new changes repair 037
=======

>>>>>>> 007c70a... new changes david 017
=======

=======
>>>>>>> 0af88d9... integration qr
>>>>>>> f96863e... new changes repair 039
=======
>>>>>>> cde51c8... new changes into david 025
=======

>>>>>>> 948e6b1... new changes repair 040
=======
>>>>>>> d2a0983... new changes repair 041
=======

>>>>>>> d0abc01... new changes repair 042
=======
​
>>>>>>> 9c73b0d... new changes repair 043
})
export class AuthPage implements OnInit {
  remember: boolean;
  resposeData: any;
  userData = { email_cliente: "", telefono: "",estado:"" };
  sub:any;
  page;
  constructor(
    private route: ActivatedRoute,
    private _navController: NavController,
    public alertController: AlertController,
    private auth: HkApiproviderProvider,
    public loadingController: LoadingController
  ) {
   
    
    localStorage.setItem("userLogin", JSON.stringify(this.userData));
    if (localStorage.getItem("userLogin")) {
      const data = JSON.parse(localStorage.getItem("userLogin"));
      this.userData.email_cliente = data.email_cliente;
      this.userData.telefono = data.telefono;
    }
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.page = params['estado'] ;
      this.userData.estado= this.page;
      
    });
    
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
    ngOnInit() {
  
    }
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
    async presentLoading(name) {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Bienvenido '+  name  + ' le estamos redirigiendo... ',
        duration: 1000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      this._navController.navigateRoot("/lateral");
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 55d7760... new changes into david 018




<<<<<<< HEAD
=======
​
​
​
​
>>>>>>> 37e740c... new styles into 'intro'
=======
>>>>>>> 55d7760... new changes into david 018
 async presentAlert(msg) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',    
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }
<<<<<<< HEAD
  

  onLogin() {
  
=======
  

  onLogin() {
  
>>>>>>> 37e740c... new styles into 'intro'
    if (this.userData.email_cliente != "" && this.userData.telefono != "") {
      if (this.remember == true) {
        localStorage.setItem("userLogin", JSON.stringify(this.userData));
      }
      this.auth.postData(this.userData, "login").then(
        (result) => {
          this.resposeData = result;
        
          if (this.resposeData.userData) {
            localStorage.setItem("user", JSON.stringify(this.resposeData));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
          let name =this.resposeData.userData.nombre_cliente;
            this.presentLoading(name);
          
           
          } else if (this.resposeData.error) {
           
        let msg="Email o télefono incorrecta";
        this.presentAlert(msg);
          }
        },
        (err) => {
          let msg="Error, favor de intentar más tarde";
          this.presentAlert(msg);
        
        }
      );
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
      let msg="Campos vacíos";
      this.presentAlert(msg);
    
      
    }
  }
}