import { Component, OnInit, } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { HkApiproviderProvider } from "../services/hk-apiprovider.service";
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
<<<<<<< HEAD
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
=======

>>>>>>> 5200461... new changes into pk-ttrueque
@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],

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
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
=======

>>>>>>> 5200461... new changes into pk-ttrueque
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
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
=======

>>>>>>> 5200461... new changes into pk-ttrueque
          let name =this.resposeData.userData.nombre_cliente;
            this.presentLoading(name);
          
           
          } else if (this.resposeData.error) {
           
        let msg="Email o clave incorrecta";
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
<<<<<<< HEAD

=======
​
>>>>>>> 37e740c... new styles into 'intro'
=======

>>>>>>> 55d7760... new changes into david 018
=======
>>>>>>> 4e3c003... new changes into david 013
=======

>>>>>>> 5200461... new changes into pk-ttrueque
      let msg="Campos vacíos";
      this.presentAlert(msg);
    
      
    }
  }
}
