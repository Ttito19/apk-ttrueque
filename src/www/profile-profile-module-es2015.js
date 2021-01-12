(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"header-cust-ttrqapk\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>  \r\n      <ion-title> Perfil</ion-title>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"cont-card-profile\">\r\n    <div class=\"cont-logostore-profile\">\r\n      <div  *ngIf=\"userData.logo!=undefined\"  >\r\n        <img src=\"http://trueque.ga/shop/images/store/{{userData.logo}}\">\r\n      </div>\r\n      <div  *ngIf=\"userData.logo==undefined\"  >\r\n        <img src=\"../../assets/img/utilities/user-default.jpg\">\r\n      </div>\r\n      <h1>{{userData.nombre_cliente + ' ' + userData.apellido_cliente}}</h1>\r\n    </div>\r\n    <div class=\"content-bottom-card\">\r\n      <div class=\"cont-infostore-profile\">\r\n        <div class=\"cont-control-info\" *ngIf=\"userData.logo!=undefined\">\r\n          <p>Tienda</p> \r\n          <label>{{userData.nameStore}}</label>\r\n        </div>\r\n        <div class=\"cont-control-info\">\r\n          <p>Puntos</p> \r\n          <label>{{userData.puntos}}</label>\r\n        </div>\r\n        <div class=\"cont-control-info\">\r\n          <p>Email</p> \r\n          <label>{{userData.email}}</label>\r\n        </div>\r\n        <div class=\"cont-control-info\">\r\n          <p>Celular</p> \r\n          <label>{{userData.telefono}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/tabs/profile/profile.page.ts");








