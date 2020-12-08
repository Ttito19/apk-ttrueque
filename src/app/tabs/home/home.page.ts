import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language-service";
import { HkApiproviderProvider } from "../../services/hk-apiprovider.service";
import { ModalController,Platform, ToastController,NavController } from "@ionic/angular";
import { BarcodeScanner,BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { AlertController } from '@ionic/angular';
// import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],

})
export class HomePage  {

  public resposeData: any;
  public resposeDataGenerado: any;
  data: any;
  postData = {
    token: "",
  };
  userDataConfirm = {};
 public bannerFullData: any;
  public userDetails: any;
  userData = {
    nombre_cliente: "",
    apellido_cliente: "",
    condicion:"",
    id:"",
    email:"",
    puntos:"",
    points:"",
    pointsgenerado:"",
    fullnamegenerado:""
    
  };
  public datauser: any;
  selectuser = {};

  selectusergenerado={};
  qrData="" ;
  scannedCode=null;
  client=null;

  nameclient=null;
  puntoscliente=null;

  elementType:"url"|"canvas"|"img"="canvas";

 
  constructor(
    private languageService: LanguageService,
    private auth: HkApiproviderProvider,
    public modalController: ModalController,
    private barcodeScanner:BarcodeScanner,
    // private base64ToGallery:Base64ToGallery,
    private _navController: NavController,
    public toastController: ToastController,
    private platform: Platform,
    public alertController: AlertController,
   
  
  ) {
    var data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.userDetails = data.userData;
      this.userData.nombre_cliente = this.userDetails.nombre_cliente;
      this.userData.apellido_cliente = this.userDetails.apellido_cliente;
      this.userData.condicion = this.userDetails.condicion;
      this.userData.id = this.userDetails.id_cliente;
      this.userData.email = this.userDetails.nombre_cliente+" , "+this.userData.apellido_cliente; 
    }
      this.postData.token = HkApiproviderProvider.gettoken();
      this.languageService.setInitiallanguage();
      this.getUserId()
    }

 


  scanCode(){
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: false,
      showTorchButton: false,
      torchOn: false,
      prompt: 'Coloque un código de barras dentro del área de escaneo',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };
    if (this.platform.is('cordova')==false) {
       alert("Amigo sólo funciona en movil");
    }else{
      this.barcodeScanner.scan(options).then(
        barcodeData=>{
          this.scannedCode=barcodeData.text;
          let get= this.scannedCode.split("/");   
        //  traer los datos del cliente leídos por el lector QR

        this.client= get[0];
          this.selectusergenerado={
            id_cliente: get[0],
            token:this.userDetails.token
          }
         
          this.auth.postData(this.selectusergenerado, "selectuserid").then(
            (result) => {
              this.resposeDataGenerado = result;
              this.datauser= this.resposeDataGenerado.userData;
              this.userData.pointsgenerado=this.datauser.puntos;
              this.userData.fullnamegenerado=this.datauser.nombre_cliente+" , "+this.datauser.apellido_cliente;  ;
            
                       
            },
            (err) => {
            console.log(err);
            
            
            }
          );
        }
      );
    }
  }
// MENSAJE 
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',    
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

// botom para confirmar el pago
  confirm() {
      // validar si hay monto en el input
        if(this.userData.puntos==""){
            let msg="Escribir monto a cobrar";
            this.presentAlert(msg);
        }else{
          if(parseInt(this.userData.pointsgenerado)<parseInt(this.userData.puntos)){
              let msg="El cliente no tiene puntos suficientes...";
              this.presentAlert(msg);
          }else if(this.userData.pointsgenerado=="0"){

              let msg="El cliente no tiene puntos...";
              this.presentAlert(msg);
          }else{
      // obtener los datos y restas puntos al cliente y sumar al vendedor
              this.userDataConfirm = {   
                idclient:this.client,
                store:this.userDetails.id_cliente,
                puntostotales:this.userData.puntos,
                token:this.userDetails.token
              }
              this.auth.postData(this.userDataConfirm, 'restpoints').then(
                (result) => { 
                  this.resposeData = result;
                  this._navController.navigateRoot("/lateral/confirm");
                
                },
                (err) => {
                  console.log(err);
                  let msg="Lo sentimos ha ocurrido un error...";
                  this.presentAlert(msg);     
                }
              );
          }
        }  
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
            this.userData.points=this.datauser.puntos;
            this.qrData= this.userData.id+"/"+this.userData.email+"/"+this.userData.points;
          },
          (err) => {
          console.log(err); 
          }
        );
    }
    

   // Actualizar puntos scroleando hacia abajo
    doRefresh(event) {  
      this.getUserId();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 1000);
    }
  
  

}
