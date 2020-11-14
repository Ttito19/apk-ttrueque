import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
const LNG_KEY = "SELECTED_LANGUAGE";
@Injectable({
  providedIn: "root",
})
export class LanguageService {
  selected = "";

  constructor(
    public http: HttpClient,
    public translate: TranslateService,
    private storage: Storage
  ) {}

  setInitiallanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }
  getLanguages() {
    return [
      {
        text: "English",
        value: "en",
        img: "assets/img/en.svg",
      },
      {
        text: "Español",
        value: "es",
        img: "assets/img/es.svg",
      },
    ];
  }
  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
