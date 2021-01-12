function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "../tabs/about/about.module": ["./src/app/tabs/about/about.module.ts", "about-about-module"],
      "../tabs/confirm/confirm.module": ["./src/app/tabs/confirm/confirm.module.ts", "tabs-confirm-confirm-module"],
      "../tabs/home/home.module": ["./src/app/tabs/home/home.module.ts", "home-home-module"],
      "../tabs/profile/profile.module": ["./src/app/tabs/profile/profile.module.ts", "profile-profile-module"],
      "../tabs/settings/settings.module": ["./src/app/tabs/settings/settings.module.ts", "tabs-settings-settings-module"],
      "./about/about.module": ["./src/app/tabs/about/about.module.ts", "about-about-module"],
      "./auth/auth.module": ["./src/app/auth/auth.module.ts", "auth-auth-module"],
      "./home/home.module": ["./src/app/tabs/home/home.module.ts", "home-home-module"],
      "./lateral/lateral.module": ["./src/app/lateral/lateral.module.ts", "lateral-lateral-module"],
      "./profile/profile.module": ["./src/app/tabs/profile/profile.module.ts", "profile-profile-module"],
      "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts", "tabs-tabs-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-router-outlet  > </ion-router-outlet>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/idioma/idioma.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idioma/idioma.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIdiomaIdiomaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-item button *ngFor=\"let lng of languages\" (click)=\"select(lng.value)\">\n    <img [src]=\"lng.img\" slot=\"start\" class=\"clsimg\" />\n    <ion-label text-wrap>\n      {{lng.text}}\n    </ion-label>\n    <ion-icon\n      slot=\"end\"\n      name=\"checkmark\"\n      *ngIf=\"lng.value==selected\"\n    ></ion-icon>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authguard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/authguard.guard */
    "./src/app/services/authguard.guard.ts");

    var routes = [{
      path: "",
      redirectTo: "/auth",
      pathMatch: "full"
    }, {
      path: "auth",
      loadChildren: "./auth/auth.module#AuthPageModule"
    }, {
      path: "",
      redirectTo: "/lateral",
      pathMatch: "full"
    }, {
      path: "lateral",
      loadChildren: "./lateral/lateral.module#LateralPageModule",
      canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]]
    }, {
      path: "tabs",
      loadChildren: "./tabs/tabs.module#TabsPageModule",
      canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]]
    }, {
      path: 'intro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-intro-intro-module */
        "tabs-intro-intro-module").then(__webpack_require__.bind(null,
        /*! ./tabs/intro/intro.module */
        "./src/app/tabs/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".popover-content {\n  background: #222;\n}\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n\n.my-custom-class {\n  --background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxUdHJ1ZXF1ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlci1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuIiwiLnBvcG92ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi5teS1jdXN0b20tY2xhc3MgLnBvcG92ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi5teS1jdXN0b20tY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, _navController) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this._navController = _navController;
        this.userData = {
          fname: "",
          lastname: ""
        };
        this.initializeApp();
        var data = JSON.parse(localStorage.getItem("user"));

        if (data) {
          this.userDetails = data.userData;
          this.userData.fname = this.userDetails.fname;
          this.userData.lastname = this.userDetails.lastname;
        }
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            setTimeout(function () {
              _this.splashScreen.hide();
            }, 500);

            _this.checkDark();

            var userExist = localStorage.getItem("user");

            if (userExist) {
              _this.splashScreen.hide();

              _this._navController.navigateRoot("/lateral/home");
            } else {
              _this.platform.ready().then(function () {
                _this.statusBar.styleDefault();

                _this.statusBar.backgroundColorByHexString("#ba1f1a");

                _this.splashScreen.hide();
              });

              _this._navController.navigateRoot("/intro");

              _this.splashScreen.hide();
            }
          });
        } //método for dark

      }, {
        key: "checkDark",
        value: function checkDark() {// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
          // console.log(prefersDark);
          // if (prefersDark.matches) {
          //   document.body.classList.toggle("dark");
          // }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_hk_apiprovider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/hk-apiprovider.service */
    "./src/app/services/hk-apiprovider.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _services_language_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/language-service */
    "./src/app/services/language-service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _idioma_idioma_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./idioma/idioma.page */
    "./src/app/idioma/idioma.page.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js"); // import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _idioma_idioma_page__WEBPACK_IMPORTED_MODULE_17__["IdiomaPage"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
        }
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"]],
      exports: [],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"], _services_hk_apiprovider_service__WEBPACK_IMPORTED_MODULE_11__["HkApiproviderProvider"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _services_language_service__WEBPACK_IMPORTED_MODULE_14__["LanguageService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_19__["BarcodeScanner"], // Base64ToGallery,
      _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_18__["AndroidPermissions"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/idioma/idioma.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/idioma/idioma.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppIdiomaIdiomaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img.clsimg {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRpb21hL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcVHRydWVxdWUvc3JjXFxhcHBcXGlkaW9tYVxcaWRpb21hLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaWRpb21hL2lkaW9tYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9pZGlvbWEvaWRpb21hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2UtaWRpb21hIHtcclxuaW1nLmNsc2ltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLy8gfVxyXG4iLCJpbWcuY2xzaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/idioma/idioma.page.ts":
  /*!***************************************!*\
    !*** ./src/app/idioma/idioma.page.ts ***!
    \***************************************/

  /*! exports provided: IdiomaPage */

  /***/
  function srcAppIdiomaIdiomaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdiomaPage", function () {
      return IdiomaPage;
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


    var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/language-service */
    "./src/app/services/language-service.ts");

    var IdiomaPage = /*#__PURE__*/function () {
      function IdiomaPage(popoverController, languageService) {
        _classCallCheck(this, IdiomaPage);

        this.popoverController = popoverController;
        this.languageService = languageService;
        this.languages = [];
        this.selected = "";
      }

      _createClass(IdiomaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.languages = this.languageService.getLanguages();
          this.selected = this.languageService.selected;
        }
      }, {
        key: "select",
        value: function select(lng) {
          this.languageService.setLanguage(lng);
          this.popoverController.dismiss();
        }
      }]);

      return IdiomaPage;
    }();

    IdiomaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    IdiomaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-idioma",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./idioma.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/idioma/idioma.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./idioma.page.scss */
      "./src/app/idioma/idioma.page.scss"))["default"]]
    })], IdiomaPage);
    /***/
  },

  /***/
  "./src/app/services/authguard.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/authguard.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthguardGuard */

  /***/
  function srcAppServicesAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
      return AuthguardGuard;
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


    var _user_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-detail.service */
    "./src/app/services/user-detail.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AuthguardGuard = /*#__PURE__*/function () {
      function AuthguardGuard(_userDetailService, _navController) {
        _classCallCheck(this, AuthguardGuard);

        this._userDetailService = _userDetailService;
        this._navController = _navController;
      }

      _createClass(AuthguardGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this._userDetailService.isUserLoggedIn) {
            return true;
          }

          this._navController.navigateRoot("/auth");

          return false;
        }
      }]);

      return AuthguardGuard;
    }();

    AuthguardGuard.ctorParameters = function () {
      return [{
        type: _user_detail_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    AuthguardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthguardGuard);
    /***/
  },

  /***/
  "./src/app/services/hk-apiprovider.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/hk-apiprovider.service.ts ***!
    \****************************************************/

  /*! exports provided: HkApiproviderProvider */

  /***/
  function srcAppServicesHkApiproviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HkApiproviderProvider", function () {
      return HkApiproviderProvider;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HkApiproviderProvider_1; // import { map } from "rxjs/operators";
    // import { timeout } from "rxjs/operators";

    var HkApiproviderProvider = HkApiproviderProvider_1 = /*#__PURE__*/function () {
      /*********************************************** */
      function HkApiproviderProvider(http) {
        _classCallCheck(this, HkApiproviderProvider);

        this.http = http;
        /*******  CHANGE URL HERE ***************/

        this.url = "https://ttrueque.com";
        /****************************************/

        this.baseUrl = this.url + "/app/";
        this.imagebaseurl = this.url + "/admin/itemimg/";
        this.imagefolderurl = this.url + "/admin/folder/";
        this.bannerbaseurl = this.url + "/admin/banner/";
      }

      _createClass(HkApiproviderProvider, [{
        key: "postData",
        value: function postData(credentials, type) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            _this2.http.post(_this2.baseUrl + type, JSON.stringify(credentials), {
              headers: headers
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getimage",
        value: function getimage() {
          return this.imagebaseurl;
        }
      }, {
        key: "getimageFolder",
        value: function getimageFolder() {
          return this.imagefolderurl;
        }
      }, {
        key: "getbanner",
        value: function getbanner() {
          return this.bannerbaseurl;
        }
      }], [{
        key: "gettoken",
        value: function gettoken() {
          return HkApiproviderProvider_1.token;
        }
      }]);

      return HkApiproviderProvider;
    }();

    HkApiproviderProvider.token = "dfd65117f5a90cf87c1664e5f6db4d68b2d1e70e6bc2e96f9a5e40e995b0c066";

    HkApiproviderProvider.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HkApiproviderProvider = HkApiproviderProvider_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HkApiproviderProvider);
    /***/
  },

  /***/
  "./src/app/services/language-service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/language-service.ts ***!
    \**********************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppServicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LNG_KEY = "SELECTED_LANGUAGE";

    var LanguageService = /*#__PURE__*/function () {
      function LanguageService(http, translate, storage) {
        _classCallCheck(this, LanguageService);

        this.http = http;
        this.translate = translate;
        this.storage = storage;
        this.selected = "";
      }

      _createClass(LanguageService, [{
        key: "setInitiallanguage",
        value: function setInitiallanguage() {
          var _this3 = this;

          var language = this.translate.getBrowserLang();
          this.translate.setDefaultLang(language);
          this.storage.get(LNG_KEY).then(function (val) {
            if (val) {
              _this3.setLanguage(val);

              _this3.selected = val;
            }
          });
        }
      }, {
        key: "getLanguages",
        value: function getLanguages() {
          return [{
            text: "English",
            value: "en",
            img: "assets/img/en.svg"
          }, {
            text: "Español",
            value: "es",
            img: "assets/img/es.svg"
          }];
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(lng) {
          this.translate.use(lng);
          this.selected = lng;
          this.storage.set(LNG_KEY, lng);
        }
      }]);

      return LanguageService;
    }();

    LanguageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: "root"
    })], LanguageService);
    /***/
  },

  /***/
  "./src/app/services/user-detail.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/user-detail.service.ts ***!
    \*************************************************/

  /*! exports provided: UserDetailService */

  /***/
  function srcAppServicesUserDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailService", function () {
      return UserDetailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserDetailService = /*#__PURE__*/function () {
      function UserDetailService() {
        _classCallCheck(this, UserDetailService);
      }

      _createClass(UserDetailService, [{
        key: "clearUserData",
        value: function clearUserData() {
          localStorage.clear();
        }
      }, {
        key: "isUserLoggedIn",
        // setUserData() {
        //   localStorage.setItem('user', 'indraraj');
        // }
        get: function get() {
          var data = localStorage.getItem("user");
          return data ? true : false;
        }
      }]);

      return UserDetailService;
    }();

    UserDetailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserDetailService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\Ttrueque\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map