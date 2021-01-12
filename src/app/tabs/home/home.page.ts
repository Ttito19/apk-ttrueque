import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language-service";

import { HkApiproviderProvider } from "../../services/hk-apiprovider.service";
import { ModalController } from "@ionic/angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
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
 public bannerFullData: any;
  public userDetails: any;
  userData = {
    nombre_cliente: "",
    apellido_cliente: "",
    condicion:"",
    id:"",
    email:""
  };

  qrData="" ;
  scannedCode=null;
  elementType:"url"|"canvas"|"img"="canvas";

 
  constructor(
    private languageService: LanguageService,
    private auth: HkApiproviderProvider,
    public modalController: ModalController,
    private barcodeScanner:BarcodeScanner,
    private base64ToGallery:Base64ToGallery,
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
      this.userData.email = this.userDetails.email_cliente;
    }
    this.qrData="https://trueque.ga/home/"+ this.userData.id+"/"+this.userData.email;
   console.log(this.userDetails);
   
    
    this.postData.token = HkApiproviderProvider.gettoken();
    this.languageService.setInitiallanguage();


  }

  scanCode(){

    if (this.platform.is('cordova')==false) {
       alert("Amigo sólo funciona en movil");
    }else{
      this.barcodeScanner.scan().then(
        barcodeData=>{
          this.scannedCode=barcodeData.text;
        }
      );
    }

  


  }

  confirm(){
    alert("Pago exitoso")
  }


 
  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();
 

    let data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      { prefix: '_img', mediaScanner: true })
      .then(async res => {
        let toast = await this.toastController.create({
          header: 'QR code saved to Photolibrary'
        });
        toast.present();
    }, err => console.log('err: ', err))



    
  };
 


}
