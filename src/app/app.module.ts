<<<<<<< HEAD
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP } from "@ionic-native/http/ngx";
import { HkApiproviderProvider } from "./services/hk-apiprovider.service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LanguageService } from "./services/language-service";
import { IonicStorageModule } from "@ionic/storage";
import { CommonModule } from "@angular/common";
import { IdiomaPage } from "./idioma/idioma.page";
import { ModalCategoryPage } from "./modal-category/modal-category.page";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, IdiomaPage, ModalCategoryPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    HkApiproviderProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    LanguageService,
    BarcodeScanner,
    Base64ToGallery,
    AndroidPermissions
  ],
  bootstrap: [AppComponent],
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
>>>>>>> ac861af... Initial commit
})
export class AppModule {}
