(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./package.json":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */

    /***/
    function packageJson(module) {
      module.exports = JSON.parse("{\"name\":\"workflow-ui-ng\",\"version\":\"0.10.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --proxy-config proxy.conf.json --host=0.0.0.0\",\"build\":\"ng build\",\"build-prod\":\"ng build --prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.0.8\",\"@angular/cdk\":\"^10.1.3\",\"@angular/common\":\"~10.0.8\",\"@angular/compiler\":\"~10.0.8\",\"@angular/core\":\"~10.0.8\",\"@angular/forms\":\"~10.0.8\",\"@angular/platform-browser\":\"~10.0.8\",\"@angular/platform-browser-dynamic\":\"~10.0.8\",\"@angular/router\":\"~10.0.8\",\"@ngx-translate/core\":\"^13.0.0\",\"@ngx-translate/http-loader\":\"^6.0.0\",\"@types/lodash-es\":\"^4.17.3\",\"bulma\":\"^0.8.0\",\"lodash-es\":\"^4.17.15\",\"normalize.css\":\"^8.0.1\",\"primeflex\":\"^2.0.0-rc.1\",\"primeicons\":\"^4.0.0\",\"primeng\":\"^10.0.0-rc.3\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1000.5\",\"@angular/cli\":\"~10.0.5\",\"@angular/compiler-cli\":\"~10.0.8\",\"@angular/language-service\":\"~10.0.8\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.12.54\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~3.3.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.9.7\"}}");
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


      var _shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/components/base/base.component */
      "./src/app/shared/components/base/base.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _assets_config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../assets/config/config.json */
      "./src/assets/config/config.json");

      var _assets_config_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../assets/config/config.json */
      "./src/assets/config/config.json", 1);
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/modules/auth/auth.service */
      "./src/app/core/modules/auth/auth.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/components/navbar/navbar.component */
      "./src/app/shared/components/navbar/navbar.component.ts");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "./src/app/shared/components/footer/footer.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      var AppComponent = /*#__PURE__*/function (_shared_components_ba) {
        _inherits(AppComponent, _shared_components_ba);

        var _super = _createSuper(AppComponent);

        function AppComponent(_appService, _authService, _i18n, _primengConfig, _router) {
          var _this;

          _classCallCheck(this, AppComponent);

          _this = _super.call(this);
          _this._appService = _appService;
          _this._authService = _authService;
          _this._i18n = _i18n;
          _this._primengConfig = _primengConfig;
          _this._router = _router;
          _this.currentUser$$ = _this._authService.currentUser$$;
          _this.isLoggedIn = true;
          _this.title = 'Workflow UI';
          return _this;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this._primengConfig.ripple = true;

            var languagesAvailable = _assets_config_config_json__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"].map(function (lang) {
              return lang.value;
            });

            this._i18n.addLangs(languagesAvailable);

            this._i18n.setDefaultLang('en');

            this._appService.language.subscribe(function (lang) {
              _this2._i18n.use(lang);
            });

            var browserLanguage = this._i18n.getBrowserLang();

            var fallbackLanguage = languagesAvailable.includes(browserLanguage) ? browserLanguage : 'en';
            var language = localStorage.getItem('wf-current-language') || fallbackLanguage;

            this._appService.language.next(language);

            this._authService.isLoggedIn$$.subscribe(function (isLoggedIn) {
              _this2.isLoggedIn = isLoggedIn;

              if (!isLoggedIn) {
                _this2._router.navigate(['/login']);
              }
            });

            var currentUser = localStorage.getItem('wf-current-user');

            this._authService.currentUser$$.next(currentUser);

            this._authService.isLoggedIn$$.next(!!currentUser);

            if (currentUser) {
              this._authService.getUserInfo().subscribe();
            }
          }
        }]);

        return AppComponent;
      }(_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 8,
        consts: [[3, "user", "hidden"], [1, "hero"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 6, ctx.currentUser$$))("hidden", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fullheight", !ctx.isLoggedIn)("fullheight-with-navbar", ctx.isLoggedIn);
          }
        },
        directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }, {
            type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeNGConfig"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _custom_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./custom-interceptor */
      "./src/app/custom-interceptor.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.routing */
      "./src/app/app.routing.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _core_service_injector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @core/service.injector */
      "./src/app/core/service.injector.ts");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared/modules/shared.module */
      "./src/app/shared/modules/shared.module.ts");
      /* harmony import */


      var _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @shared/modules/vendor.module */
      "./src/app/shared/modules/vendor.module.ts");
      /* harmony import */


      var _shared_services_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @shared/services/coalescing-component-factory-resolver.service */
      "./src/app/shared/services/coalescing-component-factory-resolver.service.ts"); // AoT requires an exported function for factories


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
      }

      var AppModule = function AppModule(injector, coalescingResolver) {
        _classCallCheck(this, AppModule);

        _core_service_injector__WEBPACK_IMPORTED_MODULE_10__["ServiceInjector"].injector = injector;
        coalescingResolver.init();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_13__["CoalescingComponentFactoryResolver"]));
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _custom_interceptor__WEBPACK_IMPORTED_MODULE_2__["CustomInterceptor"],
          multi: true
        }],
        imports: [[_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRouting"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
          defaultLanguage: 'en',
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
          }
        }), _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__["VendorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          imports: [_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRouting"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__["VendorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRouting"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
              defaultLanguage: 'en',
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
              }
            }), _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__["VendorModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _custom_interceptor__WEBPACK_IMPORTED_MODULE_2__["CustomInterceptor"],
              multi: true
            }],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"]
          }, {
            type: _shared_services_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_13__["CoalescingComponentFactoryResolver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.routing.ts":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRouting */

    /***/
    function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRouting", function () {
        return AppRouting;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/guards/auth.guard */
      "./src/app/core/guards/auth.guard.ts");
      /* harmony import */


      var _core_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/modules/auth/auth.module */
      "./src/app/core/modules/auth/auth.module.ts");

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return _core_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"];
        },
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        canDeactivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'worklist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app-feature-modules-worklist-worklist-module */
          "app-feature-modules-worklist-worklist-module").then(__webpack_require__.bind(null,
          /*! app/feature/modules/worklist/worklist.module */
          "./src/app/feature/modules/worklist/worklist.module.ts")).then(function (m) {
            return m.WorklistModule;
          });
        },
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: '/worklist',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/worklist'
      }];

      var AppRouting = function AppRouting() {
        _classCallCheck(this, AppRouting);
      };

      AppRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRouting
      });
      AppRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRouting_Factory(t) {
          return new (t || AppRouting)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRouting, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouting, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.service.ts":
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /*! exports provided: AppService */

    /***/
    function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var AppService = function AppService() {
        _classCallCheck(this, AppService);

        this.language = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('en');
      };

      AppService.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)();
      };

      AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/guards/auth.guard.ts":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppCoreGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modules/auth/auth.service */
      "./src/app/core/modules/auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(_authService, _router) {
          _classCallCheck(this, AuthGuard);

          this._authService = _authService;
          this._router = _router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isLoggedIn = this._authService.isLoggedIn$$.value;
            var url = state.url;

            if (isLoggedIn && url !== '/login') {
              // logged in so return true
              return true;
            } else if (isLoggedIn && url === '/login') {
              this._router.navigate(['/worklist']);

              return false;
            }

            if (!isLoggedIn && url === '/login') {
              return true;
            }

            this._router.navigate(['/login']);

            return false;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate(component, currentRoute, currentState, nextState) {
            return this._authService.isLoggedIn$$.value;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/modules/auth/auth.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/modules/auth/auth.module.ts ***!
      \**************************************************/

    /*! exports provided: AuthModule */

    /***/
    function srcAppCoreModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers/auth-container/auth-container.component */
      "./src/app/core/modules/auth/containers/auth-container/auth-container.component.ts");
      /* harmony import */


      var _auth_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.routing */
      "./src/app/core/modules/auth/auth.routing.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/modules/vendor.module */
      "./src/app/shared/modules/vendor.module.ts");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_auth_routing__WEBPACK_IMPORTED_MODULE_4__["AuthRouting"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_6__["VendorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_3__["AuthContainerComponent"]],
          imports: [_auth_routing__WEBPACK_IMPORTED_MODULE_4__["AuthRouting"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_6__["VendorModule"]],
          exports: [_containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_3__["AuthContainerComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_auth_routing__WEBPACK_IMPORTED_MODULE_4__["AuthRouting"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_6__["VendorModule"]],
            declarations: [_containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_3__["AuthContainerComponent"]],
            exports: [_containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_3__["AuthContainerComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/modules/auth/auth.routing.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/modules/auth/auth.routing.ts ***!
      \***************************************************/

    /*! exports provided: AuthRouting */

    /***/
    function srcAppCoreModulesAuthAuthRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRouting", function () {
        return AuthRouting;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./containers/auth-container/auth-container.component */
      "./src/app/core/modules/auth/containers/auth-container/auth-container.component.ts");

      var routes = [{
        path: '',
        pathMatch: 'full',
        component: _containers_auth_container_auth_container_component__WEBPACK_IMPORTED_MODULE_2__["AuthContainerComponent"]
      }];

      var AuthRouting = function AuthRouting() {
        _classCallCheck(this, AuthRouting);
      };

      AuthRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRouting
      });
      AuthRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRouting_Factory(t) {
          return new (t || AuthRouting)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRouting, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRouting, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/modules/auth/auth.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/modules/auth/auth.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppCoreModulesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _assets_config_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../assets/config/config.json */
      "./src/assets/config/config.json");

      var _assets_config_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../assets/config/config.json */
      "./src/assets/config/config.json", 1);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /**
       * Main Authentication Service for control user session
       */


      var AuthService = /*#__PURE__*/function () {
        /**
         * @ignore
         */
        function AuthService(_http, _router) {
          _classCallCheck(this, AuthService);

          this._http = _http;
          this._router = _router;
          this.alive = true;
          /**
           * Timer to finish session for current user
           */

          this.sessionTimeout = 900;
          this.currentUser$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this.isLoggedIn$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          /**
           * BehaviorSubject for check that user logged out by timeout
           */

          this.isLoggedOutByTimeout$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        }
        /**
         * Send post query with login and password for user log in
         */


        _createClass(AuthService, [{
          key: "login",
          value: function login(_login, password) {
            var token = btoa("".concat(_login, ":").concat(password));
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: "Basic ".concat(token)
            });
            return this.getUserInfo(headers);
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo(headers) {
            var _this3 = this;

            var obs = this._http.get("".concat(_assets_config_config_json__WEBPACK_IMPORTED_MODULE_3__["REST_API_URL"], "/user-info"), {
              headers: headers
            });

            return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_ref2) {
              var username = _ref2.username,
                  timeout = _ref2.timeout;

              _this3.currentUser$$.next(username);

              _this3.sessionTimeout = timeout;
            }));
          }
          /**
           * Logout
           */

        }, {
          key: "logout",
          value: function logout() {
            var _this4 = this;

            var onServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.alive = false; // set it back to true, because we need the active subscription on next call of resetTimeout()

            setTimeout(function () {
              return _this4.alive = true;
            });
            this.currentUser$$.next('');
            this.isLoggedIn$$.next(false);
            localStorage.removeItem('wf-current-user');

            this._router.navigate(['/login']);

            if (onServer) {
              this._http.get("".concat(_assets_config_config_json__WEBPACK_IMPORTED_MODULE_3__["REST_API_URL"], "/logout")).subscribe(function () {});
            }
          }
          /**
           * Reset timeout. On subscribe call Logout, hide all Modals and clear Store
           */

        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this5 = this;

            if (this.isLoggedIn$$.value) {
              this.isLoggedOutByTimeout$$.next(false);
              clearTimeout(this.sessionTimeoutInstance);
              this.sessionTimeoutInstance = setTimeout(function () {
                _this5.logout();

                _this5.isLoggedOutByTimeout$$.next(true);
              }, this.sessionTimeout * 1000 - 5000);
            } else {
              clearTimeout(this.sessionTimeoutInstance);
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/modules/auth/containers/auth-container/auth-container.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/core/modules/auth/containers/auth-container/auth-container.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: AuthContainerComponent */

    /***/
    function srcAppCoreModulesAuthContainersAuthContainerAuthContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthContainerComponent", function () {
        return AuthContainerComponent;
      });
      /* harmony import */


      var _shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/components/base/base.component */
      "./src/app/shared/components/base/base.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _assets_config_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../assets/config/config.json */
      "./src/assets/config/config.json");

      var _assets_config_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../../assets/config/config.json */
      "./src/assets/config/config.json", 1);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/modules/auth/auth.service */
      "./src/app/core/modules/auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/card */
      "./node_modules/primeng/fesm2015/primeng-card.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/ripple */
      "./node_modules/primeng/fesm2015/primeng-ripple.js");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/dropdown */
      "./node_modules/primeng/fesm2015/primeng-dropdown.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

      var AuthContainerComponent = /*#__PURE__*/function (_shared_components_ba2) {
        _inherits(AuthContainerComponent, _shared_components_ba2);

        var _super2 = _createSuper(AuthContainerComponent);

        function AuthContainerComponent(_appService, _authService, _fb, _router) {
          var _this6;

          _classCallCheck(this, AuthContainerComponent);

          _this6 = _super2.call(this);
          _this6._appService = _appService;
          _this6._authService = _authService;
          _this6._fb = _fb;
          _this6._router = _router;
          _this6.currentLanguage = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('en');
          _this6.isLoginError = false;
          _this6.languages = _assets_config_config_json__WEBPACK_IMPORTED_MODULE_3__["LANGUAGES"];
          _this6.loginForm = _this6._fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          return _this6;
        }

        _createClass(AuthContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.currentLanguage.setValue(this._appService.language.value);
            this.currentLanguage.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe$)).subscribe(function (language) {
              _this7._appService.language.next(language);

              localStorage.setItem('wf-current-language', language);
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this8 = this;

            if (this.loginForm.valid) {
              var form = this.loginForm.value;

              this._authService.login(form.username, form.password).subscribe(function (_ref3) {
                var username = _ref3.username,
                    timeout = _ref3.timeout;

                _this8._authService.isLoggedIn$$.next(true);

                localStorage.setItem('wf-current-user', username);

                _this8._router.navigate(['worklist']);
              });
            } else {
              this.isLoginError = false;
              setTimeout(function () {
                // this.messages = [{severity: 'error', detail: 'AUTH.REQUIRED_FIELDS'}];
                _this8.isLoginError = true;
              }, 10);
            }
          }
        }]);

        return AuthContainerComponent;
      }(_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);

      AuthContainerComponent.ɵfac = function AuthContainerComponent_Factory(t) {
        return new (t || AuthContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      AuthContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AuthContainerComponent,
        selectors: [["app-auth-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 37,
        vars: 27,
        consts: [[1, "hero", "fullheight", "login-body"], [1, "login-card"], ["styleClass", "login-card-content"], [1, "is-size-2", 2, "line-height", "2.5rem"], [2, "margin", "32px 0", "font-weight", "600"], [3, "formGroup"], [1, "field"], ["for", "username", 1, "label"], ["type", "text", "id", "username", "autocomplete", "username", "pInputText", "", 2, "width", "100%", 3, "placeholder", "formControl"], ["for", "password", 1, "label"], ["type", "password", "id", "password", "autocomplete", "current-password", "pInputText", "", 2, "width", "100%", 3, "placeholder", "formControl"], [1, "buttons", 2, "margin-top", "32px"], ["pButton", "", "pRipple", "", "type", "submit", 2, "width", "100%", 3, "label", "click"], ["styleClass", "slim-dropdown is-pulled-right", 3, "options", "formControl"], [1, "hero", "fullheight", "blobs"], [1, "blob", "blob-3"], ["viewBox", "0 0 200 200", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#BAE6FF", "fill-opacity", "0.9", "d", "M45.1,-62.6C58.2,-52.6,68.3,-39,73.9,-23.6C79.5,-8.2,80.6,9.2,75.8,24.9C71.1,40.6,60.6,54.8,47,66.2C33.4,77.7,16.7,86.5,0.6,85.8C-15.6,85,-31.1,74.6,-46.5,63.7C-61.8,52.8,-76.9,41.4,-81.3,26.7C-85.8,12,-79.6,-5.9,-73.4,-23.5C-67.2,-41.1,-61,-58.3,-48.8,-68.6C-36.6,-79,-18.3,-82.4,-1.1,-80.8C16,-79.2,32,-72.7,45.1,-62.6Z", "transform", "translate(100 100)"], [1, "blob", "blob-1"], ["fill", "#18A99E", "fill-opacity", "0.9", "d", "M49.4,-56.5C63.9,-46.7,75.5,-31,79.9,-13.1C84.3,4.9,81.4,25.1,68.7,32.5C55.9,39.8,33.2,34.3,15.7,38.9C-1.9,43.4,-14.2,58.1,-26.7,59.6C-39.3,61,-52,49.2,-55.6,35.7C-59.2,22.1,-53.6,6.8,-49,-6.8C-44.4,-20.4,-40.8,-32.3,-32.7,-43.2C-24.7,-54.1,-12.4,-64,2.5,-67C17.5,-70,34.9,-66.2,49.4,-56.5Z", "transform", "translate(100 100)"], [1, "blob", "blob-2"], ["fill", "#333695", "fill-opacity", "0.9", "d", "M36.6,-51.7C40.8,-40.1,33.1,-22.3,36.7,-5.9C40.3,10.5,55.2,25.5,53.6,33.6C52.1,41.7,34.1,42.9,17.9,48.5C1.7,54.2,-12.7,64.2,-27.7,64C-42.8,63.8,-58.5,53.3,-68.3,38.5C-78,23.6,-81.7,4.3,-79.9,-15.5C-78.1,-35.3,-70.8,-55.5,-56.6,-65.4C-42.4,-75.3,-21.2,-74.8,-2.5,-71.8C16.2,-68.8,32.4,-63.3,36.6,-51.7Z", "transform", "translate(100 100)"]],
        template: function AuthContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Workflow UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthContainerComponent_Template_button_click_22_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "p-dropdown", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 15, "LOGIN_FORM.GREETING_MESSAGE"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("shakeit", ctx.isLoginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 17, "LOGIN_FORM.USERNAME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 19, "LOGIN_FORM.USERNAME_PLACEHOLDER"))("formControl", ctx.loginForm.get("username"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("shakeit", ctx.isLoginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 21, "LOGIN_FORM.PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 23, "LOGIN_FORM.PASSWORD_PLACEHOLDER"))("formControl", ctx.loginForm.get("password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 25, "LOGIN_FORM.SIGN_IN"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.languages)("formControl", ctx.currentLanguage);
          }
        },
        directives: [primeng_card__WEBPACK_IMPORTED_MODULE_8__["Card"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_11__["Ripple"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
        styles: [".blobs[_ngcontent-%COMP%] {\n  background-color: #f0f2f5;\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n}\n\n.login-body[_ngcontent-%COMP%] {\n  background: transparent;\n  position: relative;\n  padding: 16px 0;\n  justify-content: center;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  align-self: center;\n  background: radial-gradient(circle at 50% 3%, #f3f4f9, #d7dbe8);\n  border-radius: 2px;\n  min-width: 380px;\n  opacity: 0.9;\n  z-index: 1;\n}\n\n@media screen and (min-width: 769px) {\n  .login-card[_ngcontent-%COMP%] {\n    align-self: auto;\n    margin-left: calc(10% + 90px);\n    width: 420px;\n  }\n}\n\n[_nghost-%COMP%]  .login-card-content .p-card-content {\n  padding: 4em 2.5em;\n}\n\n.blob[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vmax;\n  transform-origin: 50% 50%;\n}\n\n.blob-1[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  -webkit-animation: move 200s ease-in-out infinite;\n          animation: move 200s ease-in-out infinite;\n}\n\n.blob-2[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  -webkit-animation: move2 200s ease-in-out infinite;\n          animation: move2 200s ease-in-out infinite;\n}\n\n.blob-3[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  transform: scale(2);\n}\n\n@-webkit-keyframes move {\n  0% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n  38% {\n    transform: scale(0.8, 1) translate3d(80vw, 30vh, 0) rotate(160deg);\n  }\n  40% {\n    transform: scale(0.8, 1) translate3d(80vw, 30vh, 0) rotate(160deg);\n  }\n  78% {\n    transform: scale(1.3) translate3d(0vw, 50vh, 0) rotate(-20deg);\n  }\n  80% {\n    transform: scale(1.3) translate3d(0vw, 50vh, 0) rotate(-20deg);\n  }\n  100% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n}\n\n@keyframes move {\n  0% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n  38% {\n    transform: scale(0.8, 1) translate3d(80vw, 30vh, 0) rotate(160deg);\n  }\n  40% {\n    transform: scale(0.8, 1) translate3d(80vw, 30vh, 0) rotate(160deg);\n  }\n  78% {\n    transform: scale(1.3) translate3d(0vw, 50vh, 0) rotate(-20deg);\n  }\n  80% {\n    transform: scale(1.3) translate3d(0vw, 50vh, 0) rotate(-20deg);\n  }\n  100% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n}\n\n@-webkit-keyframes move2 {\n  0% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n  38% {\n    transform: scale(0.8, 1) translate3d(-80vw, 30vh, 0) rotate(160deg);\n  }\n  40% {\n    transform: scale(0.8, 1) translate3d(-80vw, 30vh, 0) rotate(160deg);\n  }\n  78% {\n    transform: scale(1.3) translate3d(0vw, -50vh, 0) rotate(-20deg);\n  }\n  80% {\n    transform: scale(1.3) translate3d(0vw, -50vh, 0) rotate(-20deg);\n  }\n  100% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n}\n\n@keyframes move2 {\n  0% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n  38% {\n    transform: scale(0.8, 1) translate3d(-80vw, 30vh, 0) rotate(160deg);\n  }\n  40% {\n    transform: scale(0.8, 1) translate3d(-80vw, 30vh, 0) rotate(160deg);\n  }\n  78% {\n    transform: scale(1.3) translate3d(0vw, -50vh, 0) rotate(-20deg);\n  }\n  80% {\n    transform: scale(1.3) translate3d(0vw, -50vh, 0) rotate(-20deg);\n  }\n  100% {\n    transform: scale(1) translate3d(10px, -30px, 0);\n  }\n}\n\n.shakeit[_ngcontent-%COMP%] {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n@-webkit-keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tb2R1bGVzL2F1dGgvY29udGFpbmVycy9hdXRoLWNvbnRhaW5lci9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsK0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUlBO0VBQ0U7SUFBTywrQ0FBQTtFQUFQO0VBQ0E7SUFBTyxrRUFBQTtFQUVQO0VBREE7SUFBTyxrRUFBQTtFQUlQO0VBSEE7SUFBTyw4REFBQTtFQU1QO0VBTEE7SUFBTyw4REFBQTtFQVFQO0VBUEE7SUFBTywrQ0FBQTtFQVVQO0FBQ0Y7O0FBakJBO0VBQ0U7SUFBTywrQ0FBQTtFQUFQO0VBQ0E7SUFBTyxrRUFBQTtFQUVQO0VBREE7SUFBTyxrRUFBQTtFQUlQO0VBSEE7SUFBTyw4REFBQTtFQU1QO0VBTEE7SUFBTyw4REFBQTtFQVFQO0VBUEE7SUFBTywrQ0FBQTtFQVVQO0FBQ0Y7O0FBUkE7RUFDRTtJQUFPLCtDQUFBO0VBV1A7RUFWQTtJQUFPLG1FQUFBO0VBYVA7RUFaQTtJQUFPLG1FQUFBO0VBZVA7RUFkQTtJQUFPLCtEQUFBO0VBaUJQO0VBaEJBO0lBQU8sK0RBQUE7RUFtQlA7RUFsQkE7SUFBTywrQ0FBQTtFQXFCUDtBQUNGOztBQTVCQTtFQUNFO0lBQU8sK0NBQUE7RUFXUDtFQVZBO0lBQU8sbUVBQUE7RUFhUDtFQVpBO0lBQU8sbUVBQUE7RUFlUDtFQWRBO0lBQU8sK0RBQUE7RUFpQlA7RUFoQkE7SUFBTywrREFBQTtFQW1CUDtFQWxCQTtJQUFPLCtDQUFBO0VBcUJQO0FBQ0Y7O0FBbkJBO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBcUJGOztBQWxCQTtFQUNFO0lBQ0Usa0NBQUE7RUFxQkY7RUFsQkE7SUFDRSxpQ0FBQTtFQW9CRjtFQWpCQTtJQUNFLGtDQUFBO0VBbUJGO0VBaEJBO0lBQ0UsaUNBQUE7RUFrQkY7QUFDRjs7QUFqQ0E7RUFDRTtJQUNFLGtDQUFBO0VBcUJGO0VBbEJBO0lBQ0UsaUNBQUE7RUFvQkY7RUFqQkE7SUFDRSxrQ0FBQTtFQW1CRjtFQWhCQTtJQUNFLGlDQUFBO0VBa0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL21vZHVsZXMvYXV0aC9jb250YWluZXJzL2F1dGgtY29udGFpbmVyL2F1dGgtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2JzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5sb2dpbi1ib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTZweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ2luLWNhcmQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDMlLCAjZjNmNGY5LCAjZDdkYmU4KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtaW4td2lkdGg6IDM4MHB4O1xuICBvcGFjaXR5OiAwLjk7XG4gIHotaW5kZXg6IDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5sb2dpbi1jYXJkIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwJSArIDkwcHgpO1xuICAgIHdpZHRoOiA0MjBweDtcbiAgfVxufVxuXG46aG9zdDo6bmctZGVlcCAubG9naW4tY2FyZC1jb250ZW50IC5wLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDRlbSAyLjVlbTtcbn1cblxuLmJsb2Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHZtYXg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG59XG5cbi5ibG9iLTEge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogbW92ZSAyMDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmxvYi0yIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYW5pbWF0aW9uOiBtb3ZlMiAyMDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmxvYi0zIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbn1cblxuXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAwJSAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxKSAgIHRyYW5zbGF0ZTNkKDEwcHgsIC0zMHB4LCAwKTsgfVxuICAzOCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDEpIHRyYW5zbGF0ZTNkKDgwdncsIDMwdmgsIDApIHJvdGF0ZSgxNjBkZWcpOyB9XG4gIDQwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMSkgdHJhbnNsYXRlM2QoODB2dywgMzB2aCwgMCkgcm90YXRlKDE2MGRlZyk7IH1cbiAgNzglICB7IHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGUzZCgwdncsIDUwdmgsIDApIHJvdGF0ZSgtMjBkZWcpOyB9XG4gIDgwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMykgdHJhbnNsYXRlM2QoMHZ3LCA1MHZoLCAwKSByb3RhdGUoLTIwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKSAgIHRyYW5zbGF0ZTNkKDEwcHgsIC0zMHB4LCAwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmUyIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogc2NhbGUoMSkgICB0cmFuc2xhdGUzZCgxMHB4LCAtMzBweCwgMCk7IH1cbiAgMzglICB7IHRyYW5zZm9ybTogc2NhbGUoMC44LCAxKSB0cmFuc2xhdGUzZCgtODB2dywgMzB2aCwgMCkgcm90YXRlKDE2MGRlZyk7IH1cbiAgNDAlICB7IHRyYW5zZm9ybTogc2NhbGUoMC44LCAxKSB0cmFuc2xhdGUzZCgtODB2dywgMzB2aCwgMCkgcm90YXRlKDE2MGRlZyk7IH1cbiAgNzglICB7IHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGUzZCgwdncsIC01MHZoLCAwKSByb3RhdGUoLTIwZGVnKTsgfVxuICA4MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZTNkKDB2dywgLTUwdmgsIDApIHJvdGF0ZSgtMjBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpICAgdHJhbnNsYXRlM2QoMTBweCwgLTMwcHgsIDApOyB9XG59XG5cbi5zaGFrZWl0IHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoLjM2LC4wNywuMTksLjk3KSBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-auth-container',
            templateUrl: './auth-container.component.html',
            styleUrls: ['./auth-container.component.scss']
          }]
        }], function () {
          return [{
            type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
          }, {
            type: _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/service.injector.ts":
    /*!******************************************!*\
      !*** ./src/app/core/service.injector.ts ***!
      \******************************************/

    /*! exports provided: ServiceInjector */

    /***/
    function srcAppCoreServiceInjectorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceInjector", function () {
        return ServiceInjector;
      });

      var ServiceInjector = /*#__PURE__*/function () {
        function ServiceInjector() {
          _classCallCheck(this, ServiceInjector);
        }

        _createClass(ServiceInjector, null, [{
          key: "injector",
          set: function set(injector) {
            this._injector = injector;
          },
          get: function get() {
            return this._injector;
          }
        }]);

        return ServiceInjector;
      }();
      /***/

    },

    /***/
    "./src/app/custom-interceptor.ts":
    /*!***************************************!*\
      !*** ./src/app/custom-interceptor.ts ***!
      \***************************************/

    /*! exports provided: CustomInterceptor */

    /***/
    function srcAppCustomInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function () {
        return CustomInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/modules/auth/auth.service */
      "./src/app/core/modules/auth/auth.service.ts");

      var CustomInterceptor = /*#__PURE__*/function () {
        function CustomInterceptor(_authService) {
          _classCallCheck(this, CustomInterceptor);

          this._authService = _authService;
        }

        _createClass(CustomInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this9 = this;

            request = request.clone({
              withCredentials: true
            });

            this._authService.resetTimeout();

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {}, function (err) {
              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                switch (err.status) {
                  case 401:
                  case 503:
                    _this9._authService.logout(false);

                }
              }
            }));
          }
        }]);

        return CustomInterceptor;
      }();

      CustomInterceptor.ɵfac = function CustomInterceptor_Factory(t) {
        return new (t || CustomInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      CustomInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CustomInterceptor,
        factory: CustomInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/base/base.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/shared/components/base/base.component.ts ***!
      \**********************************************************/

    /*! exports provided: BaseComponent */

    /***/
    function srcAppSharedComponentsBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return BaseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var BaseComponent = /*#__PURE__*/function () {
        function BaseComponent() {
          _classCallCheck(this, BaseComponent);

          this.ngUnsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(BaseComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngUnsubscribe$.next();
            this.ngUnsubscribe$.complete();
          }
        }]);

        return BaseComponent;
      }();

      BaseComponent.ɵfac = function BaseComponent_Factory(t) {
        return new (t || BaseComponent)();
      };

      BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BaseComponent,
        selectors: [["app-base"]],
        decls: 1,
        vars: 0,
        template: function BaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "no template");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-base',
            template: 'no template'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/footer/footer.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../package.json */
      "./package.json");

      var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../package.json */
      "./package.json", 1);

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.version = _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 14,
        vars: 1,
        consts: [[1, "footer"], [1, "content", "has-text-centered"], ["href", "http://opensource.org/licenses/mit-license.php"], [1, "tags", "has-addons", 2, "margin-left", "8px", "display", "inline-flex", "vertical-align", "bottom"], [1, "tag", "is-info", "is-light"], [1, "tag", "is-info"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Workflow UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " by Sergei Sarkisian. The source code is licensed under ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.version);
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #4a4a4a;\n  color: #f0f2f5;\n  display: block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f0f2f5;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 20px;\n}\n\n@media screen and (min-width: 769px) {\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgY29sb3I6ICNmMGYyZjU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyIHN0cm9uZyB7XG4gIGNvbG9yOiAjZjBmMmY1O1xufVxuXG4uZm9vdGVyIHAge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuZm9vdGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/modal-base/modal-base.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/modal-base/modal-base.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ModalBaseComponent */

    /***/
    function srcAppSharedComponentsModalBaseModalBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBaseComponent", function () {
        return ModalBaseComponent;
      });
      /* harmony import */


      var _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/modules/auth/auth.service */
      "./src/app/core/modules/auth/auth.service.ts");
      /* harmony import */


      var _shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/components/base/base.component */
      "./src/app/shared/components/base/base.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _core_service_injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/service.injector */
      "./src/app/core/service.injector.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");

      var ModalBaseComponent = /*#__PURE__*/function (_shared_components_ba3) {
        _inherits(ModalBaseComponent, _shared_components_ba3);

        var _super3 = _createSuper(ModalBaseComponent);

        /** @ignore */
        function ModalBaseComponent(_config, _ref) {
          var _this10;

          _classCallCheck(this, ModalBaseComponent);

          _this10 = _super3.call(this);
          _this10._config = _config;
          _this10._ref = _ref;
          _this10._authService = _core_service_injector__WEBPACK_IMPORTED_MODULE_4__["ServiceInjector"].injector.get(_core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]);
          _this10._fb = _core_service_injector__WEBPACK_IMPORTED_MODULE_4__["ServiceInjector"].injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]);

          _this10._authService.isLoggedIn$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this10.ngUnsubscribe$)).subscribe(function (isLoggedIn) {
            if (!isLoggedIn) {
              _this10._ref.close();
            }
          });

          return _this10;
        }

        return ModalBaseComponent;
      }(_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      ModalBaseComponent.ɵfac = function ModalBaseComponent_Factory(t) {
        return new (t || ModalBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"]));
      };

      ModalBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ModalBaseComponent,
        selectors: [["app-modal-base"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        template: function ModalBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "no template");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ModalBaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-modal-base',
            template: 'no template'
          }]
        }], function () {
          return [{
            type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogConfig"]
          }, {
            type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/navbar/navbar.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function srcAppSharedComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/modules/auth/auth.service */
      "./src/app/core/modules/auth/auth.service.ts");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/ripple */
      "./node_modules/primeng/fesm2015/primeng-ripple.js");
      /* harmony import */


      var _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/directives/throttle-click.directive */
      "./src/app/shared/directives/throttle-click.directive.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(_auth) {
          _classCallCheck(this, NavbarComponent);

          this._auth = _auth;
          this.user = '';
          this.isNavMenuActive = false;
        }

        _createClass(NavbarComponent, [{
          key: "toggleMenu",
          value: function toggleMenu() {
            this.isNavMenuActive = !this.isNavMenuActive;
          }
        }, {
          key: "logout",
          value: function logout() {
            this._auth.logout();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        inputs: {
          user: "user"
        },
        decls: 16,
        vars: 10,
        consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-dark"], [1, "container", "is-fluid"], [1, "navbar-brand", 2, "width", "100%", "margin-left", "0"], [1, "navbar-item"], [1, "has-text-weight-bold"], [1, "navbar-end", 2, "margin-left", "auto"], [1, "navbar-item", 2, "display", "inline-flex"], [1, "tag", "is-info", 2, "font-size", "13px", 3, "title"], [1, "pi", "pi-user", 2, "font-size", "13px", "font-weight", "bold", "vertical-align", "middle", "margin-right", "6px"], [1, "navbar-item", 2, "display", "inline-flex", "padding-right", "0"], ["pButton", "", "pRipple", "", "icon", "pi pi-sign-out", "iconPos", "right", 1, "p-button-primary", "p-button-outlined", "no-label-mobile", 3, "label", "title", "throttleClick"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Workflow UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("throttleClick", function NavbarComponent_Template_button_throttleClick_13_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "NAVBAR.CURRENT_USER"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, "NAVBAR.SIGN_OUT") || "Sign out")("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "NAVBAR.SIGN_OUT"));
          }
        },
        directives: [primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_3__["Ripple"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_4__["ThrottleClickDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  z-index: 104;\n}\n\n.navbar-brand[_ngcontent-%COMP%]    > .navbar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media screen and (min-width: 769px) {\n  .navbar-brand[_ngcontent-%COMP%]    > .navbar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIHotaW5kZXg6IDEwNDtcbn1cblxuLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW0gc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: _core_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, {
          user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/click-outside.directive.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/click-outside.directive.ts ***!
      \**************************************************************/

    /*! exports provided: ClickOutsideDirective */

    /***/
    function srcAppSharedDirectivesClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
        return ClickOutsideDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      var ClickOutsideDirective = /*#__PURE__*/function () {
        function ClickOutsideDirective(_el, _ngZone, platformId) {
          _classCallCheck(this, ClickOutsideDirective);

          this._el = _el;
          this._ngZone = _ngZone;
          this.platformId = platformId;
          this.clickOutsideEnabled = true;
          this.attachOutsideOnClick = false;
          this.delayClickOutsideInit = false;
          this.emitOnBlur = false;
          this.exclude = '';
          this.excludeBeforeClick = false;
          this.clickOutsideEvents = '';
          this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._nodesExcluded = [];
          this._events = ['click'];
          this._initOnClickBody = this._initOnClickBody.bind(this);
          this._onClickBody = this._onClickBody.bind(this);
          this._onWindowBlur = this._onWindowBlur.bind(this);
        }

        _createClass(ClickOutsideDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              return;
            }

            this._init();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              return;
            }

            this._removeClickOutsideListener();

            this._removeAttachOutsideOnClickListener();

            this._removeWindowBlurListener();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              return;
            }

            if (changes.attachOutsideOnClick || changes.exclude || changes.emitOnBlur) {
              this._init();
            }
          }
        }, {
          key: "_init",
          value: function _init() {
            if (this.clickOutsideEvents !== '') {
              this._events = this.clickOutsideEvents.split(',').map(function (e) {
                return e.trim();
              });
            }

            this._excludeCheck();

            if (this.attachOutsideOnClick) {
              this._initAttachOutsideOnClickListener();
            } else {
              this._initOnClickBody();
            }

            if (this.emitOnBlur) {
              this._initWindowBlurListener();
            }
          }
        }, {
          key: "_initOnClickBody",
          value: function _initOnClickBody() {
            if (this.delayClickOutsideInit) {
              setTimeout(this._initClickOutsideListener.bind(this));
            } else {
              this._initClickOutsideListener();
            }
          }
        }, {
          key: "_excludeCheck",
          value: function _excludeCheck() {
            if (this.exclude) {
              try {
                var nodes = Array.from(document.querySelectorAll(this.exclude));

                if (nodes) {
                  this._nodesExcluded = nodes;
                }
              } catch (err) {
                console.error('[ng-click-outside] Check your exclude selector syntax.', err);
              }
            }
          }
        }, {
          key: "_onClickBody",
          value: function _onClickBody(ev) {
            if (!this.clickOutsideEnabled) {
              return;
            }

            if (this.excludeBeforeClick) {
              this._excludeCheck();
            }

            if (!this._el.nativeElement.contains(ev.target) && !this._shouldExclude(ev.target)) {
              this._emit(ev);

              if (this.attachOutsideOnClick) {
                this._removeClickOutsideListener();
              }
            }
          }
          /**
           * Resolves problem with outside click on iframe
           * @see https://github.com/arkon/ng-click-outside/issues/32
           */

        }, {
          key: "_onWindowBlur",
          value: function _onWindowBlur(ev) {
            var _this11 = this;

            setTimeout(function () {
              if (!document.hidden) {
                _this11._emit(ev);
              }
            });
          }
        }, {
          key: "_emit",
          value: function _emit(ev) {
            var _this12 = this;

            if (!this.clickOutsideEnabled) {
              return;
            }

            this._ngZone.run(function () {
              return _this12.clickOutside.emit(ev);
            });
          }
        }, {
          key: "_shouldExclude",
          value: function _shouldExclude(target) {
            var _iterator = _createForOfIteratorHelper(this._nodesExcluded),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var excludedNode = _step.value;

                if (excludedNode.contains(target)) {
                  return true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return false;
          }
        }, {
          key: "_initClickOutsideListener",
          value: function _initClickOutsideListener() {
            var _this13 = this;

            this._ngZone.runOutsideAngular(function () {
              _this13._events.forEach(function (e) {
                return document.addEventListener(e, _this13._onClickBody);
              });
            });
          }
        }, {
          key: "_removeClickOutsideListener",
          value: function _removeClickOutsideListener() {
            var _this14 = this;

            this._ngZone.runOutsideAngular(function () {
              _this14._events.forEach(function (e) {
                return document.removeEventListener(e, _this14._onClickBody);
              });
            });
          }
        }, {
          key: "_initAttachOutsideOnClickListener",
          value: function _initAttachOutsideOnClickListener() {
            var _this15 = this;

            this._ngZone.runOutsideAngular(function () {
              _this15._events.forEach(function (e) {
                return _this15._el.nativeElement.addEventListener(e, _this15._initOnClickBody);
              });
            });
          }
        }, {
          key: "_removeAttachOutsideOnClickListener",
          value: function _removeAttachOutsideOnClickListener() {
            var _this16 = this;

            this._ngZone.runOutsideAngular(function () {
              _this16._events.forEach(function (e) {
                return _this16._el.nativeElement.removeEventListener(e, _this16._initOnClickBody);
              });
            });
          }
        }, {
          key: "_initWindowBlurListener",
          value: function _initWindowBlurListener() {
            var _this17 = this;

            this._ngZone.runOutsideAngular(function () {
              window.addEventListener('blur', _this17._onWindowBlur);
            });
          }
        }, {
          key: "_removeWindowBlurListener",
          value: function _removeWindowBlurListener() {
            var _this18 = this;

            this._ngZone.runOutsideAngular(function () {
              window.removeEventListener('blur', _this18._onWindowBlur);
            });
          }
        }]);

        return ClickOutsideDirective;
      }();

      ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
        return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClickOutsideDirective,
        selectors: [["", "clickOutside", ""]],
        inputs: {
          clickOutsideEnabled: "clickOutsideEnabled",
          attachOutsideOnClick: "attachOutsideOnClick",
          delayClickOutsideInit: "delayClickOutsideInit",
          emitOnBlur: "emitOnBlur",
          exclude: "exclude",
          excludeBeforeClick: "excludeBeforeClick",
          clickOutsideEvents: "clickOutsideEvents"
        },
        outputs: {
          clickOutside: "clickOutside"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      ClickOutsideDirective.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ClickOutsideDirective,
        factory: ClickOutsideDirective.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[clickOutside]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["PlatformRef"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, {
          clickOutsideEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          attachOutsideOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          delayClickOutsideInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          emitOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          exclude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          excludeBeforeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickOutsideEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/debounce-click.directive.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/debounce-click.directive.ts ***!
      \***************************************************************/

    /*! exports provided: DebounceClickDirective */

    /***/
    function srcAppSharedDirectivesDebounceClickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DebounceClickDirective", function () {
        return DebounceClickDirective;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var DebounceClickDirective = /*#__PURE__*/function () {
        function DebounceClickDirective() {
          var _this19 = this;

          _classCallCheck(this, DebounceClickDirective);

          this.debounceTime = 500;
          this.debounceClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.subscription = this.clicks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(this.debounceTime)).subscribe(function (e) {
            return _this19.debounceClick.emit(e);
          });
        }

        _createClass(DebounceClickDirective, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "clickEvent",
          value: function clickEvent(event) {
            event.preventDefault();
            event.stopPropagation();
            this.clicks.next(event);
          }
        }]);

        return DebounceClickDirective;
      }();

      DebounceClickDirective.ɵfac = function DebounceClickDirective_Factory(t) {
        return new (t || DebounceClickDirective)();
      };

      DebounceClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DebounceClickDirective,
        selectors: [["", "debounceClick", ""]],
        hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DebounceClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          debounceTime: "debounceTime"
        },
        outputs: {
          debounceClick: "debounceClick"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DebounceClickDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[debounceClick]'
          }]
        }], function () {
          return [];
        }, {
          debounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          debounceClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/handle-link.directive.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/directives/handle-link.directive.ts ***!
      \************************************************************/

    /*! exports provided: HandleLinkDirective */

    /***/
    function srcAppSharedDirectivesHandleLinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HandleLinkDirective", function () {
        return HandleLinkDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var HandleLinkDirective = /*#__PURE__*/function () {
        function HandleLinkDirective() {
          _classCallCheck(this, HandleLinkDirective);

          this.relAttr = '';
          this.targetAttr = '';
          this.hrefAttr = '';
          this.href = '';
        }

        _createClass(HandleLinkDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.hrefAttr = this.href;

            if (this.isLinkAbsolute()) {
              this.relAttr = 'noopener noreferrer';
              this.targetAttr = '_blank';
            }
          }
        }, {
          key: "isLinkAbsolute",
          value: function isLinkAbsolute() {
            return this.href.includes('://');
          }
        }]);

        return HandleLinkDirective;
      }();

      HandleLinkDirective.ɵfac = function HandleLinkDirective_Factory(t) {
        return new (t || HandleLinkDirective)();
      };

      HandleLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HandleLinkDirective,
        selectors: [["", "handleLink", ""]],
        hostVars: 3,
        hostBindings: function HandleLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rel", ctx.relAttr)("target", ctx.targetAttr)("href", ctx.hrefAttr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrlOrResourceUrl"]);
          }
        },
        inputs: {
          href: "href"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandleLinkDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[handleLink]'
          }]
        }], null, {
          relAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.rel']
          }],
          targetAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.target']
          }],
          hrefAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.href']
          }],
          href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/throttle-click.directive.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/throttle-click.directive.ts ***!
      \***************************************************************/

    /*! exports provided: ThrottleClickDirective */

    /***/
    function srcAppSharedDirectivesThrottleClickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThrottleClickDirective", function () {
        return ThrottleClickDirective;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ThrottleClickDirective = /*#__PURE__*/function () {
        function ThrottleClickDirective() {
          var _this20 = this;

          _classCallCheck(this, ThrottleClickDirective);

          this.throttleTime = 500;
          this.throttleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.subscription = this.clicks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["throttleTime"])(this.throttleTime)).subscribe(function (e) {
            return _this20.throttleClick.emit(e);
          });
        }

        _createClass(ThrottleClickDirective, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "clickEvent",
          value: function clickEvent(event) {
            event.preventDefault();
            event.stopPropagation();
            this.clicks.next(event);
          }
        }]);

        return ThrottleClickDirective;
      }();

      ThrottleClickDirective.ɵfac = function ThrottleClickDirective_Factory(t) {
        return new (t || ThrottleClickDirective)();
      };

      ThrottleClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ThrottleClickDirective,
        selectors: [["", "throttleClick", ""]],
        hostBindings: function ThrottleClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThrottleClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          throttleTime: "throttleTime"
        },
        outputs: {
          throttleClick: "throttleClick"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThrottleClickDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[throttleClick]'
          }]
        }], function () {
          return [];
        }, {
          throttleTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          throttleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/modules/shared.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/shared/modules/shared.module.ts ***!
      \*************************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedModulesSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/base/base.component */
      "./src/app/shared/components/base/base.component.ts");
      /* harmony import */


      var _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/directives/click-outside.directive */
      "./src/app/shared/directives/click-outside.directive.ts");
      /* harmony import */


      var _shared_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/directives/debounce-click.directive */
      "./src/app/shared/directives/debounce-click.directive.ts");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/footer/footer.component */
      "./src/app/shared/components/footer/footer.component.ts");
      /* harmony import */


      var _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/pipes/get.pipe */
      "./src/app/shared/pipes/get.pipe.ts");
      /* harmony import */


      var _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/directives/handle-link.directive */
      "./src/app/shared/directives/handle-link.directive.ts");
      /* harmony import */


      var _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared/components/modal-base/modal-base.component */
      "./src/app/shared/components/modal-base/modal-base.component.ts");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/navbar/navbar.component */
      "./src/app/shared/components/navbar/navbar.component.ts");
      /* harmony import */


      var _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared/directives/throttle-click.directive */
      "./src/app/shared/directives/throttle-click.directive.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @shared/modules/vendor.module */
      "./src/app/shared/modules/vendor.module.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__["VendorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_5__["GetPipe"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_7__["ModalBaseComponent"], // directives
          _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"], _shared_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_3__["DebounceClickDirective"], _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_6__["HandleLinkDirective"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_9__["ThrottleClickDirective"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__["VendorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]],
          exports: [_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_5__["GetPipe"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_7__["ModalBaseComponent"], // directives
          _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"], _shared_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_3__["DebounceClickDirective"], _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_6__["HandleLinkDirective"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_9__["ThrottleClickDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_5__["GetPipe"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_7__["ModalBaseComponent"], // directives
            _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"], _shared_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_3__["DebounceClickDirective"], _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_6__["HandleLinkDirective"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_9__["ThrottleClickDirective"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_12__["VendorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]],
            exports: [_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_5__["GetPipe"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_7__["ModalBaseComponent"], // directives
            _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"], _shared_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_3__["DebounceClickDirective"], _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_6__["HandleLinkDirective"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_9__["ThrottleClickDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/modules/vendor.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/shared/modules/vendor.module.ts ***!
      \*************************************************/

    /*! exports provided: VendorModule */

    /***/
    function srcAppSharedModulesVendorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorModule", function () {
        return VendorModule;
      });
      /* harmony import */


      var primeng_blockui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! primeng/blockui */
      "./node_modules/primeng/fesm2015/primeng-blockui.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/card */
      "./node_modules/primeng/fesm2015/primeng-card.js");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/dropdown */
      "./node_modules/primeng/fesm2015/primeng-dropdown.js");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/panel */
      "./node_modules/primeng/fesm2015/primeng-panel.js");
      /* harmony import */


      var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/progressspinner */
      "./node_modules/primeng/fesm2015/primeng-progressspinner.js");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/ripple */
      "./node_modules/primeng/fesm2015/primeng-ripple.js");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/table */
      "./node_modules/primeng/fesm2015/primeng-table.js");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/toast */
      "./node_modules/primeng/fesm2015/primeng-toast.js");

      var VendorModule = function VendorModule() {
        _classCallCheck(this, VendorModule);
      };

      VendorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: VendorModule
      });
      VendorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function VendorModule_Factory(t) {
          return new (t || VendorModule)();
        },
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        imports: [[primeng_blockui__WEBPACK_IMPORTED_MODULE_0__["BlockUIModule"], primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["RippleModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"]], primeng_blockui__WEBPACK_IMPORTED_MODULE_0__["BlockUIModule"], primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["RippleModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](VendorModule, {
          imports: [primeng_blockui__WEBPACK_IMPORTED_MODULE_0__["BlockUIModule"], primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["RippleModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"]],
          exports: [primeng_blockui__WEBPACK_IMPORTED_MODULE_0__["BlockUIModule"], primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["RippleModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](VendorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
          args: [{
            imports: [primeng_blockui__WEBPACK_IMPORTED_MODULE_0__["BlockUIModule"], primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["RippleModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"]],
            exports: [primeng_blockui__WEBPACK_IMPORTED_MODULE_0__["BlockUIModule"], primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["RippleModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/pipes/get.pipe.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/pipes/get.pipe.ts ***!
      \******************************************/

    /*! exports provided: GetPipe */

    /***/
    function srcAppSharedPipesGetPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPipe", function () {
        return GetPipe;
      });
      /* harmony import */


      var lodash_es_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash-es/get */
      "./node_modules/lodash-es/get.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var GetPipe = /*#__PURE__*/function () {
        function GetPipe() {
          _classCallCheck(this, GetPipe);
        }

        _createClass(GetPipe, [{
          key: "transform",
          value: function transform(object, route) {
            return Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_0__["default"])(object, route);
          }
        }]);

        return GetPipe;
      }();

      GetPipe.ɵfac = function GetPipe_Factory(t) {
        return new (t || GetPipe)();
      };

      GetPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "get",
        type: GetPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
          args: [{
            name: 'get'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/coalescing-component-factory-resolver.service.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/services/coalescing-component-factory-resolver.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: CoalescingComponentFactoryResolver */

    /***/
    function srcAppSharedServicesCoalescingComponentFactoryResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoalescingComponentFactoryResolver", function () {
        return CoalescingComponentFactoryResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var CoalescingComponentFactoryResolver = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(CoalescingComponentFactoryResolver, _angular_core__WEBPAC);

        var _super4 = _createSuper(CoalescingComponentFactoryResolver);

        function CoalescingComponentFactoryResolver(rootResolver) {
          var _this21;

          _classCallCheck(this, CoalescingComponentFactoryResolver);

          _this21 = _super4.call(this);
          _this21.rootResolver = rootResolver;
          _this21.inCall = false;
          _this21.resolvers = new Map();

          _this21.resolveComponentFactory = function (component) {
            // Prevents cyclic calls.
            if (_this21.inCall) {
              // @ts-ignore
              return null;
            }

            _this21.inCall = true;

            try {
              return _this21.resolveInternal(component);
            } finally {
              _this21.inCall = false;
            }
          };

          _this21.resolveInternal = function (component) {
            for (var _i = 0, _Array$from = Array.from(_this21.resolvers.entries()); _i < _Array$from.length; _i++) {
              var _Array$from$_i = _slicedToArray(_Array$from[_i], 2),
                  resolver = _Array$from$_i[0],
                  fn = _Array$from$_i[1];

              try {
                var factory = fn.call(resolver, component);

                if (factory) {
                  return factory;
                }
              } catch (_a) {}
            }

            return _this21.rootResolve.call(_this21.rootResolver, component);
          };

          return _this21;
        }

        _createClass(CoalescingComponentFactoryResolver, [{
          key: "init",
          value: function init() {
            this.rootResolve = this.rootResolver.resolveComponentFactory;
            this.rootResolver.resolveComponentFactory = this.resolveComponentFactory;
          }
        }, {
          key: "registerResolver",
          value: function registerResolver(resolver) {
            var original = resolver.resolveComponentFactory;
            this.resolvers.set(resolver, original);
          }
        }]);

        return CoalescingComponentFactoryResolver;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]);

      CoalescingComponentFactoryResolver.ɵfac = function CoalescingComponentFactoryResolver_Factory(t) {
        return new (t || CoalescingComponentFactoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
      };

      CoalescingComponentFactoryResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CoalescingComponentFactoryResolver,
        factory: CoalescingComponentFactoryResolver.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoalescingComponentFactoryResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/assets/config/config.json":
    /*!***************************************!*\
      !*** ./src/assets/config/config.json ***!
      \***************************************/

    /*! exports provided: LANGUAGES, REST_API_URL, default */

    /***/
    function srcAssetsConfigConfigJson(module) {
      module.exports = JSON.parse("{\"LANGUAGES\":[{\"label\":\"🇬🇧 English\",\"value\":\"en\"},{\"label\":\"🇷🇺 Русский\",\"value\":\"ru\"}],\"REST_API_URL\":\"/workflow/rest\"}");
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
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
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
      /*! /Users/admin/Documents/Github/workflowUI-ngx/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map