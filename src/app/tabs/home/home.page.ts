import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language-service";

import { HkApiproviderProvider } from "../../services/hk-apiprovider.service";
import { ModalController } from "@ionic/angular";
import { BarcodeScanner,BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
// import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import {Platform, ToastController } from '@ionic/angular';
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],

})
export class HomePage  {

  public resposeData: any;

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
    
  };

 

  qrData="" ;
  scannedCode=null;
  client=null;

  nameclient=null;
  elementType:"url"|"canvas"|"img"="canvas";

 
  constructor(
    private languageService: LanguageService,
    private auth: HkApiproviderProvider,
    public modalController: ModalController,
    private barcodeScanner:BarcodeScanner,
    // private base64ToGallery:Base64ToGallery,
    public toastController: ToastController,
    private platform: Platform,
  
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
    // this.qrData="https://trueque.ga/home/"+ this.userData.id+"/"+this.userData.email;
    this.qrData= this.userData.id+"/"+this.userData.email;
    this.postData.token = HkApiproviderProvider.gettoken();
    this.languageService.setInitiallanguage();
  

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

          this.nameclient=get[1];
          this.client=get[0];

        }
      );
    }

  


  }


  confirm() {
	
    this.userDataConfirm = {
     
      idclient:this.client,
      store:this.userDetails.id_cliente,
      puntostotales:this.userData.puntos,
      token:this.userDetails.token
    }

		this.auth.postData(this.userDataConfirm, 'restpoints').then(
			(result) => { 
        this.resposeData = result;
       alert("Pago con éxito")
			
			},
			(err) => {
				console.log(err);
        
			}
		);
	}

}
