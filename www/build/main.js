webpackJsonp([0],{

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topics_topics__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__topics_topics__["a" /* TopicsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Topics" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Results" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicsPage = /** @class */ (function () {
    function TopicsPage(navCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
        this.newTopic = '';
        this.topicList = this.firebaseProvider.getTopics();
        // get all topics from firebase for testing purposes:
        // this.firebaseProvider.getTopics().subscribe(snapshots =>
        // {
        //   snapshots.forEach(snapshot => {
        //       // console.log(snapshot);
        //   });
        // });
    }
    TopicsPage.prototype.addTopic = function () {
        var _this = this;
        this.firebaseProvider.getTopics().subscribe(function (snapshots) {
            if (_this.newTopic.length < 1) {
                return;
            }
            var topicNames = [];
            snapshots.forEach(function (snapshot) {
                topicNames.push(snapshot.name);
            });
            if (topicNames.indexOf(_this.newTopic) <= -1) {
                _this.firebaseProvider.addTopic(_this.newTopic);
            }
        });
    };
    TopicsPage.prototype.removeTopic = function (id) {
        this.firebaseProvider.removeTopic(id);
    };
    TopicsPage.prototype.updateVote = function (topic) {
        if (topic.checked) {
            console.log("Add a vote for " + topic.name);
        }
        else {
            console.log("Remove a vote for " + topic.name);
        }
    };
    TopicsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-topics',template:/*ion-inline-start:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/topics/topics.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Topics\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newTopic" placeholder="New Topic"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addTopic()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-list *ngFor="let topic of topicList | async">\n      <ion-item>\n        <ion-label>{{topic.name}}</ion-label>\n        <ion-checkbox \n          [(ngModel)]="topic.checked"\n          (ionChange)="updateVote(topic);">\n        </ion-checkbox>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="removeTopic(topic.$key)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n      \n    </ion-list>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/topics/topics.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], TopicsPage);
    return TopicsPage;
}());

//# sourceMappingURL=topics.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.getTopics = function () {
        return this.afd.list('/topics');
    };
    FirebaseProvider.prototype.addTopic = function (name) {
        this.afd.list('/topics').set(name, {
            name: name,
            voteCount: 1,
            commentList: []
        });
    };
    FirebaseProvider.prototype.removeTopic = function (id) {
        this.afd.list('/topics').remove(id);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ResultsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ResultsPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ResultsPage.prototype, "lineCanvas", void 0);
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/results/results.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Results\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n      <ion-card-header>\n        Bar Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Doughnut Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Line Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/results/results.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ClassConfusion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to ClassConfusion!</h2>\n  <p>\n    You are currently enrolled in the following classes which are using ClassConfusion: (list of classes to click on/add a new class option)\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_topics_topics__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_results_results__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database_deprecated__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_firebase_firebase__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyAumOiHzaCRwzVbAU8HqmTVrBJRN3eUF0I",
    authDomain: "classconfusion.firebaseapp.com",
    databaseURL: "https://classconfusion.firebaseio.com",
    projectId: "classconfusion",
    storageBucket: "classconfusion.appspot.com",
    messagingSenderId: "328545335066"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_topics_topics__["a" /* TopicsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_topics_topics__["a" /* TopicsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_firebase_firebase__["a" /* FirebaseProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bscharf/Documents/School/EECS 394/ClassConfusion/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 284,
	"./af.js": 284,
	"./ar": 285,
	"./ar-dz": 286,
	"./ar-dz.js": 286,
	"./ar-kw": 287,
	"./ar-kw.js": 287,
	"./ar-ly": 288,
	"./ar-ly.js": 288,
	"./ar-ma": 289,
	"./ar-ma.js": 289,
	"./ar-sa": 290,
	"./ar-sa.js": 290,
	"./ar-tn": 291,
	"./ar-tn.js": 291,
	"./ar.js": 285,
	"./az": 292,
	"./az.js": 292,
	"./be": 293,
	"./be.js": 293,
	"./bg": 294,
	"./bg.js": 294,
	"./bm": 295,
	"./bm.js": 295,
	"./bn": 296,
	"./bn.js": 296,
	"./bo": 297,
	"./bo.js": 297,
	"./br": 298,
	"./br.js": 298,
	"./bs": 299,
	"./bs.js": 299,
	"./ca": 300,
	"./ca.js": 300,
	"./cs": 301,
	"./cs.js": 301,
	"./cv": 302,
	"./cv.js": 302,
	"./cy": 303,
	"./cy.js": 303,
	"./da": 304,
	"./da.js": 304,
	"./de": 305,
	"./de-at": 306,
	"./de-at.js": 306,
	"./de-ch": 307,
	"./de-ch.js": 307,
	"./de.js": 305,
	"./dv": 308,
	"./dv.js": 308,
	"./el": 309,
	"./el.js": 309,
	"./en-au": 310,
	"./en-au.js": 310,
	"./en-ca": 311,
	"./en-ca.js": 311,
	"./en-gb": 312,
	"./en-gb.js": 312,
	"./en-ie": 313,
	"./en-ie.js": 313,
	"./en-il": 314,
	"./en-il.js": 314,
	"./en-nz": 315,
	"./en-nz.js": 315,
	"./eo": 316,
	"./eo.js": 316,
	"./es": 317,
	"./es-do": 318,
	"./es-do.js": 318,
	"./es-us": 319,
	"./es-us.js": 319,
	"./es.js": 317,
	"./et": 320,
	"./et.js": 320,
	"./eu": 321,
	"./eu.js": 321,
	"./fa": 322,
	"./fa.js": 322,
	"./fi": 323,
	"./fi.js": 323,
	"./fo": 324,
	"./fo.js": 324,
	"./fr": 325,
	"./fr-ca": 326,
	"./fr-ca.js": 326,
	"./fr-ch": 327,
	"./fr-ch.js": 327,
	"./fr.js": 325,
	"./fy": 328,
	"./fy.js": 328,
	"./gd": 329,
	"./gd.js": 329,
	"./gl": 330,
	"./gl.js": 330,
	"./gom-latn": 331,
	"./gom-latn.js": 331,
	"./gu": 332,
	"./gu.js": 332,
	"./he": 333,
	"./he.js": 333,
	"./hi": 334,
	"./hi.js": 334,
	"./hr": 335,
	"./hr.js": 335,
	"./hu": 336,
	"./hu.js": 336,
	"./hy-am": 337,
	"./hy-am.js": 337,
	"./id": 338,
	"./id.js": 338,
	"./is": 339,
	"./is.js": 339,
	"./it": 340,
	"./it.js": 340,
	"./ja": 341,
	"./ja.js": 341,
	"./jv": 342,
	"./jv.js": 342,
	"./ka": 343,
	"./ka.js": 343,
	"./kk": 344,
	"./kk.js": 344,
	"./km": 345,
	"./km.js": 345,
	"./kn": 346,
	"./kn.js": 346,
	"./ko": 347,
	"./ko.js": 347,
	"./ky": 348,
	"./ky.js": 348,
	"./lb": 349,
	"./lb.js": 349,
	"./lo": 350,
	"./lo.js": 350,
	"./lt": 351,
	"./lt.js": 351,
	"./lv": 352,
	"./lv.js": 352,
	"./me": 353,
	"./me.js": 353,
	"./mi": 354,
	"./mi.js": 354,
	"./mk": 355,
	"./mk.js": 355,
	"./ml": 356,
	"./ml.js": 356,
	"./mn": 357,
	"./mn.js": 357,
	"./mr": 358,
	"./mr.js": 358,
	"./ms": 359,
	"./ms-my": 360,
	"./ms-my.js": 360,
	"./ms.js": 359,
	"./mt": 361,
	"./mt.js": 361,
	"./my": 362,
	"./my.js": 362,
	"./nb": 363,
	"./nb.js": 363,
	"./ne": 364,
	"./ne.js": 364,
	"./nl": 365,
	"./nl-be": 366,
	"./nl-be.js": 366,
	"./nl.js": 365,
	"./nn": 367,
	"./nn.js": 367,
	"./pa-in": 368,
	"./pa-in.js": 368,
	"./pl": 369,
	"./pl.js": 369,
	"./pt": 370,
	"./pt-br": 371,
	"./pt-br.js": 371,
	"./pt.js": 370,
	"./ro": 372,
	"./ro.js": 372,
	"./ru": 373,
	"./ru.js": 373,
	"./sd": 374,
	"./sd.js": 374,
	"./se": 375,
	"./se.js": 375,
	"./si": 376,
	"./si.js": 376,
	"./sk": 377,
	"./sk.js": 377,
	"./sl": 378,
	"./sl.js": 378,
	"./sq": 379,
	"./sq.js": 379,
	"./sr": 380,
	"./sr-cyrl": 381,
	"./sr-cyrl.js": 381,
	"./sr.js": 380,
	"./ss": 382,
	"./ss.js": 382,
	"./sv": 383,
	"./sv.js": 383,
	"./sw": 384,
	"./sw.js": 384,
	"./ta": 385,
	"./ta.js": 385,
	"./te": 386,
	"./te.js": 386,
	"./tet": 387,
	"./tet.js": 387,
	"./tg": 388,
	"./tg.js": 388,
	"./th": 389,
	"./th.js": 389,
	"./tl-ph": 390,
	"./tl-ph.js": 390,
	"./tlh": 391,
	"./tlh.js": 391,
	"./tr": 392,
	"./tr.js": 392,
	"./tzl": 393,
	"./tzl.js": 393,
	"./tzm": 394,
	"./tzm-latn": 395,
	"./tzm-latn.js": 395,
	"./tzm.js": 394,
	"./ug-cn": 396,
	"./ug-cn.js": 396,
	"./uk": 397,
	"./uk.js": 397,
	"./ur": 398,
	"./ur.js": 398,
	"./uz": 399,
	"./uz-latn": 400,
	"./uz-latn.js": 400,
	"./uz.js": 399,
	"./vi": 401,
	"./vi.js": 401,
	"./x-pseudo": 402,
	"./x-pseudo.js": 402,
	"./yo": 403,
	"./yo.js": 403,
	"./zh-cn": 404,
	"./zh-cn.js": 404,
	"./zh-hk": 405,
	"./zh-hk.js": 405,
	"./zh-tw": 406,
	"./zh-tw.js": 406
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 582;

/***/ })

},[408]);
//# sourceMappingURL=main.js.map