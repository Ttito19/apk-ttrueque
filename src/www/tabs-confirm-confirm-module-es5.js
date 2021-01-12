function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-confirm-confirm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/confirm/confirm.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/confirm/confirm.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsConfirmConfirmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header-cust-ttrqapk\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title> Pago éxitoso </ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"cont-total-confirm\">\n\t<div class=\"cont-confirm-details\">\n\t\t<div class=\"cont-center-info\">\n\t\t\t<div class=\"cont-img-confirm\">\n\t\t\t\t<img src=\"../../assets/img/utilities/animate_gif_ttrueque_confirm.gif\" alt=\"\">\n\t\t\t</div>\n\t\t\t<h1>¡Éxito! </h1>\n\t\t\t<p>Se realizó correctamente el pago.</p>\n\t\t\t<button class=\"btn-confirm\" (click)=\"back()\">Hecho</button>\n\t\t</div>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/confirm/confirm.module.ts":
  /*!************************************************!*\
    !*** ./src/app/tabs/confirm/confirm.module.ts ***!
    \************************************************/

  /*! exports provided: ConfirmPageModule */

  /***/
  function srcAppTabsConfirmConfirmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
      return ConfirmPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _confirm_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./confirm.page */
    "./src/app/tabs/confirm/confirm.page.ts");

    var routes = [{
      path: "",
      component: _confirm_page__WEBPACK_IMPORTED_MODULE_7__["ConfirmPage"]
    }];

    var ConfirmPageModule = function ConfirmPageModule() {
      _classCallCheck(this, ConfirmPageModule);
    };

    ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
      declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_7__["ConfirmPage"]]
    })], ConfirmPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/confirm/confirm.page.scss":
  /*!************************************************!*\
    !*** ./src/app/tabs/confirm/confirm.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsConfirmConfirmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Spartan:wght@400;900&display=swap\");\n.header-cust-ttrqapk {\n  background: dodgerblue;\n  display: flex;\n  height: 56px;\n  width: 100%;\n  color: #fff;\n}\nion-title {\n  text-align: center;\n  font-family: \"Spartan\", sans-serif;\n  font-weight: 900;\n}\n.cont-total-confirm {\n  --ion-background-color: #1E90FF !important;\n}\n.cont-total-confirm .cont-confirm-details {\n  padding: 1.6rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background: transparent !important;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 0 0 !important;\n  background: #fff;\n  border-radius: 0.8rem;\n  width: 100%;\n  padding: 1rem 1rem 1.5rem 1rem;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info .cont-img-confirm {\n  width: 150px;\n  height: 113px;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info .cont-img-confirm img {\n  width: 100%;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info h1 {\n  margin: 0.5rem 0 !important;\n  font-size: 1.5rem !important;\n  font-weight: bold;\n  color: #444;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info p {\n  margin-top: 0 !important;\n  color: grey;\n  font-size: 0.9rem;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info .btn-confirm {\n  background: #0032b6;\n  color: #fff;\n  padding: 0.8rem 0;\n  width: 100%;\n  border-radius: 0.9rem;\n  font-weight: bold;\n  font-size: 0.9rem;\n  outline: none;\n  text-decoration: none;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info .btn-confirm:hover {\n  background: #4A6ECB;\n}\n.cont-total-confirm .cont-confirm-details .cont-center-info .btn-confirm:active {\n  background: #4A6ECB;\n}\n@media (max-width: 425px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n@media (max-width: 375px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n@media (max-width: 320px) {\n  .header-cust-ttrqapk ion-title {\n    margin-right: 1.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9jb25maXJtL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcVHRydWVxdWUvc3JjXFxhcHBcXHRhYnNcXGNvbmZpcm1cXGNvbmZpcm0ucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFFUjtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FGO0FER0E7RUFDQyxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNBRDtBREdBO0VBQ0UsMENBQUE7QUNBRjtBRENFO0VBQ0MsZUFBQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0NKO0FEQ0k7RUFDQyxrQkFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNDTjtBRENJO0VBQ0MsWUFBQTtFQUNHLGFBQUE7QUNDUjtBREFLO0VBQ0MsV0FBQTtBQ0VOO0FERUk7RUFDQywyQkFBQTtFQUNHLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQVI7QURFSTtFQUNDLHdCQUFBO0VBQ0csV0FBQTtFQUNBLGlCQUFBO0FDQVI7QURHTTtFQUNDLG1CQUFBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0RSO0FER1E7RUFDQyxtQkFBQTtBQ0RUO0FER1E7RUFDQyxtQkFBQTtBQ0RUO0FET0E7RUFFSTtJQUNFLG9CQUFBO0VDTEo7QUFDRjtBRFFBO0VBRUk7SUFDRSxvQkFBQTtFQ1BKO0FBQ0Y7QURVQTtFQUVJO0lBQ0Usb0JBQUE7RUNUSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9jb25maXJtL2NvbmZpcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhcnRhbjp3Z2h0QDQwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uaGVhZGVyLWN1c3QtdHRycWFwayB7XHJcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5jb250LXRvdGFsLWNvbmZpcm17XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRiAhaW1wb3J0YW50O1xyXG4gIC5jb250LWNvbmZpcm0tZGV0YWlsc3tcclxuICBcdHBhZGRpbmc6IDEuNnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmNvbnQtY2VudGVyLWluZm97XHJcbiAgICBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxLjVyZW0gMXJlbTtcclxuXHJcbiAgXHRcdC5jb250LWltZy1jb25maXJte1xyXG4gIFx0XHRcdHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExM3B4O1xyXG4gIFx0XHRcdGltZ3tcclxuICBcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG4gIFx0XHRcdH1cclxuICBcdFx0fVxyXG5cclxuICBcdFx0aDF7XHJcbiAgXHRcdFx0bWFyZ2luOiAwLjVyZW0gMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgXHRcdH1cclxuICBcdFx0cHtcclxuICBcdFx0XHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHRcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gIFx0XHR9XHJcbiAgICAgIFxyXG4gICAgICAuYnRuLWNvbmZpcm17XHJcbiAgICAgIFx0YmFja2dyb3VuZDogIzAwMzJiNjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAuOHJlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgXHRiYWNrZ3JvdW5kOiAjNEE2RUNCO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICBcdGJhY2tncm91bmQ6ICM0QTZFQ0I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIHtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XHJcbiAgICB9XHJcbiAgfSAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsge1xyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcclxuICAgIH1cclxuICB9ICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuaGVhZGVyLWN1c3QtdHRycWFwayB7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgfVxyXG4gIH0gIFxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYXJ0YW46d2dodEA0MDA7OTAwJmRpc3BsYXk9c3dhcFwiKTtcbi5oZWFkZXItY3VzdC10dHJxYXBrIHtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU3BhcnRhblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uY29udC10b3RhbC1jb25maXJtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRiAhaW1wb3J0YW50O1xufVxuLmNvbnQtdG90YWwtY29uZmlybSAuY29udC1jb25maXJtLWRldGFpbHMge1xuICBwYWRkaW5nOiAxLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5jb250LXRvdGFsLWNvbmZpcm0gLmNvbnQtY29uZmlybS1kZXRhaWxzIC5jb250LWNlbnRlci1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAxLjVyZW0gMXJlbTtcbn1cbi5jb250LXRvdGFsLWNvbmZpcm0gLmNvbnQtY29uZmlybS1kZXRhaWxzIC5jb250LWNlbnRlci1pbmZvIC5jb250LWltZy1jb25maXJtIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDExM3B4O1xufVxuLmNvbnQtdG90YWwtY29uZmlybSAuY29udC1jb25maXJtLWRldGFpbHMgLmNvbnQtY2VudGVyLWluZm8gLmNvbnQtaW1nLWNvbmZpcm0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udC10b3RhbC1jb25maXJtIC5jb250LWNvbmZpcm0tZGV0YWlscyAuY29udC1jZW50ZXItaW5mbyBoMSB7XG4gIG1hcmdpbjogMC41cmVtIDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmNvbnQtdG90YWwtY29uZmlybSAuY29udC1jb25maXJtLWRldGFpbHMgLmNvbnQtY2VudGVyLWluZm8gcCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmNvbnQtdG90YWwtY29uZmlybSAuY29udC1jb25maXJtLWRldGFpbHMgLmNvbnQtY2VudGVyLWluZm8gLmJ0bi1jb25maXJtIHtcbiAgYmFja2dyb3VuZDogIzAwMzJiNjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250LXRvdGFsLWNvbmZpcm0gLmNvbnQtY29uZmlybS1kZXRhaWxzIC5jb250LWNlbnRlci1pbmZvIC5idG4tY29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0QTZFQ0I7XG59XG4uY29udC10b3RhbC1jb25maXJtIC5jb250LWNvbmZpcm0tZGV0YWlscyAuY29udC1jZW50ZXItaW5mbyAuYnRuLWNvbmZpcm06YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzRBNkVDQjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5oZWFkZXItY3VzdC10dHJxYXBrIGlvbi10aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuaGVhZGVyLWN1c3QtdHRycWFwayBpb24tdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhlYWRlci1jdXN0LXR0cnFhcGsgaW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/confirm/confirm.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/confirm/confirm.page.ts ***!
    \**********************************************/

  /*! exports provided: ConfirmPage */

  /***/
  function srcAppTabsConfirmConfirmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
      return ConfirmPage;
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

    var ConfirmPage = /*#__PURE__*/function () {
      function ConfirmPage(_navController) {
        _classCallCheck(this, ConfirmPage);

        this._navController = _navController;
      }

      _createClass(ConfirmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this._navController.navigateRoot("/lateral/home");
        }
      }]);

      return ConfirmPage;
    }();

    ConfirmPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/confirm/confirm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confirm.page.scss */
      "./src/app/tabs/confirm/confirm.page.scss"))["default"]]
    })], ConfirmPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-confirm-confirm-module-es5.js.map