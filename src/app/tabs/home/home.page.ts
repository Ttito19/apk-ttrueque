import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language-service";

import { HkApiproviderProvider } from "../../services/hk-apiprovider.service";
import { ModalController } from "@ionic/angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { ToastController } from '@ionic/angular';
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

  qrData="https://trueque.ga/home/";
  scannedCode=null;
  elementType:"url"|"canvas"|"img"="canvas";

  public bannerFullData: any;
 
  constructor(
    private languageService: LanguageService,
    private auth: HkApiproviderProvider,
    public modalController: ModalController,
    private barcodeScanner:BarcodeScanner,
    private base64ToGallery:Base64ToGallery,
    public toastController: ToastController
  
  ) {
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
 
  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();
    console.log('data: ', imageData);

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