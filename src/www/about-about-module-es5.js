function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/about/about.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/about/about.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"header-cust-ttrqapk\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>{{ 'ABOUT.title' | translate }}</ion-title>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cont-total-about\"> \r\n  <div class=\"cont-info-about\">\r\n    <h1>PRIVACIDAD Y SEGURIDAD TTRUEQUE</h1>\r\n    <p>\r\n      Aseguramos la máxima reserva y protección sobre aquellos datos personales\r\n      de los clientes/usuarios que sean ingresados en el sitio en internet de su\r\n      propiedad esta política está regulada por la legislación peruana y en\r\n      particular por reglamento de la:<br />\r\n      <strong>Ley n° 29733</strong> – ley de protección de datos personales aprobada por el\r\n      decreto supremo n° 019-2013-JUS/DGPDP\r\n    </p>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/about/about.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/about/about.module.ts ***!
    \********************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function srcAppTabsAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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


    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/tabs/about/about.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: "",
      component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }];

    var AboutPageModule = function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    };

    AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })], AboutPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/about/about.page.scss":
  /*!********************************************!*\
    !*** ./src/app/tabs/about/about.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-cust-ttrqapk {\n  background: dodgerblue;\n  display: flex;\n  height: 56px;\n  width: 100%;\n  color: #fff;\n}\n.header-cust-ttrqapk ion-title {\n  text-align: center;\n  font-weight: 800;\n}\n.cont-total-about {\n  --ion-background-color: #1E90FF !important;\n}\n.cont-total-about .cont-info-about {\n  padding: 1.6rem;\n  background: #fff;\n  color: #444;\n  border-radius: 0.5rem;\n  width: 90%;\n  margin: 1rem auto auto auto;\n}\n.cont-total-about .cont-info-about h1 {\n  font-weight: bold;\n  margin: 0 0 0.5rem 0;\n}\n@media (max-width: 425px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n@media (max-width: 375px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n@media (max-width: 320px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9hYm91dC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXFR0cnVlcXVlL3NyY1xcYXBwXFx0YWJzXFxhYm91dFxcYWJvdXQucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDQyxrQkFBQTtFQUNDLGdCQUFBO0FDQ0o7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7QURBRTtFQUNDLGVBQUE7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEQUc7RUFDQyxpQkFBQTtFQUNFLG9CQUFBO0FDRU47QURHQTtFQUVJO0lBQ0Usb0JBQUE7RUNESjtBQUNGO0FESUE7RUFFSTtJQUNFLG9CQUFBO0VDSEo7QUFDRjtBRE1BO0VBRUk7SUFDRSxvQkFBQTtFQ0xKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY3VzdC10dHJxYXBrIHtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBpb24tdGl0bGV7XHJcbiAgXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG4uY29udC10b3RhbC1hYm91dHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGICFpbXBvcnRhbnQ7XHJcbiAgLmNvbnQtaW5mby1hYm91dHtcclxuICBcdHBhZGRpbmc6IDEuNnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvIGF1dG8gYXV0bztcclxuXHJcbiAgXHRoMXtcclxuICBcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XHJcbiAgXHR9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAuaGVhZGVyLWN1c3QtdHRycWFwayB7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgfVxyXG4gIH0gIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIHtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XHJcbiAgICB9XHJcbiAgfSAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsge1xyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcclxuICAgIH1cclxuICB9ICBcclxufSIsIi5oZWFkZXItY3VzdC10dHJxYXBrIHtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyLWN1c3QtdHRycWFwayBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jb250LXRvdGFsLWFib3V0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRiAhaW1wb3J0YW50O1xufVxuLmNvbnQtdG90YWwtYWJvdXQgLmNvbnQtaW5mby1hYm91dCB7XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gYXV0byBhdXRvO1xufVxuLmNvbnQtdG90YWwtYWJvdXQgLmNvbnQtaW5mby1hYm91dCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIGlvbi10aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuaGVhZGVyLWN1c3QtdHRycWFwayBpb24tdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsgaW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/about/about.page.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/about/about.page.ts ***!
    \******************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppTabsAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutPage = /*#__PURE__*/function () {
      function AboutPage() {
        _classCallCheck(this, AboutPage);
      }

      _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutPage;
    }();

    AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./about.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/about/about.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./about.page.scss */
      "./src/app/tabs/about/about.page.scss"))["default"]]
    })], AboutPage);
    /***/
  }
}]);
//# sourceMappingURL=about-about-module-es5.js.map