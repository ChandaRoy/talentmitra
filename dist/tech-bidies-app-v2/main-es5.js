function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/_components/alert/alert.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/_components/alert/alert.component.ts ***!
    \******************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcApp_componentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../login/alert.service */
    "./src/app/login/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlertComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.message.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.text);
      }
    }

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.alertService.getAlert().subscribe(function (message) {
            switch (message && message.type) {
              case 'success':
                message.cssClass = 'alert alert-success';
                break;

              case 'error':
                message.cssClass = 'alert alert-danger';
                break;
            }

            _this.message = message;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["alert"]],
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.css']
        }]
      }], function () {
        return [{
          type: _login_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/auth.guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/_helpers/auth.guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcApp_helpersAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router, authenticationService, http) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.authenticationService = authenticationService;
        this.http = http; // public url ="https://talentmitra-o5ryx.ondigitalocean.app";

        this.url = '';
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log("came to canActivate"); // this.isAuthenticated();

          var currentUser = this.authenticationService.currentUser;

          if (currentUser) {
            // authorised so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.http.post("".concat(this.url, "/user/getUserDetails"), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(user);
            return user;
          }));
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this2 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this2.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/jwt.interceptor.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.service.ts ***!
    \*****************************************************/

  /*! exports provided: JwtInterceptorService */

  /***/
  function srcApp_helpersJwtInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function () {
      return JwtInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");

    var JwtInterceptorService = /*#__PURE__*/function () {
      function JwtInterceptorService(authenticationService) {
        _classCallCheck(this, JwtInterceptorService);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptorService;
    }();

    JwtInterceptorService.ɵfac = function JwtInterceptorService_Factory(t) {
      return new (t || JwtInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]));
    };

    JwtInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptorService,
      factory: JwtInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_pipes/truncare-text.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/_pipes/truncare-text.pipe.ts ***!
    \**********************************************/

  /*! exports provided: TruncateTextPipe */

  /***/
  function srcApp_pipesTruncareTextPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncateTextPipe", function () {
      return TruncateTextPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncateTextPipe = /*#__PURE__*/function () {
      function TruncateTextPipe() {
        _classCallCheck(this, TruncateTextPipe);
      }

      _createClass(TruncateTextPipe, [{
        key: "transform",
        value: function transform(value, limit) {
          var trail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '…';
          var result = value || '';

          if (value) {
            var words = value.split(/\s+/);

            if (words.length > Math.abs(limit)) {
              if (limit < 0) {
                limit *= -1;
                result = trail + words.slice(words.length - limit, words.length).join(' ');
              } else {
                result = words.slice(0, limit).join(' ') + trail;
              }
            }
          }

          return result;
        }
      }]);

      return TruncateTextPipe;
    }();

    TruncateTextPipe.ɵfac = function TruncateTextPipe_Factory(t) {
      return new (t || TruncateTextPipe)();
    };

    TruncateTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncateText",
      type: TruncateTextPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncateText'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/post-query.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/_services/post-query.service.ts ***!
    \*************************************************/

  /*! exports provided: PostQueryService */

  /***/
  function srcApp_servicesPostQueryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostQueryService", function () {
      return PostQueryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PostQueryService = /*#__PURE__*/function () {
      function PostQueryService(http) {
        _classCallCheck(this, PostQueryService);

        this.http = http; // public url ="https://talentmitra-o5ryx.ondigitalocean.app";
        // baseURL = "http://localhost:8083/api";

        this.url = 'http://localhost:8080';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(PostQueryService, [{
        key: "postQuery",
        value: function postQuery(query) {
          return this.http.post("".concat(this.url, "/query"), query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        } // Forum methods

      }, {
        key: "addTopic",
        value: function addTopic(data, token) {
          return this.http.post("".concat(this.url, "/content/addTopic?secret_token=") + token, data, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addComment",
        value: function addComment(data, token) {
          return this.http.post("".concat(this.url, "/content/topicComment?secret_token=") + token, data, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addTopicsCommentReply",
        value: function addTopicsCommentReply(data, token) {
          console.log(data);
          return this.http.post("".concat(this.url, "/content/topicCommentReply?secret_token=") + token, data, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "getTopics",
        value: function getTopics(category, token) {
          if (category) {
            return this.http.get(this.url + '/content/category-topics/' + category + '?secret_token=' + token);
          }

          return this.http.get(this.url + '/content/allTopics?secret_token=' + token);
        }
      }, {
        key: "getTopicById",
        value: function getTopicById(id, token) {
          console.log(this.url + '/content/topic/' + id);
          return this.http.get(this.url + '/content/topic/' + id + '?secret_token=' + token);
        }
      }, {
        key: "getTopicGroups",
        value: function getTopicGroups(token) {
          return this.http.get(this.url + '/content/topic-groups?secret_token=' + token);
        }
      }, {
        key: "getMyTopicThreads",
        value: function getMyTopicThreads(token) {
          return this.http.get(this.url + '/content/my-topic-threads?secret_token=' + token);
        } // Forum methods end
        // Blog methods

      }, {
        key: "addPost",
        value: function addPost(content, category, postFile, description, token) {
          var formData = new FormData();
          formData.append("content", content);
          formData.append("category", category);
          formData.append("myFile", postFile);
          formData.append("shortDescription", description);
          return this.http.post("".concat(this.url, "/content/addPost?secret_token=") + token, formData, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addPostsComment",
        value: function addPostsComment(data, token) {
          console.log(data);
          return this.http.post("".concat(this.url, "/content/postComment?secret_token=") + token, data, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addPostsCommentReply",
        value: function addPostsCommentReply(data, token) {
          console.log(data);
          return this.http.post("".concat(this.url, "/content/postCommentReply?secret_token=") + token, data, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "getMyPostThreads",
        value: function getMyPostThreads(token) {
          return this.http.get(this.url + '/content/my-post-threads?secret_token=' + token);
        }
      }, {
        key: "getPostGroups",
        value: function getPostGroups(token) {
          return this.http.get(this.url + '/content/post-groups?secret_token=' + token);
        }
      }, {
        key: "getRecentPosts",
        value: function getRecentPosts(token) {
          return this.http.get(this.url + '/content/recent-posts?secret_token=' + token);
        }
      }, {
        key: "getPostById",
        value: function getPostById(id, token) {
          console.log(this.url + '/content/post/' + id);
          return this.http.get(this.url + '/content/post/' + id + '?secret_token=' + token);
        }
      }, {
        key: "getPosts",
        value: function getPosts(category, token) {
          if (category) {
            return this.http.get(this.url + '/content/category-posts/' + category + '?secret_token=' + token);
          }

          return this.http.get(this.url + '/content/posts?secret_token=' + token);
        }
      }, {
        key: "getCategoryPosts",
        value: function getCategoryPosts(token) {
          return this.http.get(this.url + '/content/category-posts?secret_token=' + token);
        }
      }, {
        key: "getCategories",
        value: function getCategories(token) {
          return this.http.get(this.url + '/content/categories?secret_token=' + token);
        } // Blog methods end
        // Error handling 

      }, {
        key: "errorMgmt",
        value: function errorMgmt(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }, {
        key: "like",
        value: function like() {
          return this.http.get(this.url + '/content/like');
        }
      }]);

      return PostQueryService;
    }();

    PostQueryService.ɵfac = function PostQueryService_Factory(t) {
      return new (t || PostQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PostQueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostQueryService,
      factory: PostQueryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostQueryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http; // public url ="https://talentmitra-o5ryx.ondigitalocean.app";

        this.url = '';
      }

      _createClass(UserService, [{
        key: "updateProfile",
        value: function updateProfile(data, token) {
          console.log(data);
          var formData = new FormData();
          formData.append("firstName", data.firstName);
          formData.append("lastName", data.lastName);
          formData.append("email", data.email);
          formData.append("company", data.company);
          formData.append("aboutMe", data.aboutMe);
          formData.append("myFile", data.myFile);
          formData.append("password", data.password);
          return this.http.post("".concat(this.url, "/user/updateUser?secret_token=") + token, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(token) {
          return this.http.get(this.url + '/user/details?secret_token=' + token);
        }
      }, {
        key: "gerUserProfile",
        value: function gerUserProfile(id, token) {
          return this.http.get(this.url + '/user/profile/' + id + '?secret_token=' + token);
        } // Error handling 

      }, {
        key: "errorMgmt",
        value: function errorMgmt(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 71,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-9"], ["id", "myTabContentMD", 1, "tab-content"], ["id", "aboutUs-md", "role", "tabpanel", "aria-labelledby", "aboutUs-tab-md", 1, "tab-pane", "active"], [1, "card-title"], [1, "card"], [1, "card-body"], [1, "card-text"], [1, "card-link"], ["id", "bihar-md", "role", "tabpanel", "aria-labelledby", "bihar-tab-md", 1, "tab-pane", "fade"], ["id", "advisory-md", "role", "tabpanel", "aria-labelledby", "advisory-tab-md", 1, "tab-pane", "fade"], [1, "col-sm-5"], [1, "view", "overlay"], ["src", "https://mdbootstrap.com/img/Photos/Others/photo6.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "#!"], [1, "mask", "rgba-white-slight"], ["href", "#", 1, "btn", "btn-primary"], [1, "col-sm-2"], ["src", "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-sm-3"], ["role", "tablist", 1, "list-group", "nav", "list-group-flush", "rgba-grey-dark"], [1, "list-group-item", "nav-item"], ["id", "aboutUs-tab-md", "data-toggle", "tab", "href", "#aboutUs-md", "role", "tab", "aria-controls", "aboutUs-md", "aria-selected", "true", 1, "nav-link", "active"], [1, "list-group-item"], ["id", "advisory-tab-md", "data-toggle", "tab", "href", "#advisory-md", "role", "tab", "aria-controls", "advisory-md", "aria-selected", "true", 1, "nav-link"], ["id", "bihar-tab-md", "data-toggle", "tab", "href", "#bihar-md", "role", "tab", "aria-controls", "bihar-md", "aria-selected", "true", 1, "nav-link"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Some quick example text to build on the panel title and make up the bulk of the panel's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Card link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Another link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Bihar Society");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Some quick example text to build on the panel title and make up the bulk of the panel's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Card link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Another link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Card title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Card title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "About Bihar Society");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".nav-link.active[_ngcontent-%COMP%]  {\ncolor:black;\nbackground: #eee;\n}\na[_ngcontent-%COMP%]{\n    color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsuYWN0aXZlICB7XG5jb2xvcjpibGFjaztcbmJhY2tncm91bmQ6ICNlZWU7XG59XG5he1xuICAgIGNvbG9yOmJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_helpers/auth.guard.service */
    "./src/app/_helpers/auth.guard.service.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sections/sections.component */
    "./src/app/sections/sections.component.ts");
    /* harmony import */


    var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/forgot-password/forgot-password.component */
    "./src/app/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forum/forum.component */
    "./src/app/forum/forum.component.ts");
    /* harmony import */


    var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./post-detail/post-detail.component */
    "./src/app/post-detail/post-detail.component.ts");
    /* harmony import */


    var _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./topic-detail/topic-detail.component */
    "./src/app/topic-detail/topic-detail.component.ts");
    /* harmony import */


    var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./topic-list/topic-list.component */
    "./src/app/topic-list/topic-list.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./update-profile/update-profile.component */
    "./src/app/update-profile/update-profile.component.ts");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user-details/user-details.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'sections',
      component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"]
    }, {
      path: 'forgot',
      component: _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }, {
      path: 'profile',
      component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__["UpdateProfileComponent"]
    }, {
      path: 'blogs',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
      children: [{
        path: '',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]
      }, {
        path: 'posts/:id',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]
      }, {
        path: 'post-detail/:id',
        component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_10__["PostDetailComponent"]
      }, {
        path: 'profile/:id',
        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"]
      }]
    }, {
      path: 'forum',
      component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__["ForumComponent"],
      children: [{
        path: '',
        component: _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__["TopicListComponent"]
      }, {
        path: 'topic-list/:id',
        component: _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__["TopicListComponent"]
      }, {
        path: 'topic-detail/:id',
        component: _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_11__["TopicDetailComponent"]
      }]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            onSameUrlNavigation: 'reload'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_a_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blogs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_31_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currentUser.user.firstName ? ctx_r4.currentUser.user.firstName + " " + ctx_r4.currentUser.user.lastName : ctx_r4.currentUser.user.email);
      }
    }

    function AppComponent_li_31_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello Guest");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_31_a_1_Template, 2, 1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_li_31_a_2_Template, 2, 0, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.currentUser.user);
      }
    }

    function AppComponent_li_32_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_32_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_32_a_1_Template, 2, 0, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUser);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, authenticationService, userService) {
        var _this3 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.title = 'tech-bidies-app-v2';
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this3.currentUser = x;
        });

        if (this.currentUser) {
          this.getUserDetails();
        } // if(!this.currentUser) this.router.navigate(['/login']);

      }

      _createClass(AppComponent, [{
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this4 = this;

          this.userService.getUserDetails(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this4.currentUser['user'] = res['user'];
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 60,
      vars: 4,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "black", "lighter-4", "navbar-dark", "scrolling-navbar"], [1, "container"], [1, "navbar-brand"], ["src", "assets/images/birdie.png", 1, "logo", 2, "height", "40px"], [1, "white-text"], [1, "yellow-text"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["class", "nav-link", "routerLink", "blogs", 4, "ngIf"], ["class", "nav-link", "routerLink", "forum", 4, "ngIf"], ["routerLink", "about", 1, "nav-link"], ["routerLink", "contact", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "navbar-nav", "nav-flex-icons", "my-2", "my-lg-0", "ml-auto"], ["class", "nav-item dropdown", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], ["href", "https://www.facebook.com/dev.portal.90", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-facebook-f"], ["target", "_blank", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "container-fluid", "px-0", 2, "margin-bottom", "12rem", "margin-top", "9rem"], [1, "page-footer", "text-center", "font-small", "mt-4", 2, "width", "100%"], [1, "my-1"], [1, "pb-4"], [1, "fab", "fa-facebook-f", "mr-3"], ["href", "#"], [1, "fab", "fa-twitter", "mr-3"], [1, "fab", "fa-youtube", "mr-3"], [1, "fab", "fa-google-plus-g", "mr-3"], [1, "fab", "fa-pinterest", "mr-3"], [1, "fab", "fa-github", "mr-3"], [1, "footer-copyright", "py-2"], ["routerLink", "blogs", 1, "nav-link"], ["routerLink", "forum", 1, "nav-link"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-primary"], ["routerLink", "profile", 1, "dropdown-item"], ["id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Birdies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_a_19_Template, 2, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_a_21_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_li_31_Template, 6, 2, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_li_32_Template, 2, 1, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "footer", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \xA9 2020 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " TechBirdies Team ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 740px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 850px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n     background: #1C2331!important;\n  }\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.top-nav-collapse[_ngcontent-%COMP%] {\n  background-color: #1C2331; }\n\n\n\n@media only screen and (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    background-color: #1C2331; } }\n\n\n\n.page-footer[_ngcontent-%COMP%] {\n  background-color: #1C2331; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTs7OztJQUlFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFOzs7O0lBSUUsYUFBYTtFQUNmO0FBQ0Y7O0FBQ0E7RUFDRTtLQUNHLDZCQUE2QjtFQUNoQztBQUNGOztBQUNBLHFCQUFxQjs7QUFDckI7RUFDRSxvQ0FBb0MsRUFBRTs7QUFFeEM7RUFDRSx5QkFBeUIsRUFBRTs7QUFFN0IseUNBQXlDOztBQUN6QztFQUNFO0lBQ0UseUJBQXlCLEVBQUUsRUFBRTs7QUFFakMscURBQXFEOztBQUNyRDtFQUNFLHlCQUF5QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSxcbmhlYWRlcixcbi52aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaHRtbCxcbiAgYm9keSxcbiAgaGVhZGVyLFxuICAudmlldyB7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgaHRtbCxcbiAgYm9keSxcbiAgaGVhZGVyLFxuICAudmlldyB7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgICAgYmFja2dyb3VuZDogIzFDMjMzMSFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIE5hdmJhciBhbmltYXRpb24gKi9cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnRvcC1uYXYtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxOyB9XG5cbi8qIEFkZGluZyBjb2xvciB0byB0aGUgTmF2YmFyIG9uIG1vYmlsZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxOyB9IH1cblxuLyogRm9vdGVyIGNvbG9yIGZvciBzYWtlIG9mIGNvbnNpc3RlbmN5IHdpdGggTmF2YmFyICovXG4ucGFnZS1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxOyB9XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
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

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/alert.service */
    "./src/app/login/alert.service.ts");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./_helpers/auth.guard.service */
    "./src/app/_helpers/auth.guard.service.ts");
    /* harmony import */


    var _helpers_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./_helpers/jwt.interceptor.service */
    "./src/app/_helpers/jwt.interceptor.service.ts");
    /* harmony import */


    var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_helpers/error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./_components/alert/alert.component */
    "./src/app/_components/alert/alert.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _sections_sections_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./sections/sections.component */
    "./src/app/sections/sections.component.ts");
    /* harmony import */


    var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./login/forgot-password/forgot-password.component */
    "./src/app/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _forum_forum_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./forum/forum.component */
    "./src/app/forum/forum.component.ts");
    /* harmony import */


    var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./post-detail/post-detail.component */
    "./src/app/post-detail/post-detail.component.ts");
    /* harmony import */


    var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./topic-list/topic-list.component */
    "./src/app/topic-list/topic-list.component.ts");
    /* harmony import */


    var _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./topic-detail/topic-detail.component */
    "./src/app/topic-detail/topic-detail.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./blog-create/blog-create.component */
    "./src/app/blog-create/blog-create.component.ts");
    /* harmony import */


    var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./update-profile/update-profile.component */
    "./src/app/update-profile/update-profile.component.ts");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user-details/user-details.component.ts");
    /* harmony import */


    var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./_pipes/truncare-text.pipe */
    "./src/app/_pipes/truncare-text.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_login_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"], _login_auth_service_service__WEBPACK_IMPORTED_MODULE_13__["AuthServiceService"], _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptorService"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'fill'
        }
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MyMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"], _sections_sections_component__WEBPACK_IMPORTED_MODULE_21__["SectionsComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_24__["PostsComponent"], _forum_forum_component__WEBPACK_IMPORTED_MODULE_25__["ForumComponent"], _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_26__["PostDetailComponent"], _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_27__["TopicListComponent"], _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_28__["TopicDetailComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"], _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_30__["BlogCreateComponent"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_31__["UpdateProfileComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_32__["UserDetailsComponent"], _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_33__["TruncateTextPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MyMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"], _sections_sections_component__WEBPACK_IMPORTED_MODULE_21__["SectionsComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_24__["PostsComponent"], _forum_forum_component__WEBPACK_IMPORTED_MODULE_25__["ForumComponent"], _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_26__["PostDetailComponent"], _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_27__["TopicListComponent"], _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_28__["TopicDetailComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"], _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_30__["BlogCreateComponent"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_31__["UpdateProfileComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_32__["UserDetailsComponent"], _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_33__["TruncateTextPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MyMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]],
          providers: [_login_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"], _login_auth_service_service__WEBPACK_IMPORTED_MODULE_13__["AuthServiceService"], _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _helpers_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptorService"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"],
            multi: true
          }, {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'fill'
            }
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-create/blog-create.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/blog-create/blog-create.component.ts ***!
    \******************************************************/

  /*! exports provided: BlogCreateComponent */

  /***/
  function srcAppBlogCreateBlogCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function () {
      return BlogCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");

    function BlogCreateComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
      }
    }

    var BlogCreateComponent = /*#__PURE__*/function () {
      function BlogCreateComponent(formBuilder, router, authenticationService, postQueryService) {
        _classCallCheck(this, BlogCreateComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.users = [];
        this.percentDone = 0;
        this.posts = [];
        this.categories = [];
        this.Posts = [];
        this.editorConfig = {
          editable: true,
          spellcheck: true,
          height: 'auto',
          minHeight: '0',
          maxHeight: 'auto',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: true,
          showToolbar: true,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [{
            "class": 'arial',
            name: 'Arial'
          }, {
            "class": 'times-new-roman',
            name: 'Times New Roman'
          }, {
            "class": 'calibri',
            name: 'Calibri'
          }, {
            "class": 'comic-sans-ms',
            name: 'Comic Sans MS'
          }],
          customClasses: [{
            name: 'quote',
            "class": 'quote'
          }, {
            name: 'redText',
            "class": 'redText'
          }, {
            name: 'titleText',
            "class": 'titleText',
            tag: 'h1'
          }],
          uploadUrl: 'v1/image',
          uploadWithCredentials: false,
          sanitize: true,
          toolbarPosition: 'top',
          toolbarHiddenButtons: []
        };
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(BlogCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
          this.postContent = this.formBuilder.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shortDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            myFile: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this5 = this;

          this.postQueryService.getCategories(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this5.categories = res;
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this6 = this;

          var file = event.target.files[0];
          this.postContent.patchValue({
            myFile: file
          });
          this.postContent.get('myFile').updateValueAndValidity(); // File Preview

          var reader = new FileReader();

          reader.onload = function () {
            _this6.preview = reader.result;
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          this.postQueryService.addPost(this.postContent.value.content, this.postContent.value.category, this.postContent.value.myFile, this.postContent.value.shortDescription, this.currentUser.token).subscribe(function (event) {
            console.log(event);

            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                console.log('Request has been made!');
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].ResponseHeader:
                console.log('Response header has been received!');
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                _this7.percentDone = Math.round(event.loaded / event.total * 100);
                console.log("Uploaded! ".concat(_this7.percentDone, "%"));
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                console.log('Post successfully created!', event.body);
                alert(event.body.message);

                _this7.router.navigate(['']);

                _this7.percentDone = false;
            }
          });
        }
      }]);

      return BlogCreateComponent;
    }();

    BlogCreateComponent.ɵfac = function BlogCreateComponent_Factory(t) {
      return new (t || BlogCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_5__["PostQueryService"]));
    };

    BlogCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogCreateComponent,
      selectors: [["app-blog-create"]],
      decls: 27,
      vars: 3,
      consts: [[1, "container"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "mb-4"], ["for", "category", 1, "col-sm-4"], [1, "text-center", "mb-3", "col-sm-8", "form-group"], ["name", "category", "id", "category", "formControlName", "category", "required", "", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "shortDescription", "required", "", 1, "form-control"], [1, "text-center", "mb-3", "col-md-12", "form-group"], ["formControlName", "content", 3, "config"], [1, "text-center", "mb-3", "col-md-4", "form-group"], [1, "form-group"], ["type", "file", 3, "change"], [1, "text-center", "mb-3", "col-md-3", "form-group"], [1, "btn", "btn-pink", "btn-rounded", "btn-block", "btn-rounded", "z-depth-1"], [3, "value"]],
      template: function BlogCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BlogCreateComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogCreateComponent_option_10_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Short Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "angular-editor", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlogCreateComponent_Template_input_change_22_listener($event) {
            return ctx.uploadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.editorConfig);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctY3JlYXRlL2Jsb2ctY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-create',
          templateUrl: './blog-create.component.html',
          styleUrls: ['./blog-create.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_5__["PostQueryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../blog-create/blog-create.component */
    "./src/app/blog-create/blog-create.component.ts");
    /* harmony import */


    var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_pipes/truncare-text.pipe */
    "./src/app/_pipes/truncare-text.pipe.ts");

    function BlogComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_18_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-blog-create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BlogComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_li_26_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var post_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.gotoDetails(post_r6._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r6.shortDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, post_r6.content, 20), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BlogComponent_li_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var thread_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thread_r9.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", thread_r9.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BlogComponent_li_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_li_38_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var group_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.gotoPostsByCategory(group_r10._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r10._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r10.count);
      }
    }

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent(formBuilder, router, authenticationService, postQueryService, route) {
        _classCallCheck(this, BlogComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.users = [];
        this.topics = [];
        this.posts = [];
        this.showCreate = false;
        this.groups = [];
        this.threads = [];
        this.category = [];
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicGroups();
          this.getMyTopicThreads();
          this.getRecentTopics();
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          this.showCreate = !this.showCreate;
        }
      }, {
        key: "close",
        value: function close() {
          this.showCreate = false;
        }
      }, {
        key: "getTopicGroups",
        value: function getTopicGroups() {
          var _this8 = this;

          this.postQueryService.getPostGroups(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this8.groups = res;
          });
        }
      }, {
        key: "getRecentTopics",
        value: function getRecentTopics() {
          var _this9 = this;

          this.postQueryService.getRecentPosts(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this9.posts = res;
          });
        }
      }, {
        key: "getMyTopicThreads",
        value: function getMyTopicThreads() {
          var _this10 = this;

          this.postQueryService.getMyPostThreads(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this10.threads = res;
          });
        }
      }, {
        key: "gotoPostsByCategory",
        value: function gotoPostsByCategory(id) {
          this.router.navigate(['posts/' + id], {
            relativeTo: this.route
          }); // this.router.navigate(['blogs/'+id]);
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(id) {
          this.router.navigate(['blogs/post-detail/' + id]);
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 39,
      vars: 4,
      consts: [[1, "container", 2, "margin-top", "-4rem"], [1, "row"], [1, "col-sm-4", "col-lg-4", "col-xs-4"], [1, "pull-right", 2, "float", "right", "display", "none"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Topics", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-search"], [1, "col-sm-4", "col-lg-4", "col-xs-4", 2, "float", "right"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "teal", "btn-md", "white-text", 3, "click"], [1, "container"], [1, "mt-1"], [1, "col-md-9", "mb-4"], ["class", "post", "style", "border:1px solid #eee;padding:1rem 2rem", 4, "ngIf"], [1, "col-md-3", "mb-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "list-unstyled", 2, "font-size", "x-small"], ["class", "media my-2", 4, "ngFor", "ngForOf"], [1, "post", 2, "border", "1px solid #eee", "padding", "1rem 2rem"], [1, "px-2", 2, "float", "right"], [1, "fa", "fa-times", "red-text", 3, "click"], [1, "media", "my-2"], [1, "media-body"], ["href", "javascript:void(0)", 3, "click"], [1, "mt-0", "mb-1", "font-weight-bold"], [3, "innerHTML"], ["href", ""], [2, "height", "20px", "overflow", "hidden", 3, "innerHTML"], [1, "badge", "pull-right"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_12_listener() {
            return ctx.toggleShow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start New Topic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BlogComponent_div_18_Template, 4, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recent Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BlogComponent_li_26_Template, 7, 5, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "My articles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BlogComponent_li_32_Template, 6, 2, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BlogComponent_li_38_Template, 7, 2, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCreate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.threads);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_6__["BlogCreateComponent"]],
      pipes: [_pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncateTextPipe"]],
      styles: [".badge[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    font-size: 12px;\n    color: #ffffff;\n    font-family: 'Open Sans Bold', sans-serif;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_33_div_1_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.r.name.errors.required);
      }
    }

    function ContactComponent_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_39_div_1_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.r.email.errors.required);
      }
    }

    function ContactComponent_div_57_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subject is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_57_div_1_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.r.subject.errors.required);
      }
    }

    function ContactComponent_div_64_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_64_div_1_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.r.messageText.errors.required);
      }
    }

    function ContactComponent_span_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 69);
      }
    }

    function ContactComponent_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Query is successfully sent. We'll get back to you Shortly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(formBuilder, postQueryService) {
        _classCallCheck(this, ContactComponent);

        this.formBuilder = formBuilder;
        this.postQueryService = postQueryService;
        this.loadingR = false;
        this.rsubmitted = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.queryForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            messageText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            phone: [''],
            company: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.rsubmitted = true; // stop here if form is invalid

          if (this.queryForm.invalid) {
            return;
          }

          this.loadingR = true;
          this.postQueryService.postQuery(this.queryForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            if (data['sendStatus']) alert("Query Sent Successfully");
            _this11.sendStatus = true;
            _this11.loadingR = false;

            _this11.queryForm.reset();
          }, function (error) {
            _this11.loadingR = false;
          });
        }
      }, {
        key: "r",
        get: function get() {
          return this.queryForm.controls;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 142,
      vars: 20,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-9"], ["id", "myTabContentMD", 1, "tab-content"], ["id", "contact-md", "role", "tabpanel", "aria-labelledby", "contact-tab-md", 1, "tab-pane", "active"], [1, "card-title"], [1, "card"], [1, "card-body"], [1, "card-text"], [1, "card-link"], ["id", "send-md", "role", "tabpanel", "aria-labelledby", "send-tab-md", 1, "tab-pane", "fade"], [1, "contact-section", "my-5"], [1, "col-lg-7"], [1, "card-body", "form"], [1, "mt-4"], [1, "fas", "fa-envelope", "pr-2"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "md-form", "mb-0"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "name", 1, ""], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "email", 1, ""], ["type", "phone", "formControlName", "phone", 1, "form-control"], ["for", "phone", 1, ""], ["type", "text", "formControlName", "company", 1, "form-control"], ["for", "company", 1, ""], [1, "col-md-12"], ["type", "text", "formControlName", "subject", 1, "form-control", 3, "ngClass"], ["for", "subject", 1, ""], ["formControlName", "messageText", "rows", "3", 1, "form-control", "md-textarea", 3, "ngClass"], ["for", "messageText"], [1, "btn-floating", "btn-lg", "blue", 3, "disabled"], [1, "far", "fa-paper-plane"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [4, "ngIf"], [1, "col-lg-5"], [1, "card-body", "contact", "text-center", "blue", "white-text"], [1, "my-4", "pb-2"], [1, "text-lg-left", "list-unstyled", "ml-4"], [1, "fas", "fa-map-marker-alt", "pr-2"], [1, "fas", "fa-phone", "pr-2"], [1, "hr-light", "my-4"], [1, "list-inline", "text-center", "list-unstyled"], [1, "list-inline-item"], [1, "p-2", "fa-lg", "tw-ic"], [1, "fab", "fa-twitter"], [1, "p-2", "fa-lg", "li-ic"], [1, "fab", "fa-linkedin-in"], [1, "p-2", "fa-lg", "ins-ic"], [1, "fab", "fa-instagram"], ["id", "join-md", "role", "tabpanel", "aria-labelledby", "join-tab-md", 1, "tab-pane", "fade"], [1, "col-sm-5"], [1, "view", "overlay"], ["src", "https://mdbootstrap.com/img/Photos/Others/photo6.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "#!"], [1, "mask", "rgba-white-slight"], ["href", "#", 1, "btn", "btn-primary"], [1, "col-sm-2"], ["src", "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-sm-3"], ["role", "tablist", 1, "list-group", "nav", "list-group-flush", "rgba-grey-dark"], [1, "list-group-item", "nav-item"], ["id", "contact-tab-md", "data-toggle", "tab", "href", "#contact-md", "role", "tab", "aria-controls", "contact-md", "aria-selected", "true", 1, "nav-link", "active"], [1, "list-group-item"], ["id", "send-tab-md", "data-toggle", "tab", "href", "#send-md", "role", "tab", "aria-controls", "send-md", "aria-selected", "true", 1, "nav-link"], ["id", "join-tab-md", "data-toggle", "tab", "href", "#join-md", "role", "tab", "aria-controls", "join-md", "aria-selected", "true", 1, "nav-link"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Some quick example text to build on the panel title and make up the bulk of the panel's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Card link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Another link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send Query");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Write to us:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_26_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Your name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactComponent_div_33_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactComponent_div_39_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Your company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Your Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ContactComponent_div_57_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Your message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ContactComponent_div_64_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ContactComponent_span_67_Template, 1, 0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ContactComponent_div_68_Template, 3, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Contact information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "New York, 94126, USA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "+ 01 234 567 89");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "contact@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Join Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Card title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Card title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Send Query");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Join Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.queryForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.rsubmitted && ctx.r.name.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.name.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.rsubmitted && ctx.r.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.rsubmitted && ctx.r.subject.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.subject.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.rsubmitted && ctx.r.messageText.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.messageText.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendStatus);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".nav-link.active[_ngcontent-%COMP%]  {\n    color:black;\n    background: #eee;\n    }\n    a[_ngcontent-%COMP%]{\n        color:black;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay5hY3RpdmUgIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIH1cbiAgICBhe1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forum/forum.component.ts":
  /*!******************************************!*\
    !*** ./src/app/forum/forum.component.ts ***!
    \******************************************/

  /*! exports provided: ForumComponent */

  /***/
  function srcAppForumForumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumComponent", function () {
      return ForumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForumComponent_div_18_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r4._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r4._id);
      }
    }

    function ForumComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_div_18_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForumComponent_div_18_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ForumComponent_div_18_option_23_Template, 2, 2, "option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Email me when some one post a reply");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.topicContent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groups);
      }
    }

    function ForumComponent_li_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_li_27_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var group_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.gotoPostsByCategory(group_r8._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", group_r8._id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r8.count);
      }
    }

    function ForumComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_div_32_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var thread_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.gotoDetails(thread_r11._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var thread_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thread_r11.title);
      }
    }

    var ForumComponent = /*#__PURE__*/function () {
      function ForumComponent(formBuilder, router, authenticationService, postQueryService, route) {
        _classCallCheck(this, ForumComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.users = [];
        this.topics = [];
        this.Topics = [];
        this.showCreate = false;
        this.groups = [];
        this.categories = [];
        this.threads = [];
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(ForumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopicGroups();
          this.getMyTopicThreads();
          this.topicContent = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          this.showCreate = !this.showCreate;
        }
      }, {
        key: "close",
        value: function close() {
          this.showCreate = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          this.postQueryService.addTopic(this.topicContent.value, this.currentUser.token).subscribe(function (data) {
            _this12.Topics.push(data);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this13 = this;

          this.postQueryService.getCategories(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this13.categories = res;
          });
        }
      }, {
        key: "getTopics",
        value: function getTopics() {
          var _this14 = this;

          this.postQueryService.getTopics('', this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this14.Topics = res;
          });
        }
      }, {
        key: "getTopicGroups",
        value: function getTopicGroups() {
          var _this15 = this;

          this.postQueryService.getTopicGroups(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this15.groups = res;
          });
        }
      }, {
        key: "getMyTopicThreads",
        value: function getMyTopicThreads() {
          var _this16 = this;

          this.postQueryService.getMyTopicThreads(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this16.threads = res;
          });
        }
      }, {
        key: "gotoPostsByCategory",
        value: function gotoPostsByCategory(id) {
          console.log(id);
          this.router.navigate(['topic-list/' + id], {
            relativeTo: this.route
          });
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(id) {
          this.router.navigate(['forum/topic-detail/' + id]);
        }
      }]);

      return ForumComponent;
    }();

    ForumComponent.ɵfac = function ForumComponent_Factory(t) {
      return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForumComponent,
      selectors: [["app-forum"]],
      decls: 67,
      vars: 3,
      consts: [[1, "content", 2, "margin-top", "-3rem"], [1, "container"], [1, "row"], [1, "col-sm-4", "col-lg-4", "col-xs-4"], [1, "pull-right", 2, "float", "right", "display", "none"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Topics", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-search"], [1, "col-sm-4", "col-lg-4", "col-xs-4", 2, "float", "right"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "teal", "btn-md", "white-text", 3, "click"], [1, "col-lg-8", "col-md-8"], ["class", "post", 4, "ngIf"], [1, "col-lg-4", "col-md-4"], [1, "sidebarblock"], [1, "divline"], [1, "blocktxt"], [1, "groups"], [4, "ngFor", "ngForOf"], [1, "col-lg-8", "col-xs-12", "col-md-8"], [1, "d-flex", "justify-content-center"], [1, "pagination", "pg-blue"], [1, "page-item", "disabled"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], [1, "sr-only"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], [1, "page-item"], ["href", "#", "aria-label", "Next", 1, "page-link"], [1, "post"], [1, "pull-right", "px-2"], [1, "fa", "fa-times", "red-text", 3, "click"], ["name", "form1", 1, "form", "newtopic", 3, "formGroup", "ngSubmit"], [1, "topwrap"], [1, "userinfo", "pull-left"], [1, "avatar"], ["src", "images/avatar4.jpg", "alt", ""], [1, "status", "red"], [1, "icons"], ["src", "images/icon3.jpg", "alt", ""], ["src", "images/icon4.jpg", "alt", ""], ["src", "images/icon5.jpg", "alt", ""], ["src", "images/icon6.jpg", "alt", ""], [1, "posttext", "pull-left"], ["type", "text", "placeholder", "Enter Topic Title", "formControlName", "title", 1, "form-control"], [1, "col-lg-6", "col-md-6"], ["name", "category", "id", "category", "formControlName", "category", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Category", "formControlName", "category", 1, "form-control"], ["type", "text", "placeholder", "Sub-Category", "formControlName", "subcategory", 1, "form-control"], ["name", "desc", "id", "desc", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "clearfix"], [1, "postinfobot"], [1, "notechbox", "pull-left"], ["type", "checkbox", "name", "note", "id", "note", 1, "form-control"], [1, "pull-left"], ["for", "note"], [1, "pull-right", "postreply"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"], ["href", "javascript:void(0)", 3, "click"], [1, "badge", "pull-right"]],
      template: function ForumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_Template_button_click_13_listener() {
            return ctx.toggleShow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start New Topic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForumComponent_div_18_Template, 42, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ForumComponent_li_27_Template, 5, 2, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "My Active Threads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ForumComponent_div_32_Template, 5, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nav", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCreate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.threads);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".content[_ngcontent-%COMP%] {\n    background-color: #ecf0f1;\n    border-top: solid 1px #e0e4e5;\n}\n.post[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.post[_ngcontent-%COMP%]   .wrap-ut[_ngcontent-%COMP%] {\n    width: 85%;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.post[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 85%;\n    padding-right: 30px;\n    padding-top: 20px;\n    padding-bottom: 15px;\n    color: #000;\n    font-size: 14px;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 25px;\n}\n.post[_ngcontent-%COMP%]   .postinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    border-left: solid 1px #f1f1f1;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    padding: 18px 0 25px 0;\n    text-align: center;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commentbg[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    border-radius: 2px;\n    display: inline-block;\n    padding: 12px 17px;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    position: relative;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    color: #9da6aa;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 37px;\n    margin-left: 5px;\n}\n.avatar[_ngcontent-%COMP%] {\n    position: relative;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n.avatar[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n    background-color: #80d3ab;\n}\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    border-radius: 50%;\n    border: solid 2px #ffffff;\n}\n.post[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 48px;\n    border-top: solid 1px #f1f1f1;\n    margin-top: 12px;\n    padding-top: 7px;\n}\n.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.pull-left[_ngcontent-%COMP%]{\n    float:left;\n}\n.pull-right[_ngcontent-%COMP%]{\n    float:right;\n}\n\n.sidebarblock[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.sidebarblock[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    margin: 0;\n    padding: 20px;\n}\n.sidebarblock[_ngcontent-%COMP%]   .divline[_ngcontent-%COMP%] {\n    height: 1px;\n    line-height: 1px;\n    border-bottom: solid 1px #f1f1f1;\n}\n.sidebarblock[_ngcontent-%COMP%]   .blocktxt[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    padding: 20px;\n}\nul.groups[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\nul.groups[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n    line-height: 30px;\n}\nul.groups[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 30px;\n}\nul.groups[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    font-size: 12px;\n    color: #ffffff;\n    font-family: 'Open Sans Bold', sans-serif;\n    margin-top: 7px;\n}\n\n.postinfobot[_ngcontent-%COMP%] {\n    border-top: solid 1px #f1f1f1;\n    line-height: 50px;\n    padding: 0 30px 0 94px;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.newtopic[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .newtopic[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n    border-radius: 2px;\n    box-shadow: none;\n    border: none;\n    background-color: #f1f1f1;\n    padding: 20px;\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    margin-bottom: 20px;\n    height: 50px;\n}\n.newtopic[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    border-radius: 2px;\n    box-shadow: none;\n    border: solid 1px #cfd5d7;\n    background-color: #ffffff;\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    margin-bottom: 20px;\n    height: 50px;\n}\n.newtopic[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n        border-radius: 2px;\n        box-shadow: none;\n        border: none;\n        background-color: #f1f1f1;\n        padding: 20px;\n        font-size: 14px;\n        color: #000;\n        font-family: 'Open Sans Light', sans-serif;\n        margin-bottom: 20px;\n        height: 150px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBLGVBQWU7QUFDZjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsU0FBUztJQUNULGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25CO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixlQUFlO1FBQ2YsV0FBVztRQUNYLDBDQUEwQztRQUMxQyxtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4gICAgbWFyZ2luLXRvcDotM3JlbTtcbn0gKi9cbi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTBlNGU1O1xufVxuLnBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzljY2NkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucG9zdCAud3JhcC11dCB7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuLnBvc3QgLnVzZXJpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4IDE1cHg7XG59XG4ucG9zdCAucG9zdHRleHQge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLnBvc3QgLnBvc3RpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2YxZjFmMTtcbn1cbi5wb3N0IC5jb21tZW50cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMThweCAwIDI1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9zdCAuY29tbWVudHMgLmNvbW1lbnRiZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEycHggMTdweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLnZpZXdzIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBjb2xvcjogIzlkYTZhYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnZpZXdzIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wb3N0IC50aW1lIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnRpbWUgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBvc3QgLmF2YXRhciB7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXZhdGFyIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwZDNhYjtcbn1cbi5hdmF0YXIgLnN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG59XG4ucG9zdCAuaWNvbnMge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5wb3N0IGgyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnB1bGwtbGVmdHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLnB1bGwtcmlnaHR7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi8qIGxlZnQgYmxvY2sgKi9cbi5zaWRlYmFyYmxvY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzljY2NkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lkZWJhcmJsb2NrIGgzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uc2lkZWJhcmJsb2NrIC5kaXZsaW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjFmMWYxO1xufVxuLnNpZGViYXJibG9jayAuYmxvY2t0eHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbnVsLmdyb3VwcyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG51bC5ncm91cHMgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG51bC5ncm91cHMgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIExpZ2h0Jywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cbnVsLmdyb3VwcyAuYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLyogY3JlYXRlIHBvc3QgKi9cbi5wb3N0aW5mb2JvdCB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgOTRweDtcbn1cbi5wb3N0IC51c2VyaW5mbyB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTVweCAxNXB4O1xufVxuLm5ld3RvcGljIGlucHV0W3R5cGU9dGV4dF0sIC5uZXd0b3BpYyBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm5ld3RvcGljIHNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NmZDVkNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4gICAgXG4gICAgLm5ld3RvcGljIHRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIExpZ2h0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forum',
          templateUrl: './forum.component.html',
          styleUrls: ['./forum.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_pipes/truncare-text.pipe */
    "./src/app/_pipes/truncare-text.pipe.ts"); // https://www.positronx.io/angular-8-express-file-upload-tutorial-with-reactive-forms/


    function HomeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_10_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.gotoDetails(ctx_r3.Posts[0]._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_10_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.gotoDetails(ctx_r5.Posts[1]._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_10_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.gotoDetails(ctx_r6.Posts[2]._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.Posts[0].myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Posts[0].shortDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, ctx_r0.Posts[0].content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.Posts[1].myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Posts[1].shortDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 12, ctx_r0.Posts[1].content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.Posts[2].myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Posts[2].shortDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 15, ctx_r0.Posts[2].content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function HomeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_20_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_li_7_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var post_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.gotoDetails(post_r8._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r8.shortDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, post_r8.content, 20), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function HomeComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recent Posts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_20_li_7_Template, 8, 5, "li", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.Posts);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, authenticationService, postQueryService, route) {
        var _this17 = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.loggedIn = false;
        this.Posts = [];
        this.navigationSubscription = this.router.events.subscribe(function (e) {
          // If it is a NavigationEnd event re-initalise the component
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this17.initialiseInvites();
          }
        });
        this.currentUser = this.authenticationService.currentUserValue;

        if (!this.currentUser) {
          this.loggedIn = false;
        } else {
          this.loggedIn = true;
        }
      }

      _createClass(HomeComponent, [{
        key: "initialiseInvites",
        value: function initialiseInvites() {
          this.currentUser = this.authenticationService.currentUserValue;

          if (!this.currentUser) {
            this.loggedIn = false;
          } else {
            this.loggedIn = true;
            this.getRecentTopics();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // getPosts() {
        //   this.postQueryService.getPosts('', this.currentUser.token).subscribe((res) => {
        //     this.Posts = res['posts'];
        //   })
        // }

      }, {
        key: "getRecentTopics",
        value: function getRecentTopics() {
          var _this18 = this;

          this.postQueryService.getRecentPosts(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this18.Posts = res;
          });
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(id) {
          this.router.navigate(['blogs/post-detail/' + id]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 174,
      vars: 3,
      consts: [[1, "full-page-intro", "ml-auto", 2, "background-image", "url('assets/images/bg2.jpg')", "background-repeat", "no-repeat", "background-size", "cover", "margin-top", "-10rem"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center;"], [1, "container", 2, "margin-top", "8rem"], [1, "row"], [1, "col-md-8", "mb-4", "py-2", "white-text", "text-center", "text-md-left"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carousel-example-1z", "data-slide-to", "0", 1, "active"], ["data-target", "#carousel-example-1z", "data-slide-to", "1"], ["data-target", "#carousel-example-1z", "data-slide-to", "2"], ["class", "carousel-inner", 4, "ngIf"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["class", "col-md-4  mb-4", 4, "ngIf"], [1, "container"], [1, "mt-5"], [1, "my-5"], [1, "h3", "text-center", "mb-5"], [1, "col-lg-6", "col-md-12", "px-4"], [1, "col-1", "mr-3"], [1, "fas", "fa-globe", "fa-2x", "indigo-text"], [1, "col-10"], [1, "feature-title"], [1, "grey-text"], [2, "height", "30px"], [1, "fas", "fa-comments", "fa-2x", "blue-text"], [1, "fas", "fa-level-up-alt", "fa-2x", "cyan-text"], [1, "col-lg-6", "col-md-12"], [1, "h5", "text-center", "mb-4"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/uilkmUoXoLU", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "my-5", "h3", "text-center"], [1, "row", "features-small", "mb-5", "mt-3"], [1, "col-md-4"], [1, "col-2"], [1, "fas", "fa-check-circle", "fa-2x", "indigo-text"], [2, "height", "15px"], [1, "col-md-4", "flex-center"], ["src", "https://mdbootstrap.com/img/Others/screens.png", "alt", "MDB Magazine Template displayed on iPhone", 1, "z-depth-0", "img-fluid"], [1, "col-md-4", "mt-2"], [1, "mb-5"], [1, "row", "features-small", "mt-5"], [1, "col-xl-4", "col-lg-6"], ["aria-hidden", "true", 1, "fas", "fa-level-up-alt", "fa-2x", "mb-1", "indigo-text"], [1, "col-10", "mb-2"], [1, "feature-title", "font-bold", "mb-1"], [1, "grey-text", "mt-2"], ["aria-hidden", "true", 1, "fas", "fa-comments", "fa-2x", "mb-1", "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-question", "fa-2x", "mb-1", "indigo-text"], [1, "carousel-inner"], [1, "carousel-item", "active", 3, "click"], [1, "view"], ["alt", "First slide", 1, "d-block", "w-80", 2, "width", "100%", 3, "src"], [1, "mask", "rgba-black-light"], [1, "carousel-caption"], [1, "h3-responsive"], [3, "innerHTML"], [1, "carousel-item", 3, "click"], ["alt", "Second slide", 1, "d-block", "w-80", 2, "width", "100%", 3, "src"], ["alt", "Third slide", 1, "d-block", "w-100", 2, "width", "100%", 3, "src"], [1, "col-md-4", "mb-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "list-unstyled", 2, "font-size", "x-small"], ["class", "media my-2", 4, "ngFor", "ngForOf"], [1, "media", "my-2"], ["src", "https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg", "alt", "Generic placeholder image", 1, "d-flex", "mr-3", 2, "height", "20px"], [1, "media-body"], ["href", "javascript:void(0)", 3, "click"], [1, "mt-0", "mb-1", "font-weight-bold"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 28, 18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 8, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "You can");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Connect with peers, mentors, companies. Ask for career guidance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "We give you freedom to share your views or the change you want to bring to the current system. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Grow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "We help you grow in your career, keep you updated with the latest technologies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Watch our \"5 min Quick Start\" tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "iframe", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Not enough?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Free Training and demo classes by best trainers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Best in class videos and doubt clearing sessions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Free Training and demo classes by best trainers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Best in class videos and doubt clearing sessions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Free Training and demo classes by best trainers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Best in class videos and doubt clearing sessions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Free Training and demo classes by best trainers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Best in class videos and doubt clearing sessions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Free Training and demo classes by best trainers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Best in class videos and doubt clearing sessions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Plenty of guidances");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Need inspiration? Ask one of our experts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Easy to use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Few minutes, a few clicks and... done. You will be surprised at how easy it is. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Free Training and demo classes by best trainers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Best in class videos and doubt clearing sessions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "hr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "...and even more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Frequent updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "TB becomes better every month. We love our work and enhance as much as possible. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Active community");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Our society grows day by day. Visit our forum and check how it is to be a part of our family. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "We care about reliability. If you have any questions - do not hesitate to contact us. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Posts.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncateTextPipe"]],
      styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nlabel[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\n  color:black!important;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  \n  height:500px!important;\n}\n\n.container[_ngcontent-%COMP%]{\n  padding:0px!important;\n}\n\n.row[_ngcontent-%COMP%] {\n  display:         flex;\n  flex-wrap: wrap;\n}\n\n.row[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFJRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5sYWJlbHtcbiAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xufVxuLm5hdi1pdGVtIGF7XG4gIGNvbG9yOndoaXRlIWltcG9ydGFudDtcbn1cbi5uYXYtaXRlbSBhLmFjdGl2ZXtcbiAgY29sb3I6YmxhY2shaW1wb3J0YW50O1xufVxuLmNhcm91c2VsLWl0ZW0gIGltZ3tcbiAgLyogcGFkZGluZzogMnJlbSAxcmVtOyAqL1xuICBoZWlnaHQ6NTAwcHghaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lcntcbiAgcGFkZGluZzowcHghaW1wb3J0YW50O1xufVxuLnJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAgICAgICAgIGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5yb3cgPiBbY2xhc3MqPSdjb2wtJ10ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/alert.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/alert.service.ts ***!
    \****************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppLoginAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(router) {
        var _this19 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false; // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            if (_this19.keepAfterRouteChange) {
              // only keep for a single route change
              _this19.keepAfterRouteChange = false;
            } else {
              // clear alert message
              _this19.clear();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "getAlert",
        value: function getAlert() {
          return this.subject.asObservable();
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          // clear by calling subject.next() without parameters
          this.subject.next();
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/auth-service.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/auth-service.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthServiceService */

  /***/
  function srcAppLoginAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServiceService", function () {
      return AuthServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthServiceService = /*#__PURE__*/function () {
      function AuthServiceService(http) {
        _classCallCheck(this, AuthServiceService);

        this.http = http; // public url ="https://talentmitra-o5ryx.ondigitalocean.app";

        this.url = '';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthServiceService, [{
        key: "login",
        value: function login(email, password) {
          var _this20 = this;

          return this.http.post("".concat(this.url, "/auth/login"), {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this20.currentUserSubject.next(user);

            return user;
          }));
        }
      }, {
        key: "register",
        value: function register(user) {
          var _this21 = this;

          return this.http.post("".concat(this.url, "/auth/register"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this21.currentUserSubject.next(user);

            return user;
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          var _this22 = this;

          console.log("came here with " + email);
          var user = {
            code: code,
            email: email
          };
          var code = Math.floor(Math.random() * 90000) + 10000;
          this.code = code;
          user.code = code;
          user.email = email;
          return this.http.post("".concat(this.url, "/auth/forgotpass"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            data.code = _this22.code;
            console.log(data);
            return data;
          }));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(user) {
          console.log("came here with ");
          console.log(user);
          return this.http.post("".concat(this.url, "/auth/resetPassword"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data);
            return data;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage and set current user to null
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthServiceService;
    }();

    AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
      return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthServiceService,
      factory: AuthServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/forgot-password/forgot-password.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
    \********************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppLoginForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotPasswordComponent_div_4_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_4_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_4_div_7_div_1_Template, 2, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
      }
    }

    function ForgotPasswordComponent_div_4_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.passwordErrorMsg, " ");
      }
    }

    function ForgotPasswordComponent_div_4_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
      }
    }

    function ForgotPasswordComponent_div_4_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A verification code has been sent to your mail ID. Check your mail.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_div_4_div_18_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.code = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_4_div_18_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.resetPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Verify");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.verifyErrorMsg);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function ForgotPasswordComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_div_4_Template_form_ngSubmit_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onforgotPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_div_4_div_7_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPasswordComponent_div_4_div_8_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordComponent_div_4_span_12_Template, 1, 0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "or ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_div_4_div_18_Template, 13, 2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.forgotPasswordForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.lsubmitted && ctx_r0.f.email.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lsubmitted && ctx_r0.f.email.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.passwordErrorMsg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loadingL);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingL);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sendStatus);
      }
    }

    function ForgotPasswordComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_div_5_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_div_5_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.confirmPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_5_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.resetPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.confirmPassword);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.passwordUpdateMsg, " ");
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(formBuilder, route, router, authenticationService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingL = false;
        this.lsubmitted = false;

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passwordUpdateMsg = '';
          this.verifyErrorMsg = '';
          this.sendStatus = false;
          this.verifyCheck = false;
          this.passwordErrorMsg = '';
          this.forgotPasswordForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "onforgotPassword",
        value: function onforgotPassword() {
          var _this23 = this;

          this.lsubmitted = true;
          this.email = this.f.email.value; // stop here if form is invalid

          if (this.forgotPasswordForm.invalid) {
            return;
          }

          this.loadingL = true;
          this.authenticationService.forgotPassword(this.f.email.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this23.loadingL = false;

            if (data.error) {
              _this23.passwordErrorMsg = data.error;
            } else {
              _this23.passwordErrorMsg = '';
              _this23.sendStatus = true;
              _this23.verifyCode = data.code;
            } // this.router.navigate([this.returnUrl]);

          }, function (error) {
            _this23.loadingL = false;
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this24 = this;

          if (!this.verifyCheck) {
            if (this.verifyCode == this.code) {
              this.verifyCheck = true;
              this.verifyErrorMsg = 'Code Verified';
            }
          } else {
            if (this.password === this.confirmPassword) {
              this.authenticationService.resetPassword({
                email: this.email,
                password: this.password
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                if (data.error) {
                  _this24.passwordUpdateMsg = "Something went wrong. Try again";
                } else {
                  _this24.passwordUpdateMsg = "Password changed! Login again.";
                }

                _this24.router.navigate([_this24.returnUrl]);
              }, function (error) {
                _this24.passwordUpdateMsg = "Something went wrong. Try again!!!!";
              });
            } else {
              this.passwordUpdateMsg = "Passwords don't match";
            }
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.forgotPasswordForm.controls;
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 6,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-5", "col-sm-offset-4", 2, "margin-top", "-31px"], [1, "form-box"], [4, "ngIf"], ["class", "form-bottom", 4, "ngIf"], [1, "form-bottom"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "md-form", "form-group"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "mb-4"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "btn-pink", "btn-rounded", "btn-block", "btn-rounded", "z-depth-1", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["href", "#/"], [1, "invalid-feedback"], ["role", "alert", 1, "form-group", "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "mr-1"], ["for", "form-email", 1, "sr-only"], ["type", "text", "name", "form-username", "placeholder", "Enter Code", "required", "", 1, "form-username", "form-control", 3, "ngModel", "ngModelChange"], ["ng-show", "verifyErrorMsg", 1, "form-group", "alert", "alert-danger"], [1, "form-group"], [1, "btn", "btn-primary", 3, "click"], ["type", "password", "placeholder", "New Password", "required", "", 1, "form-username", "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Confirm Password", "required", "", 1, "form-username", "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], ["ng-show", "passwordUpdateMsg"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotPasswordComponent_div_4_Template, 19, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_div_5_Template, 17, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.verifyCheck);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verifyCheck);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/login/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_16_div_1_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.r.firstName.errors.required);
      }
    }

    function LoginComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_21_div_1_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.r.lastName.errors.required);
      }
    }

    function LoginComponent_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_26_div_1_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.r.email.errors.required);
      }
    }

    function LoginComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_31_div_1_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_31_div_2_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.r.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.r.password.errors.minlength);
      }
    }

    function LoginComponent_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
      }
    }

    function LoginComponent_div_43_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_43_div_1_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.required);
      }
    }

    function LoginComponent_div_48_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_48_div_1_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.password.errors.required);
      }
    }

    function LoginComponent_span_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loadingL = false;
        this.loadingR = false;
        this.lsubmitted = false;
        this.rsubmitted = false;
        this.step = 0; // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "setStep",
        value: function setStep(index) {
          this.step = index;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.step++;
        }
      }, {
        key: "prevStep",
        value: function prevStep() {
          this.step--;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this25 = this;

          this.lsubmitted = true; // reset alerts on submit

          this.alertService.clear(); // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loadingL = true;
          this.authenticationService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this25.router.navigate([_this25.returnUrl]);
          }, function (error) {
            _this25.alertService.error(error);

            _this25.loadingL = false;
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this26 = this;

          this.rsubmitted = true; // reset alerts on submit

          this.alertService.clear(); // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.loadingR = true;
          this.authenticationService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this26.alertService.success('Registration successful', true);

            _this26.router.navigate(['/']);
          }, function (error) {
            _this26.alertService.error(error);

            _this26.loadingR = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "r",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 57,
      vars: 30,
      consts: [[1, "card", "rgba-teal-strong", "darken-2", "text-white", "text-center", "p-3", "mt-2", "mb-2", 2, "height", "100%"], [1, "card-body"], ["id", "myTabMD", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified", "md-tabs", "rgba-white-light"], [1, "nav-item"], ["id", "home-tab-md", "data-toggle", "tab", "href", "#home-md", "role", "tab", "aria-controls", "home-md", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab-md", "data-toggle", "tab", "href", "#profile-md", "role", "tab", "aria-controls", "profile-md", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContentMD", 1, "tab-content"], ["id", "home-md", "role", "tabpanel", "aria-labelledby", "home-tab-md", 1, "tab-pane", "active"], ["name", "form2", 3, "formGroup", "ngSubmit"], [1, "md-form"], ["for", "firstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", "white-text", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", "white-text", 3, "ngClass"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", "white-text", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", "white-text", 3, "ngClass"], [1, "row", "d-flex", "align-items-center", "mb-4"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "btn-pink", "btn-rounded", "btn-block", "btn-rounded", "z-depth-1", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["id", "profile-md", "role", "tabpanel", "aria-labelledby", "profile-tab-md", 1, "tab-pane", "fade"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "md-form", "form-group"], [1, "flex-row", 2, "text-align", "left"], ["routerLink", "/forgot", 1, "white-text"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "REGISTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LoginComponent_span_35_Template, 1, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_38_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, LoginComponent_div_43_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, LoginComponent_div_48_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoginComponent_span_52_Template, 1, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Forgot password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.rsubmitted && ctx.r.firstName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.firstName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.rsubmitted && ctx.r.lastName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.lastName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.rsubmitted && ctx.r.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.rsubmitted && ctx.r.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.lsubmitted && ctx.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lsubmitted && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.lsubmitted && ctx.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lsubmitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingL);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nlabel[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\n  color:black!important;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  \n  height:500px!important;\n}\n\n.container[_ngcontent-%COMP%]{\n  padding:0px!important;\n}\n\n.row[_ngcontent-%COMP%] {\n  display:         flex;\n  flex-wrap: wrap;\n}\n\n.row[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUlFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxubGFiZWx7XG4gIGNvbG9yOndoaXRlIWltcG9ydGFudDtcbn1cbi5uYXYtaXRlbSBhe1xuICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XG59XG4ubmF2LWl0ZW0gYS5hY3RpdmV7XG4gIGNvbG9yOmJsYWNrIWltcG9ydGFudDtcbn1cbi5jYXJvdXNlbC1pdGVtICBpbWd7XG4gIC8qIHBhZGRpbmc6IDJyZW0gMXJlbTsgKi9cbiAgaGVpZ2h0OjUwMHB4IWltcG9ydGFudDtcbn1cbi5jb250YWluZXJ7XG4gIHBhZGRpbmc6MHB4IWltcG9ydGFudDtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogICAgICAgICBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucm93ID4gW2NsYXNzKj0nY29sLSddIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MyMaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function () {
      return MyMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var MyMaterialModule = function MyMaterialModule() {
      _classCallCheck(this, MyMaterialModule);
    };

    MyMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MyMaterialModule
    });
    MyMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MyMaterialModule_Factory(t) {
        return new (t || MyMaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyMaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-detail/post-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/post-detail/post-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: PostDetailComponent */

  /***/
  function srcAppPostDetailPostDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function () {
      return PostDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PostDetailComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.post.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.post.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PostDetailComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.post.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PostDetailComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_7_div_1_Template, 7, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_div_7_div_2_Template, 4, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFileType(ctx_r0.post.myFile) === "mp4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFileType(ctx_r0.post.myFile) === "jpg" || ctx_r0.getFileType(ctx_r0.post.myFile) === "bmp" || ctx_r0.getFileType(ctx_r0.post.myFile) === "png" || ctx_r0.getFileType(ctx_r0.post.myFile) === "gif");
      }
    }

    function PostDetailComponent_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Works at ", ctx_r1.post.postedBy == null ? null : ctx_r1.post.postedBy.company, "");
      }
    }

    function PostDetailComponent_div_38_div_1_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commentReply_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", commentReply_r10.commentedBy == null ? null : commentReply_r10.commentedBy.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (commentReply_r10.commentedBy == null ? null : commentReply_r10.commentedBy.firstName) + " " + (commentReply_r10.commentedBy == null ? null : commentReply_r10.commentedBy.lastName), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", commentReply_r10.commentText, " ");
      }
    }

    function PostDetailComponent_div_38_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_38_div_1_div_8_div_1_Template, 6, 3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r6.commentReplies);
      }
    }

    function PostDetailComponent_div_38_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostDetailComponent_div_38_div_1_div_9_Template_textarea_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.commentReply = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_div_38_div_1_div_9_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onCommentReply(comment_r6._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", comment_r6._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.commentReply);
      }
    }

    function PostDetailComponent_div_38_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_div_38_div_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var comment_r6 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.onShowReplyForm(comment_r6._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostDetailComponent_div_38_div_1_div_8_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostDetailComponent_div_38_div_1_div_9_Template, 7, 2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", comment_r6.commentedBy == null ? null : comment_r6.commentedBy.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (comment_r6.commentedBy == null ? null : comment_r6.commentedBy.firstName) + " " + (comment_r6.commentedBy == null ? null : comment_r6.commentedBy.lastName), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r6.commentText, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r6.commentReplies);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showReplyForm === comment_r6._id);
      }
    }

    function PostDetailComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_38_div_1_Template, 10, 5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.post.comments);
      }
    }

    var PostDetailComponent = /*#__PURE__*/function () {
      function PostDetailComponent(router, route, postQueryService, authenticationService) {
        _classCallCheck(this, PostDetailComponent);

        this.router = router;
        this.route = route;
        this.postQueryService = postQueryService;
        this.authenticationService = authenticationService;
        this.showReplyForm = '';
        this.post = {};
        this.currentUser = this.authenticationService.currentUserValue; // if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(PostDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.route.params.subscribe(function (params) {
            console.log(params);
            _this27.postId = params.id;

            _this27.getPost();
          });
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this28 = this;

          this.postQueryService.getPostById(this.postId, this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this28.post = res;
          });
        }
      }, {
        key: "onComment",
        value: function onComment() {
          var _this29 = this;

          console.log(this.comment);
          var postData = {
            "id": this.postId,
            "commentText": this.comment,
            "commentedByName": this.currentUser.user.firstName + ' ' + this.currentUser.user.lastName,
            "commentedByEmail": this.currentUser.user.email,
            "commentedOn": new Date()
          };
          this.postQueryService.addPostsComment(postData, this.currentUser.token).subscribe(function (data) {
            _this29.getPost(); // this.Topics.push(data);

          });
        }
      }, {
        key: "onCommentReply",
        value: function onCommentReply(id) {
          var _this30 = this;

          console.log(id);
          var postData = {
            "postId": this.postId,
            "commentText": this.commentReply,
            "commentedOn": new Date(),
            "commentId": id
          };
          this.postQueryService.addPostsCommentReply(postData, this.currentUser.token).subscribe(function (data) {
            _this30.getPost(); // this.Topics.push(data);

          });
        }
      }, {
        key: "onShowReplyForm",
        value: function onShowReplyForm(id) {
          this.showReplyForm = id;
        }
      }, {
        key: "getFileType",
        value: function getFileType(filename) {
          var arr = filename.split('.');
          var index = arr.length - 1;
          return arr[index];
        }
      }, {
        key: "goToUserProfile",
        value: function goToUserProfile(id) {
          this.router.navigate(['blogs/profile/' + id]);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['../../../blog/'], {
            relativeTo: this.route
          });
        }
      }]);

      return PostDetailComponent;
    }();

    PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) {
      return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]));
    };

    PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostDetailComponent,
      selectors: [["app-post-detail"]],
      decls: 39,
      vars: 10,
      consts: [[1, "mt-4"], [1, "row"], [1, "col-md-12", "mb-4"], [1, "card", "mb-4"], [1, "card-body"], [1, "h6", "my-4"], [4, "ngIf"], [1, "post", 3, "innerHTML"], [1, "card-header", "font-weight-bold"], [1, "media", "d-block", "d-md-flex", "mt-3"], ["alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto", "z-depth-1", 2, "width", "100px", 3, "src"], [1, "media-body", "text-center", "text-md-left", "ml-md-3", "ml-0"], ["href", "javascript:void(0)", 3, "click"], [1, "mt-0", "font-weight-bold"], ["id", "comment", 1, "card", "mb-3"], [1, "form-group"], ["for", "replyFormComment"], ["id", "replyFormComment", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-info", "btn-md", 3, "click"], [1, "card", "card-comments", "mb-3", 2, "height", "400px", "overflow-y", "scroll"], [1, "view", "overlay"], [1, "embed-responsive", "rounded-top"], ["width", "320", "height", "240", "controls", "", 1, "img-fluid"], ["type", "video/mp4", 3, "src"], ["type", "video/ogg", 3, "src"], ["alt", "", 1, "img-fluid", 3, "src"], ["class", "media d-block d-md-flex mt-4", 4, "ngFor", "ngForOf"], [1, "media", "d-block", "d-md-flex", "mt-4"], ["alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto", 3, "src"], [1, "pull-right", 3, "click"], [1, "fas", "fa-reply"], ["class", "form-group mt-4", 3, "id", 4, "ngIf"], ["class", "media d-block d-md-flex mt-3", 4, "ngFor", "ngForOf"], [1, "form-group", "mt-4", 3, "id"], ["for", "quickReplyFormComment"], ["id", "quickReplyFormComment", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "btn", "btn-info", "btn-sm", 3, "click"]],
      template: function PostDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostDetailComponent_div_7_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_Template_a_click_17_listener() {
            return ctx.goToUserProfile(ctx.post.postedBy == null ? null : ctx.post.postedBy._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostDetailComponent_p_20_Template, 2, 1, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Leave a reply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Your comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostDetailComponent_Template_textarea_ngModelChange_30_listener($event) {
            return ctx.comment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_Template_button_click_32_listener() {
            return ctx.onComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PostDetailComponent_div_38_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.post.category, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.myFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post.postedBy == null ? null : ctx.post.postedBy.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.post.postedBy == null ? null : ctx.post.postedBy.firstName) + " " + (ctx.post.postedBy == null ? null : ctx.post.postedBy.lastName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.postedBy.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.postedBy == null ? null : ctx.post.postedBy.aboutMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.post.comments ? ctx.post.comments.length : 0, " comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.comments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".card-comments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem}\n\nsection[_ngcontent-%COMP%] {\n    font-size:small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsVUFBVTs7QUFFN0I7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbW1lbnRzIGltZ3t3aWR0aDozcmVtfVxuXG5zZWN0aW9uIHtcbiAgICBmb250LXNpemU6c21hbGw7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-detail',
          templateUrl: './post-detail.component.html',
          styleUrls: ['./post-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_pipes/truncare-text.pipe */
    "./src/app/_pipes/truncare-text.pipe.ts");

    function PostsComponent_div_1_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PostsComponent_div_1_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PostsComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_1_div_2_div_1_Template, 7, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_1_div_2_div_2_Template, 4, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getFileType(post_r1.myFile) === "mp4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getFileType(post_r1.myFile) === "jpg" || ctx_r2.getFileType(post_r1.myFile) === "bmp" || ctx_r2.getFileType(post_r1.myFile) === "gif" || ctx_r2.getFileType(post_r1.myFile) === "png");
      }
    }

    function PostsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_1_div_2_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_1_Template_div_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var post_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.gotoDetails(post_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Posted By:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.myFile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, post_r1.shortDescription));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, post_r1.content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((post_r1.postedBy == null ? null : post_r1.postedBy.firstName) + " " + (post_r1.postedBy == null ? null : post_r1.postedBy.lastName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 11, post_r1.postedOn, "dd/MM/yy"), "");
      }
    }

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent(router, authenticationService, postQueryService, route) {
        _classCallCheck(this, PostsComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.posts = [];
        this.Posts = [];
        this.category = '';
        this.currentUser = this.authenticationService.currentUserValue; // if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.route.params.subscribe(function (params) {
            console.log(params);
            _this31.category = params && params.id ? params.id : '';

            _this31.getPosts();
          });
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this32 = this;

          this.postQueryService.getPosts(this.category, this.currentUser.token).subscribe(function (res) {
            _this32.Posts = res['posts'];
          });
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(id) {
          this.router.navigate(['blogs/post-detail/' + id]);
        }
      }, {
        key: "getFileType",
        value: function getFileType(filename) {
          var arr = filename.split('.');
          var index = arr.length - 1;
          return arr[index];
        }
      }]);

      return PostsComponent;
    }();

    PostsComponent.ɵfac = function PostsComponent_Factory(t) {
      return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostsComponent,
      selectors: [["app-posts"]],
      decls: 33,
      vars: 1,
      consts: [[1, "row", "mb-4"], ["class", "col-lg-6 col-md-12 mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [1, "pagination", "pg-blue"], [1, "page-item", "disabled"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], [1, "sr-only"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], [1, "page-item"], ["href", "#", "aria-label", "Next", 1, "page-link"], [1, "col-lg-6", "col-md-12", "mb-4"], [1, "card"], [4, "ngIf"], [1, "card-body", 2, "font-size", "smaller"], [1, "mt-1", "mb-2", "pt-1", "pb-1", "badge", "bg-secondary"], [1, "mt-1", "pt-1", "pb-1", 2, "color", "#797979"], [1, "post", 2, "height", "99px", "overflow", "hidden", 3, "innerHTML"], [1, "clearfix"], [1, "btn", "btn-sm", "teal", "white-text", 3, "click"], [1, "mt-0", 2, "float", "right"], [1, "mt-0", "pr-2", 2, "color", "gray", "float", "right"], [1, "mt-0", "pr-2"], [1, "fa", "fa-clock-o"], [1, "view", "overlay"], [1, "embed-responsive", "rounded-top", 2, "height", "250px", "text-align", "-webkit-center"], ["width", "320", "height", "240", "controls", ""], ["type", "video/mp4", 3, "src"], ["type", "video/ogg", 3, "src"], ["alt", "", 1, "img-fluid", 2, "width", "100%", 3, "src"]],
      template: function PostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_1_Template, 24, 14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncateTextPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-posts',
          templateUrl: './posts.component.html',
          styleUrls: ['./posts.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 0,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sections/sections.component.ts":
  /*!************************************************!*\
    !*** ./src/app/sections/sections.component.ts ***!
    \************************************************/

  /*! exports provided: SectionsComponent */

  /***/
  function srcAppSectionsSectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionsComponent", function () {
      return SectionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionsComponent = /*#__PURE__*/function () {
      function SectionsComponent() {
        _classCallCheck(this, SectionsComponent);
      }

      _createClass(SectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionsComponent;
    }();

    SectionsComponent.ɵfac = function SectionsComponent_Factory(t) {
      return new (t || SectionsComponent)();
    };

    SectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionsComponent,
      selectors: [["app-sections"]],
      decls: 40,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"]],
      template: function SectionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Patna ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Devvrat Priyadarshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+917909076207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Devvrat Priyadarshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+917909076207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Bangalore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Devvrat Priyadarshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+917909076207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Devvrat Priyadarshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+917909076207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Hyderabad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Devvrat Priyadarshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+917909076207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Devvrat Priyadarshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+917909076207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sections',
          templateUrl: './sections.component.html',
          styleUrls: ['./sections.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/topic-detail/topic-detail.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/topic-detail/topic-detail.component.ts ***!
    \********************************************************/

  /*! exports provided: TopicDetailComponent */

  /***/
  function srcAppTopicDetailTopicDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicDetailComponent", function () {
      return TopicDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopicDetailComponent_div_34_div_1_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commentReply_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", commentReply_r6.commentedByName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", commentReply_r6.commentText, " ");
      }
    }

    function TopicDetailComponent_div_34_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopicDetailComponent_div_34_div_1_div_8_div_1_Template, 6, 2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r2.commentReplies);
      }
    }

    function TopicDetailComponent_div_34_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopicDetailComponent_div_34_div_1_div_9_Template_textarea_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.commentReply = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_div_34_div_1_div_9_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.onCommentReply(comment_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", comment_r2._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.commentReply);
      }
    }

    function TopicDetailComponent_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_div_34_div_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var comment_r2 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.onShowReplyForm(comment_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopicDetailComponent_div_34_div_1_div_8_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopicDetailComponent_div_34_div_1_div_9_Template, 7, 2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r2.commentedByName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r2.commentText, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r2.commentReplies);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showReplyForm === comment_r2._id);
      }
    }

    function TopicDetailComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopicDetailComponent_div_34_div_1_Template, 10, 4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.topic.comments);
      }
    }

    var TopicDetailComponent = /*#__PURE__*/function () {
      function TopicDetailComponent(router, route, postQueryService, authenticationService) {
        _classCallCheck(this, TopicDetailComponent);

        this.router = router;
        this.route = route;
        this.postQueryService = postQueryService;
        this.authenticationService = authenticationService;
        this.topic = {};
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(TopicDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.route.params.subscribe(function (params) {
            console.log(params);
            _this33.topicId = params.id;

            _this33.getTopic();
          });
        }
      }, {
        key: "getTopic",
        value: function getTopic() {
          var _this34 = this;

          this.postQueryService.getTopicById(this.topicId, this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this34.topic = res;
          });
        }
      }, {
        key: "onComment",
        value: function onComment() {
          var _this35 = this;

          var postData = {
            "id": this.topicId,
            "commentText": this.comment,
            "commentedOn": new Date()
          };
          this.postQueryService.addComment(postData, this.currentUser.token).subscribe(function (data) {
            _this35.getTopic(); // this.Topics.push(data);

          });
        }
      }, {
        key: "onCommentReply",
        value: function onCommentReply(id) {
          var _this36 = this;

          console.log(id);
          var postData = {
            "postId": this.topicId,
            "commentText": this.commentReply,
            "commentedOn": new Date(),
            "commentId": id
          };
          this.postQueryService.addTopicsCommentReply(postData, this.currentUser.token).subscribe(function (data) {
            _this36.getTopic(); // this.Topics.push(data);

          });
        }
      }, {
        key: "onShowReplyForm",
        value: function onShowReplyForm(id) {
          this.showReplyForm = id;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['../../../forum/'], {
            relativeTo: this.route
          });
        }
      }]);

      return TopicDetailComponent;
    }();

    TopicDetailComponent.ɵfac = function TopicDetailComponent_Factory(t) {
      return new (t || TopicDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]));
    };

    TopicDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopicDetailComponent,
      selectors: [["app-topic-detail"]],
      decls: 35,
      vars: 13,
      consts: [[1, "mb-2", 2, "margin-top", "-3rem"], [3, "click"], [1, "fa", "fa-arrow-left"], [1, "mt-4"], [1, "row"], [1, "col-md-12", "mb-4"], [1, "card", "mb-4"], [1, "card-body"], [1, "h6", "my-4"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-clock-o"], ["id", "comment", 1, "card", "mb-3"], [1, "card-header", "font-weight-bold"], [1, "form-group"], ["for", "replyFormComment"], ["id", "replyFormComment", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-info", "btn-md", 3, "click"], [1, "card", "card-comments", "mb-3", 2, "height", "400px", "overflow-y", "scroll"], [4, "ngIf"], ["class", "media d-block d-md-flex mt-4", 4, "ngFor", "ngForOf"], [1, "media", "d-block", "d-md-flex", "mt-4"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg", "alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto"], [1, "media-body", "text-center", "text-md-left", "ml-md-3", "ml-0"], [1, "mt-0", "font-weight-bold"], [1, "pull-right", 3, "click"], [1, "fas", "fa-reply"], ["class", "form-group mt-4", 3, "id", 4, "ngIf"], ["class", "media d-block d-md-flex mt-3", 4, "ngFor", "ngForOf"], [1, "media", "d-block", "d-md-flex", "mt-3"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg", "alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto"], [1, "form-group", "mt-4", 3, "id"], ["for", "quickReplyFormComment"], ["id", "quickReplyFormComment", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "btn", "btn-info", "btn-sm", 3, "click"]],
      template: function TopicDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_Template_a_click_1_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " See all topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Leave a reply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopicDetailComponent_Template_textarea_ngModelChange_26_listener($event) {
            return ctx.comment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_Template_button_click_28_listener() {
            return ctx.onComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TopicDetailComponent_div_34_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.topic.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topic.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Posted on : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 7, ctx.topic.postedOn, "dd MMM"), " @ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 10, ctx.topic.postedOn, "HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.topic.comments ? ctx.topic.comments.length : 0, " comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topic.comments);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".post[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.topic[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 12%;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.pull-left[_ngcontent-%COMP%]{\n    float:left;\n}\n.pull-right[_ngcontent-%COMP%]{\n    float:right;\n}\n.topic[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 88%;\n}\n.post[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 85%;\n    padding-right: 30px;\n    padding-top: 20px;\n    padding-bottom: 15px;\n    color: #989c9e;\n    font-size: 14px;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 25px;\n}\n.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #363838;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\np[_ngcontent-%COMP%] {\n    margin: 0 0 10px;\n}\n.postinfobot[_ngcontent-%COMP%] {\n    border-top: solid 1px #f1f1f1;\n    line-height: 50px;\n    padding: 0 30px 0 94px;\n}\n.postinfobot[_ngcontent-%COMP%]   .likeblock[_ngcontent-%COMP%] {\n    width: 120px;\n}\n.up[_ngcontent-%COMP%] {\n    color: #1abc9c;\n    font-size: 12px;\n}\n.down[_ngcontent-%COMP%] {\n    color: #db7a7a;\n    font-size: 12px;\n    margin-left: 20px;\n}\n.postinfobot[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%] {\n    width: 300px;\n    margin-left: 18px;\n    font-size: 12px;\n    color: #bdc3c7;\n    font-family: 'Open Sans Regular', sans-serif;\n}\n.postinfobot[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #bdc3c7;\n    padding-right: 8px;\n}\n.textwraper[_ngcontent-%COMP%] {\n    background-color: #f1f1f1;\n    border-radius: 2px;\n    padding: 18px;\n}\n.postreply[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bdc3c7;\n    display: block;\n    font-family: 'Open Sans Regular', sans-serif;\n}\n.textwraper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border: none;\n    box-shadow: none;\n    background-color: #f1f1f1;\n    width: 100%;\n}\n.post[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%], .postreply[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bdc3c7;\n    display: block;\n    font-family: 'Open Sans Regular', sans-serif;\n}\n.btn-post[_ngcontent-%COMP%] {\n    background-color: #1abc9c;\n    box-shadow: none;\n    border-radius: 2px;\n    padding: 10px 15px;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    border: none;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\n.avatar[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n    background-color: #f27777;\n}\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    border-radius: 50%;\n    border: solid 2px #ffffff;\n}\n.avatar[_ngcontent-%COMP%] {\n    position: relative;\n}\n.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 37px;\n    margin-left: 5px;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height:37px;\n}\n.post[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 48px;\n    border-top: solid 1px #f1f1f1;\n    margin-top: 12px;\n    padding-top: 7px;\n}\n.comments[_ngcontent-%COMP%]{\n}\n.comment[_ngcontent-%COMP%]{\n    padding: 1rem;\n}\n.card-comments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem}\nsection[_ngcontent-%COMP%] {\n    font-size:small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBLG1CQUFtQixVQUFVO0FBQzdCO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RvcGljLWRldGFpbC90b3BpYy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggI2M5Y2NjZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRvcGljIC51c2VyaW5mbyB7XG4gICAgd2lkdGg6IDEyJTtcbn1cblxuLnBvc3QgLnVzZXJpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4IDE1cHg7XG59XG4ucHVsbC1sZWZ0e1xuICAgIGZsb2F0OmxlZnQ7XG59XG4ucHVsbC1yaWdodHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbi50b3BpYyAucG9zdHRleHQge1xuICAgIHdpZHRoOiA4OCU7XG59XG5cbi5wb3N0IC5wb3N0dGV4dCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiAjOTg5YzllO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4ucG9zdCBoMiB7XG4gICAgY29sb3I6ICMzNjM4Mzg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5wIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLnBvc3RpbmZvYm90IHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDMwcHggMCA5NHB4O1xufVxuLnBvc3RpbmZvYm90IC5saWtlYmxvY2sge1xuICAgIHdpZHRoOiAxMjBweDtcbn1cbi51cCB7XG4gICAgY29sb3I6ICMxYWJjOWM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRvd24ge1xuICAgIGNvbG9yOiAjZGI3YTdhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wb3N0aW5mb2JvdCAucG9zdGVkIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYmRjM2M3O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xufVxuLnBvc3RpbmZvYm90IC5wb3N0ZWQgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjYmRjM2M3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnRleHR3cmFwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG59XG4ucG9zdHJlcGx5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiZGMzYzc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG59XG4udGV4dHdyYXBlciB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wb3N0IGJsb2NrcXVvdGUgLm9yaWdpbmFsLCAucG9zdHJlcGx5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiZGMzYzc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG59XG4uYnRuLXBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uYXZhdGFyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmF2YXRhciAucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3Nzc3O1xufVxuLmF2YXRhciAuc3RhdHVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZmZmZjtcbn1cbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0IC5hdmF0YXIge1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uYXZhdGFyIGltZyB7XG4gICAgaGVpZ2h0OjM3cHg7XG59XG4ucG9zdCAuaWNvbnMge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5jb21tZW50c3tcbn1cbi5jb21tZW50e1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jYXJkLWNvbW1lbnRzIGltZ3t3aWR0aDozcmVtfVxuc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOnNtYWxsO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topic-detail',
          templateUrl: './topic-detail.component.html',
          styleUrls: ['./topic-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/topic-list/topic-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/topic-list/topic-list.component.ts ***!
    \****************************************************/

  /*! exports provided: TopicListComponent */

  /***/
  function srcAppTopicListTopicListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicListComponent", function () {
      return TopicListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/post-query.service */
    "./src/app/_services/post-query.service.ts");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopicListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicListComponent_div_0_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var topic_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.gotoDetails(topic_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var topic_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r1.comments.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 4, topic_r1.postedOn, "dd/MM/yy"), "");
      }
    }

    var TopicListComponent = /*#__PURE__*/function () {
      function TopicListComponent(router, route, postQueryService, authenticationService) {
        _classCallCheck(this, TopicListComponent);

        this.router = router;
        this.route = route;
        this.postQueryService = postQueryService;
        this.authenticationService = authenticationService;
        this.topics = [];
        this.Topics = [];
        this.category = '';
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) this.router.navigate(['/']);
      }

      _createClass(TopicListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.route.params.subscribe(function (params) {
            console.log(params);
            _this37.category = params && params.id ? params.id : '';

            _this37.getTopics();
          });
        }
      }, {
        key: "getTopics",
        value: function getTopics() {
          var _this38 = this;

          this.postQueryService.getTopics(this.category, this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this38.Topics = res;
          });
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(id) {
          this.router.navigate(['forum/topic-detail/' + id]);
        }
      }, {
        key: "incLike",
        value: function incLike() {
          this.postQueryService.like().subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "decLike",
        value: function decLike() {
          this.postQueryService.like().subscribe(function (res) {
            console.log(res);
          });
        }
      }]);

      return TopicListComponent;
    }();

    TopicListComponent.ɵfac = function TopicListComponent_Factory(t) {
      return new (t || TopicListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]));
    };

    TopicListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopicListComponent,
      selectors: [["app-topic-list"]],
      decls: 1,
      vars: 1,
      consts: [["class", "post", 4, "ngFor", "ngForOf"], [1, "post"], [1, "wrap-ut", "pull-left"], [1, "userinfo", "pull-left"], [1, "avatar"], ["src", "assets/images/birdie.png", "alt", "", 2, "height", "37px"], [1, "status", "green"], [1, "icons"], [1, "posttext", "pull-left"], [3, "click"], [1, "clearfix"], [1, "postinfo", "pull-left"], [1, "comments"], [1, "commentbg"], [1, "mark"], [1, "time"], [1, "fa", "fa-clock-o"]],
      template: function TopicListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopicListComponent_div_0_Template, 25, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Topics);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".content[_ngcontent-%COMP%] {\n    background-color: #ecf0f1;\n    border-top: solid 1px #e0e4e5;\n}\n.post[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.post[_ngcontent-%COMP%]   .wrap-ut[_ngcontent-%COMP%] {\n    width: 85%;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.post[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 85%;\n    padding-right: 30px;\n    padding-top: 20px;\n    padding-bottom: 15px;\n    color: #989c9e;\n    font-size: 14px;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 25px;\n}\n.post[_ngcontent-%COMP%]   .postinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    border-left: solid 1px #f1f1f1;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    padding: 18px 0 25px 0;\n    text-align: center;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commentbg[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    border-radius: 2px;\n    display: inline-block;\n    padding: 12px 17px;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    position: relative;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    color: #9da6aa;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    color: #9da6aa;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 37px;\n    margin-left: 5px;\n}\n.avatar[_ngcontent-%COMP%] {\n    position: relative;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n.avatar[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n    background-color: #80d3ab;\n}\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    border-radius: 50%;\n    border: solid 2px #ffffff;\n}\n.post[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 48px;\n    border-top: solid 1px #f1f1f1;\n    margin-top: 12px;\n    padding-top: 7px;\n}\n.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #363838;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.pull-left[_ngcontent-%COMP%]{\n    float:left;\n}\n.pull-right[_ngcontent-%COMP%]{\n    float:right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtbGlzdC90b3BpYy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90b3BpYy1saXN0L3RvcGljLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTBlNGU1O1xufVxuLnBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzljY2NkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucG9zdCAud3JhcC11dCB7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuLnBvc3QgLnVzZXJpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4IDE1cHg7XG59XG4ucG9zdCAucG9zdHRleHQge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzk4OWM5ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLnBvc3QgLnBvc3RpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2YxZjFmMTtcbn1cbi5wb3N0IC5jb21tZW50cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMThweCAwIDI1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9zdCAuY29tbWVudHMgLmNvbW1lbnRiZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEycHggMTdweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLnZpZXdzIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBjb2xvcjogIzlkYTZhYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnZpZXdzIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wb3N0IC50aW1lIHtcbiAgICBjb2xvcjogIzlkYTZhYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnRpbWUgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBvc3QgLmF2YXRhciB7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXZhdGFyIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwZDNhYjtcbn1cbi5hdmF0YXIgLnN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG59XG4ucG9zdCAuaWNvbnMge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5wb3N0IGgyIHtcbiAgICBjb2xvcjogIzM2MzgzODtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnB1bGwtbGVmdHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLnB1bGwtcmlnaHR7XG4gICAgZmxvYXQ6cmlnaHQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topic-list',
          templateUrl: './topic-list.component.html',
          styleUrls: ['./topic-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/update-profile/update-profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/update-profile/update-profile.component.ts ***!
    \************************************************************/

  /*! exports provided: UpdateProfileComponent */

  /***/
  function srcAppUpdateProfileUpdateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function () {
      return UpdateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdateProfileComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_div_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.error = !ctx_r1.error;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is an ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".alert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". Use this to show important messages to the user. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UpdateProfileComponent = /*#__PURE__*/function () {
      function UpdateProfileComponent(formBuilder, router, route, authenticationService, userService) {
        _classCallCheck(this, UpdateProfileComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.error = false;
        this.currentUser = this.authenticationService.currentUserValue;

        if (!this.currentUser) {
          this.router.navigate(['/']);
        } else {// this.id = this.currentUser.user.id;
        }
      }

      _createClass(UpdateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserDetails();
          console.log(this.currentUser);
          this.postContent = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            aboutMe: [''],
            myFile: ['']
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this39 = this;

          this.userService.getUserDetails(this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this39.currentUser['user'] = res['user'];
            _this39.postContent = _this39.formBuilder.group({
              firstName: [_this39.currentUser.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              lastName: [_this39.currentUser.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: [_this39.currentUser.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              company: [_this39.currentUser.user.company, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              aboutMe: [_this39.currentUser.user.aboutMe],
              myFile: [_this39.currentUser.user.photo]
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var file = event.target.files[0];
          this.postContent.patchValue({
            myFile: file
          });
          this.postContent.get('myFile').updateValueAndValidity();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this40 = this;

          var profileData = {
            "firstName": this.postContent.value.firstName,
            "lastName": this.postContent.value.lastName,
            "email": this.postContent.value.email,
            "company": this.postContent.value.company,
            "aboutMe": this.postContent.value.aboutMe,
            "myFile": this.postContent.value.myFile
          };
          this.userService.updateProfile(profileData, this.currentUser.token).subscribe(function (data) {
            if (data === 'error') {
              _this40.error = true;
            }

            _this40.getUserDetails();

            alert("Profile Updated Successfully");
            console.log(data);
          });
        }
      }]);

      return UpdateProfileComponent;
    }();

    UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) {
      return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateProfileComponent,
      selectors: [["app-update-profile"]],
      decls: 50,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12", "personal-info"], ["class", "alert alert-info alert-dismissable", 4, "ngIf"], ["role", "form", "name", "form1", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "col-sm-4"], [1, "text-center"], ["alt", "avatar", 1, "avatar", "img-circle", 2, "height", "150px", 3, "src"], ["type", "file", 1, "form-control", 3, "change"], [1, "col-sm-8"], [1, "form-group"], [1, "col-lg-3", "control-label"], [1, "col-lg-8"], ["type", "text", "value", "Jane", "formControlName", "firstName", 1, "form-control"], ["type", "text", "value", "Bishop", "formControlName", "lastName", 1, "form-control"], ["type", "text", "value", "", "formControlName", "company", 1, "form-control"], ["type", "text", "value", "", "formControlName", "aboutMe", 1, "form-control"], ["type", "text", "value", "janesemail@gmail.com", "formControlName", "email", "disabled", "", 1, "form-control"], [1, "col-md-3", "control-label"], [1, "col-md-8"], ["value", "Save Changes", "type", "submit", 1, "btn", "btn-primary"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-default"], [1, "alert", "alert-info", "alert-dismissable"], ["data-dismiss", "alert", 1, "panel-close", "close", 3, "click"], [1, "fa", "fa-coffee"]],
      template: function UpdateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateProfileComponent_div_6_Template, 8, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Personal info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload a different photo...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateProfileComponent_Template_input_change_16_listener($event) {
            return ctx.uploadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Company:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "About Me:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentUser.user == null ? null : ctx.currentUser.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-profile',
          templateUrl: './update-profile.component.html',
          styleUrls: ['./update-profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-details/user-details.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-details/user-details.component.ts ***!
    \********************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth-service.service */
    "./src/app/login/auth-service.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");

    var UserDetailsComponent = /*#__PURE__*/function () {
      function UserDetailsComponent(formBuilder, router, route, authenticationService, userService) {
        _classCallCheck(this, UserDetailsComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.error = false;
        this.currentUser = this.authenticationService.currentUserValue;

        if (!this.currentUser) {
          this.router.navigate(['/']);
        } else {// this.id = this.currentUser.user.id;
        }
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.route.params.subscribe(function (params) {
            console.log(params);
            _this41.id = params && params.id ? params.id : '';

            _this41.gerUserProfile();
          });
        }
      }, {
        key: "gerUserProfile",
        value: function gerUserProfile() {
          var _this42 = this;

          this.userService.gerUserProfile(this.id, this.currentUser.token).subscribe(function (res) {
            console.log(res);
            _this42.user = res;
          });
        }
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) {
      return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDetailsComponent,
      selectors: [["app-user-details"]],
      decls: 55,
      vars: 4,
      consts: [[1, "row", "py-5", "px-4"], [1, "col-md-12", "mx-auto"], [1, "bg-white", "shadow", "rounded", "overflow-hidden"], [1, "px-4", "pt-0", "pb-4", "cover"], [1, "media", "align-items-end", "profile-head"], [1, "profile", "mr-3"], [2, "height", "150px", 3, "src"], [1, "media-body", "mb-5", "text-white"], [1, "mt-0", "mb-0"], [1, "small", "mb-4"], [1, "fas", "fa-map-marker-alt", "mr-2"], [1, "bg-light", "p-4", "d-flex", "justify-content-end", "text-center"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "font-weight-bold", "mb-0", "d-block"], [1, "text-muted"], [1, "fas", "fa-image", "mr-1"], [1, "fas", "fa-user", "mr-1"], [1, "px-4", "py-3"], [1, "mb-0"], [1, "p-4", "rounded", "shadow-sm", "bg-light"], [1, "font-italic", "mb-0"], [1, "py-4", "px-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["href", "#", 1, "btn", "btn-link", "text-muted"], [1, "row"], [1, "col-lg-6", "mb-2", "pr-lg-1"], ["src", "https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "alt", "", 1, "img-fluid", "rounded", "shadow-sm"], [1, "col-lg-6", "mb-2", "pl-lg-1"], ["src", "https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "alt", "", 1, "img-fluid", "rounded", "shadow-sm"], [1, "col-lg-6", "pr-lg-1", "mb-2"], ["src", "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", "alt", "", 1, "img-fluid", "rounded", "shadow-sm"], [1, "col-lg-6", "pl-lg-1"], ["src", "https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "alt", "", 1, "img-fluid", "rounded", "shadow-sm"]],
      template: function UserDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "215");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "745");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "340");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Recent photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Show all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user == null ? null : ctx.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.user == null ? null : ctx.user.firstName) + " " + (ctx.user == null ? null : ctx.user.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.aboutMe);
        }
      },
      styles: [".profile-head[_ngcontent-%COMP%] {\n    transform: translateY(5rem)\n}\n\n.cover[_ngcontent-%COMP%] {\n    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);\n    background-size: cover;\n    background-repeat: no-repeat\n}\n\nbody[_ngcontent-%COMP%] {\n    background: #654ea3;\n    background: linear-gradient(to right, #e96443, #904e95);\n    min-height: 100vh;\n    overflow-x: hidden\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDZKQUE2SjtJQUM3SixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1REFBdUQ7SUFDdkQsaUJBQWlCO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1oZWFkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSlcbn1cblxuLmNvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzAzMDU0MDg1NjAtODJkMTM3ODFiMzNhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUyJnE9ODApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjNjU0ZWEzO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U5NjQ0MywgIzkwNGU5NSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-details',
          templateUrl: './user-details.component.html',
          styleUrls: ['./user-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
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
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

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
    /*! /Users/chandaroy/Documents/SelfLearning /talentmitra-v2/talentmitra/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map