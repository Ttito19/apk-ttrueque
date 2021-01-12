(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/settings/settings.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/settings/settings.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header-cust-ttrqapk\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>{{ 'SETTINGS.title' | translate }}</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"moon\"> </ion-icon>\n      <ion-label>{{ 'SETTINGS.dark' | translate }}</ion-label>\n      <ion-toggle\n        slot=\"end\"\n        [ngModel]=\"darkMode\"\n        (ionChange)=\"changeDark()\"\n      ></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tabs/settings/settings.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/settings/settings.module.ts ***!
  \**************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/tabs/settings/settings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: "",
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"],
    },
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]],
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/tabs/settings/settings.page.scss":
/*!**************************************************!*\
  !*** ./src/app/tabs/settings/settings.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-cust-ttrqapk {\n  background: dodgerblue;\n  display: flex;\n  height: 56px;\n  width: 100%;\n  color: #fff;\n}\n.header-cust-ttrqapk ion-title {\n  text-align: center;\n  font-weight: 800;\n}\n@media (max-width: 425px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n@media (max-width: 375px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n@media (max-width: 320px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zZXR0aW5ncy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXFR0cnVlcXVlL3NyY1xcYXBwXFx0YWJzXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDQyxrQkFBQTtFQUNDLGdCQUFBO0FDRUo7QURDQTtFQUVJO0lBQ0Usb0JBQUE7RUNDSjtBQUNGO0FERUE7RUFFSTtJQUNFLG9CQUFBO0VDREo7QUFDRjtBRElBO0VBRUk7SUFDRSxvQkFBQTtFQ0hKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY3VzdC10dHJxYXBrIHtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGlvbi10aXRsZXtcclxuICBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIHtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XHJcbiAgICB9XHJcbiAgfSAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsge1xyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcclxuICAgIH1cclxuICB9ICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuaGVhZGVyLWN1c3QtdHRycWFwayB7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgfVxyXG4gIH0gIFxyXG59IiwiLmhlYWRlci1jdXN0LXR0cnFhcGsge1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItY3VzdC10dHJxYXBrIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIGlvbi10aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuaGVhZGVyLWN1c3QtdHRycWFwayBpb24tdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsgaW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/settings/settings.page.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/settings/settings.page.ts ***!
  \************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SettingsPage = class SettingsPage {
    constructor() {
        this.darkMode = false;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        this.darkMode = !prefersDark.matches;
        console.log(prefersDark);
    }
    ngOnInit() { }
    changeDark() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle("dark");
    }
};
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/tabs/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-settings-settings-module-es2015.js.map