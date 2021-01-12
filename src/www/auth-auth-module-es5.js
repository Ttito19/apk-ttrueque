function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"back-logg-usertype\">\r\n  <div class=\"cont-c-logg\">\r\n    <ion-card center>\r\n      <ion-card-header class=\"ion-text-center\">\r\n        <img src=\"../../assets/img/logo/logo.png\" alt=\"logo_ttrueque\">\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-list>\r\n            <ion-item>\r\n              <ion-icon name=\"person-outline\"></ion-icon>\r\n              <ion-input [(ngModel)]=\"userData.email_cliente\"  type=\"mail\" placeholder=\"Email\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n              <ion-input [(ngModel)]=\"userData.telefono\"  type=\"text\" placeholder=\"Telefono\"></ion-input>\r\n            </ion-item>\r\n        </ion-list>\r\n        <div class=\"ion-padding-top ion-padding-bottom\">\r\n          <button block (click)=\"onLogin()\" class=\"no-ripple\" id=\"btn-login\" profile-button end>\r\n            Iniciar Sesión\r\n          </button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthPageModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
      return AuthPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var routes = [{
      path: "",
      component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
    }];

    var AuthPageModule = function AuthPageModule() {
      _classCallCheck(this, AuthPageModule);
    };

    AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })], AuthPageModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.page.scss":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*VARIBLES - LOGIN*/\n.back-logg-usertype {\n  background-image: url('img_bakground_ttrq_login.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.back-logg-usertype .cont-c-logg {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.84);\n}\n.back-logg-usertype .cont-c-logg ion-card {\n  background: transparent;\n  box-shadow: unset;\n  padding: 0 1rem;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-header img {\n  width: 60%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-content ion-list {\n  background: transparent;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-content ion-list ion-item {\n  /*background: $write;\n  padding: 0 0.5rem 0 0.5rem;*/\n  border-radius: 0.5rem;\n  margin-bottom: 0.9rem;\n  --ion-background-color: transparent !important;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-content ion-list ion-item ion-input {\n  text-align: center;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-content .ion-padding-top button {\n  background: #0032b6;\n  color: #fff;\n  padding: 1rem 0;\n  display: block;\n  width: 100%;\n  border-radius: 1.5rem;\n  outline: none;\n  font-weight: 800;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-content .ion-padding-top button:hover {\n  background: #3F65C8;\n}\n.back-logg-usertype .cont-c-logg ion-card ion-card-content .ion-padding-top button:active {\n  background: #3F65C8;\n}\n@media (max-width: 375px) {\n  .back-logg-usertype .cont-c-logg ion-card {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXFR0cnVlcXVlL3NyY1xcYXBwXFxhdXRoXFxhdXRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUtBO0VBQ0UscURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEY7QURLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQ0hKO0FES0k7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hOO0FETVE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUNKVjtBRFFRO0VBQ0UsdUJBQUE7QUNOVjtBRE9VO0VBQ0U7OEJBQUE7RUFFQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUNMWjtBRE9ZO0VBQ0Usa0JBQUE7QUNMZDtBRFVVO0VBQ0UsbUJBakRMO0VBa0RLLFdBbkRKO0VBb0RJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDUlo7QURVWTtFQUNFLG1CQUFBO0FDUmQ7QURVWTtFQUNFLG1CQUFBO0FDUmQ7QURpQkE7RUFHTTtJQUNFLHFCQUFBO0VDaEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypWQVJJQkxFUyAtIExPR0lOKi9cclxuJHdyaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzAwMzJiNjtcclxuJGZvbmRvOiAjMDI2YmRlO1xyXG5cclxuLmJhY2stbG9nZy11c2VydHlwZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvdXRpbGl0aWVzL2ltZ19iYWtncm91bmRfdHRycV9sb2dpbi5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmNvbnQtYy1sb2dnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjg0KTtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG5cclxuICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC8qYmFja2dyb3VuZDogJHdyaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbSAwIDAuNXJlbTsqL1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcclxuICAgICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pb24tcGFkZGluZy10b3Age1xyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd3JpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzRjY1Qzg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNGNjVDODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmJhY2stbG9nZy11c2VydHlwZSB7XHJcbiAgICAuY29udC1jLWxvZ2cge1xyXG4gICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW9uLXBhZGRpbmctdG9wIHtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIi8qVkFSSUJMRVMgLSBMT0dJTiovXG4uYmFjay1sb2dnLXVzZXJ0eXBlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvdXRpbGl0aWVzL2ltZ19iYWtncm91bmRfdHRycV9sb2dpbi5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5iYWNrLWxvZ2ctdXNlcnR5cGUgLmNvbnQtYy1sb2dnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCk7XG59XG4uYmFjay1sb2dnLXVzZXJ0eXBlIC5jb250LWMtbG9nZyBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmJhY2stbG9nZy11c2VydHlwZSAuY29udC1jLWxvZ2cgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmJhY2stbG9nZy11c2VydHlwZSAuY29udC1jLWxvZ2cgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJhY2stbG9nZy11c2VydHlwZSAuY29udC1jLWxvZ2cgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC8qYmFja2dyb3VuZDogJHdyaXRlO1xuICBwYWRkaW5nOiAwIDAuNXJlbSAwIDAuNXJlbTsqL1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5iYWNrLWxvZ2ctdXNlcnR5cGUgLmNvbnQtYy1sb2dnIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhY2stbG9nZy11c2VydHlwZSAuY29udC1jLWxvZ2cgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW9uLXBhZGRpbmctdG9wIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwMDMyYjY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmJhY2stbG9nZy11c2VydHlwZSAuY29udC1jLWxvZ2cgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW9uLXBhZGRpbmctdG9wIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzRjY1Qzg7XG59XG4uYmFjay1sb2dnLXVzZXJ0eXBlIC5jb250LWMtbG9nZyBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pb24tcGFkZGluZy10b3AgYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMzRjY1Qzg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuYmFjay1sb2dnLXVzZXJ0eXBlIC5jb250LWMtbG9nZyBpb24tY2FyZCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/auth.page.ts":
  /*!***********************************!*\
    !*** ./src/app/auth/auth.page.ts ***!
    \***********************************/

  /*! exports provided: AuthPage */

  /***/
  function srcAppAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
      return AuthPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_hk_apiprovider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/hk-apiprovider.service */
    "./src/app/services/hk-apiprovider.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthPage = /*#__PURE__*/function () {
      function AuthPage(route, _navController, alertController, auth, loadingController) {
        var _this = this;

        _classCallCheck(this, AuthPage);

        this.route = route;
        this._navController = _navController;
        this.alertController = alertController;
        this.auth = auth;
        this.loadingController = loadingController;
        this.userData = {
          email_cliente: "",
          telefono: "",
          estado: ""
        };
        localStorage.setItem("userLogin", JSON.stringify(this.userData));

        if (localStorage.getItem("userLogin")) {
          var data = JSON.parse(localStorage.getItem("userLogin"));
          this.userData.email_cliente = data.email_cliente;
          this.userData.telefono = data.telefono;
        }

        this.sub = this.route.queryParams.subscribe(function (params) {
          // Defaults to 0 if no query param provided.
          _this.page = params['estado'];
          _this.userData.estado = _this.page;
        });
      }

      _createClass(AuthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading, _yield$loading$onDidD, role, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Bienvenido ' + name + ' le estamos redirigiendo... ',
                      duration: 1000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;

                    this._navController.navigateRoot("/lateral");

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Mensaje',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this2 = this;

          if (this.userData.email_cliente != "" && this.userData.telefono != "") {
            if (this.remember == true) {
              localStorage.setItem("userLogin", JSON.stringify(this.userData));
            }

            this.auth.postData(this.userData, "login").then(function (result) {
              _this2.resposeData = result;

              if (_this2.resposeData.userData) {
                localStorage.setItem("user", JSON.stringify(_this2.resposeData));
                var name = _this2.resposeData.userData.nombre_cliente;

                _this2.presentLoading(name);
              } else if (_this2.resposeData.error) {
                var msg = "Email o télefono incorrecta";

                _this2.presentAlert(msg);
              }
            }, function (err) {
              var msg = "Error, favor de intentar más tarde";

              _this2.presentAlert(msg);
            });
          } else {
            var msg = "Campos vacíos";
            this.presentAlert(msg);
          }
        }
      }]);

      return AuthPage;
    }();

    AuthPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_hk_apiprovider_service__WEBPACK_IMPORTED_MODULE_3__["HkApiproviderProvider"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-auth",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth.page.scss */
      "./src/app/auth/auth.page.scss"))["default"]]
    })], AuthPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map