const routes = [
    {
        path: "",
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
    },
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/tabs/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-cust-ttrqapk {\n  background: dodgerblue;\n  display: flex;\n  height: 56px;\n  width: 100%;\n  color: #fff;\n}\n.header-cust-ttrqapk ion-title {\n  text-align: center;\n  font-weight: 800;\n}\nion-content {\n  --ion-background-color: #1E90FF !important;\n}\nion-content .cont-card-profile {\n  width: 90%;\n  margin: 1rem auto auto auto;\n  background: transparent;\n  border-radius: 0.5rem;\n  padding: 0 0 0 0;\n}\nion-content .cont-card-profile .cont-logostore-profile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\nion-content .cont-card-profile .cont-logostore-profile div {\n  width: 140px;\n  height: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  overflow: hidden;\n}\nion-content .cont-card-profile .cont-logostore-profile div img {\n  -o-object-fit: cover;\n  object-fit: cover;\n  -o-object-position: center;\n  object-position: center;\n  width: 100%;\n  -webkit-clip-path: circle(50% at 50% 50%);\n  clip-path: circle(50% at 50% 50%);\n  height: 100%;\n  background: #eee;\n  text-align: center;\n}\nion-content .cont-card-profile .cont-logostore-profile h1 {\n  color: #1E90FF;\n  background: #fff;\n  padding: 0.5rem 2rem;\n  font-size: 1rem;\n  border-radius: 1.5rem;\n  text-transform: capitalize;\n  font-weight: 800;\n}\nion-content .cont-card-profile .content-bottom-card {\n  border-radius: 0.6rem;\n  background: #fff;\n  padding: 0.5rem 0 0.5rem 0;\n}\nion-content .cont-card-profile .content-bottom-card .cont-infostore-profile {\n  padding: 0 1.3rem;\n}\nion-content .cont-card-profile .content-bottom-card .cont-infostore-profile .cont-control-info {\n  margin-bottom: 1rem;\n}\nion-content .cont-card-profile .content-bottom-card .cont-infostore-profile .cont-control-info p {\n  color: rgba(0, 0, 0, 0.3);\n  padding: 0;\n  margin-bottom: 0.3rem;\n  font-size: 0.9rem;\n}\nion-content .cont-card-profile .content-bottom-card .cont-infostore-profile .cont-control-info label {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  width: 100%;\n  display: block;\n  padding: 0 0 0.6rem 0;\n}\n@media (max-width: 425px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 2.8rem;\n  }\n}\n@media (max-width: 375px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 2.8rem;\n  }\n}\n@media (max-width: 320px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 2.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9wcm9maWxlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcVHRydWVxdWUvc3JjXFxhcHBcXHRhYnNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0E7RUFDRSwwQ0FBQTtBQ0VGO0FEQUU7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFTjtBREFNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURBUTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VWO0FERU07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDRE47QURHTTtFQUNFLGlCQUFBO0FDRFI7QURFUTtFQUNFLG1CQUFBO0FDQVY7QURDVTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDWjtBRENVO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ1o7QURPQTtFQUVJO0lBQ0Usb0JBQUE7RUNMSjtBQUNGO0FEUUE7RUFFSTtJQUNFLG9CQUFBO0VDUEo7QUFDRjtBRFVBO0VBRUk7SUFDRSxvQkFBQTtFQ1RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWN1c3QtdHRycWFwayB7XHJcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBpb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRiAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIC5jb250LWNhcmQtcHJvZmlsZXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0byBhdXRvIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuXHJcbiAgICAuY29udC1sb2dvc3RvcmUtcHJvZmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAtby1vYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogY2lyY2xlKDUwJSBhdCA1MCUgNTAlKTtcclxuICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDUwJSBhdCA1MCUgNTAlKTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICMxRTkwRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50LWJvdHRvbS1jYXJke1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAuNnJlbTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xyXG5cclxuICAgICAgLmNvbnQtaW5mb3N0b3JlLXByb2ZpbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG4gICAgICAgIC5jb250LWNvbnRyb2wtaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjZyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIHtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjhyZW07XHJcbiAgICB9XHJcbiAgfSAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsge1xyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuOHJlbTtcclxuICAgIH1cclxuICB9ICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuaGVhZGVyLWN1c3QtdHRycWFwayB7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMi44cmVtO1xyXG4gICAgfVxyXG4gIH0gIFxyXG59IiwiLmhlYWRlci1jdXN0LXR0cnFhcGsge1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItY3VzdC10dHJxYXBrIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuY29udC1jYXJkLXByb2ZpbGUge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDFyZW0gYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG59XG5pb24tY29udGVudCAuY29udC1jYXJkLXByb2ZpbGUgLmNvbnQtbG9nb3N0b3JlLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5pb24tY29udGVudCAuY29udC1jYXJkLXByb2ZpbGUgLmNvbnQtbG9nb3N0b3JlLXByb2ZpbGUgZGl2IHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnQgLmNvbnQtY2FyZC1wcm9maWxlIC5jb250LWxvZ29zdG9yZS1wcm9maWxlIGRpdiBpbWcge1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC1vLW9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xuICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNvbnQtY2FyZC1wcm9maWxlIC5jb250LWxvZ29zdG9yZS1wcm9maWxlIGgxIHtcbiAgY29sb3I6ICMxRTkwRkY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5pb24tY29udGVudCAuY29udC1jYXJkLXByb2ZpbGUgLmNvbnRlbnQtYm90dG9tLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwO1xufVxuaW9uLWNvbnRlbnQgLmNvbnQtY2FyZC1wcm9maWxlIC5jb250ZW50LWJvdHRvbS1jYXJkIC5jb250LWluZm9zdG9yZS1wcm9maWxlIHtcbiAgcGFkZGluZzogMCAxLjNyZW07XG59XG5pb24tY29udGVudCAuY29udC1jYXJkLXByb2ZpbGUgLmNvbnRlbnQtYm90dG9tLWNhcmQgLmNvbnQtaW5mb3N0b3JlLXByb2ZpbGUgLmNvbnQtY29udHJvbC1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb250ZW50IC5jb250LWNhcmQtcHJvZmlsZSAuY29udGVudC1ib3R0b20tY2FyZCAuY29udC1pbmZvc3RvcmUtcHJvZmlsZSAuY29udC1jb250cm9sLWluZm8gcCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5pb24tY29udGVudCAuY29udC1jYXJkLXByb2ZpbGUgLmNvbnRlbnQtYm90dG9tLWNhcmQgLmNvbnQtaW5mb3N0b3JlLXByb2ZpbGUgLmNvbnQtY29udHJvbC1pbmZvIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAwIDAuNnJlbSAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsgaW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuOHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIGlvbi10aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuaGVhZGVyLWN1c3QtdHRycWFwayBpb24tdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMi44cmVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_hk_apiprovider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hk-apiprovider.service */ "./src/app/services/hk-apiprovider.service.ts");



let ProfilePage = class ProfilePage {
    constructor(auth) {
        this.auth = auth;
        this.userData = {
            nombre_cliente: "",
            apellido_cliente: "",
            condicion: "",
            logo: "",
            nameStore: "",
            email: "",
            telefono: "",
            puntos: ""
        };
        this.selectuser = {};
        var data = JSON.parse(localStorage.getItem("user"));
        if (data) {
            this.userDetails = data.userData;
            this.userData.nombre_cliente = this.userDetails.nombre_cliente;
            this.userData.apellido_cliente = this.userDetails.apellido_cliente;
            this.userData.logo = this.userDetails.logo;
            this.userData.nameStore = this.userDetails.nombre_tienda;
            this.userData.email = this.userDetails.email_cliente;
            this.userData.telefono = this.userDetails.telefono;
            this.userData.condicion = this.userDetails.condicion;
        }
        this.getUserId();
    }
    ngOnInit() {
    }
    getUserId() {
        this.selectuser = {
            id_cliente: this.userDetails.id_cliente,
            token: this.userDetails.token
        };
        this.auth.postData(this.selectuser, "selectuserid").then((result) => {
            this.resposeData = result;
            this.datauser = this.resposeData.userData;
            this.userData.puntos = this.datauser.puntos;
        }, (err) => {
            console.log(err);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_hk_apiprovider_service__WEBPACK_IMPORTED_MODULE_2__["HkApiproviderProvider"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/tabs/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map