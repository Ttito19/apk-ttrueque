import { Injectable } from "@angular/core";
// import { map } from "rxjs/operators";
// import { timeout } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HkApiproviderProvider {
  /*******  CHANGE URL HERE ***************/

  url = "https://systemcss.ml/irun";
  static token =
    "dfd65117f5a90cf87c1664e5f6db4d68b2d1e70e6bc2e96f9a5e40e995b0c066";

  /****************************************/

  baseUrl = this.url + "/app/";
  data: any;
  imagebaseurl = this.url + "/admin/itemimg/";
  imagefolderurl = this.url + "/admin/folder/";
  bannerbaseurl = this.url + "/admin/banner/";

  /*********************************************** */

  constructor(public http: HttpClient) {}

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      this.http
        .post(this.baseUrl + type, JSON.stringify(credentials), {
          headers,
        })
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  getimage() {
    return this.imagebaseurl;
  }
  getimageFolder() {
    return this.imagefolderurl;
  }

  getbanner() {
    return this.bannerbaseurl;
  }

  static gettoken() {
    return HkApiproviderProvider.token;
  }
}
