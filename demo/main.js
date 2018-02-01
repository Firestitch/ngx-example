webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"attempts\":0,\"debug\":false,\"root\":null,\"includeRoot\":false}!../src/components/fs-example-component/fs-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  color: rgba(0, 0, 0, .54);\n  font-size: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.example-code {\n  border-bottom: 1px solid rgba(0, 0, 0, .1);\n  padding: 16px 24px;\n  min-height: 64px;\n}", "", {"version":3,"sources":["D:/Projects/Firestitch/component-boilerplate/src/components/fs-example-component/D:/Projects/Firestitch/component-boilerplate/fs-example.component.css"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,gBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;CACD;;AAED;EACE,2CAAA;EACA,mBAAA;EACA,iBAAA;CACD","file":"fs-example.component.css","sourcesContent":["mat-toolbar {\r\n  color: rgba(0,0,0,0.54);\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content:\r\n  space-between\r\n}\r\n.example-code {\r\n  border-bottom: 1px solid rgba(0,0,0,0.1);\r\n  padding: 16px 24px;\r\n  min-height: 64px\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/fs-examples/fs-examples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"fs-examples.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/components/fs-example-component/fs-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"attempts\":0,\"debug\":false,\"root\":null,\"includeRoot\":false}!../src/components/fs-example-component/fs-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-example-component/fs-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z2\">\r\n  <mat-toolbar>\r\n      <span>{{title}}</span>\r\n      <button mat-icon-button (click)=\"toggleContent()\">\r\n        <mat-icon>code</mat-icon>\r\n      </button>\r\n  </mat-toolbar>\r\n  <div *ngIf=\"showTabs\">\r\n    <mat-tab-group>\r\n      <div *ngFor=\"let tab of tabs\">\r\n        <mat-tab label=\"{{tab.type | uppercase}}\">\r\n          <pre class=\"example-code html\">{{tab.code}}</pre>\r\n        </mat-tab>\r\n      </div>\r\n    </mat-tab-group>\r\n</div>\r\n  <mat-card class=\"mat-elevation-z0\">\r\n    <div #items>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../src/components/fs-example-component/fs-example.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var http_1 = __webpack_require__("../node_modules/@angular/common/esm2015/http.js");
var fs_example_service_1 = __webpack_require__("../src/services/fs-example.service.ts");
var angular2_highlight_js_1 = __webpack_require__("../node_modules/angular2-highlight-js/lib/highlight-js.module.js");
var FsExampleComponent = /** @class */ (function () {
    function FsExampleComponent(http, exampleService, highlightService) {
        this.http = http;
        this.exampleService = exampleService;
        this.highlightService = highlightService;
        this.showTabs = false;
    }
    FsExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var order = ['html', 'ts', 'css'];
        // console.log(this.highlightService.highlight('html', `<h1></h1>`))
        this.exampleService.getElementCode(this.componentName).subscribe(function (elem) {
            console.log(elem);
            _this.exampleService.getFileContents(_this.componentName, elem.children)
                .subscribe(function (files) {
                _this.tabs = files.sort(function (a, b) {
                    return order.indexOf(a.type) - order.indexOf(b.type);
                });
            });
        });
    };
    FsExampleComponent.prototype.toggleContent = function () {
        this.showTabs = !this.showTabs;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsExampleComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsExampleComponent.prototype, "componentName", void 0);
    FsExampleComponent = __decorate([
        core_1.Component({
            selector: 'fs-example',
            template: __webpack_require__("../src/components/fs-example-component/fs-example.component.html"),
            styles: [__webpack_require__("../src/components/fs-example-component/fs-example.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            fs_example_service_1.FsExampleService,
            angular2_highlight_js_1.HighlightJsService])
    ], FsExampleComponent);
    return FsExampleComponent;
}());
exports.FsExampleComponent = FsExampleComponent;


/***/ }),

/***/ "../src/fs-example.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var angular2_highlight_js_1 = __webpack_require__("../node_modules/angular2-highlight-js/lib/highlight-js.module.js");
var fs_example_component_1 = __webpack_require__("../src/components/fs-example-component/fs-example.component.ts");
var fs_example_service_1 = __webpack_require__("../src/services/fs-example.service.ts");
var FsComponentModule = /** @class */ (function () {
    function FsComponentModule() {
    }
    FsComponentModule_1 = FsComponentModule;
    FsComponentModule.forRoot = function () {
        return {
            ngModule: FsComponentModule_1,
            providers: [fs_example_service_1.FsExampleService]
        };
    };
    FsComponentModule = FsComponentModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_module_1.AppMaterialModule,
                angular2_highlight_js_1.HighlightJsModule
            ],
            // do I need this?
            exports: [
                fs_example_component_1.FsExampleComponent
            ],
            entryComponents: [],
            declarations: [
                fs_example_component_1.FsExampleComponent
            ],
            providers: [
                fs_example_service_1.FsExampleService,
                angular2_highlight_js_1.HighlightJsService
            ],
        })
    ], FsComponentModule);
    return FsComponentModule;
    var FsComponentModule_1;
}());
exports.FsComponentModule = FsComponentModule;


/***/ }),

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-example.module.ts"));
// export * from './components/fs-example-component';
__export(__webpack_require__("../src/services/fs-example.service.ts"));


/***/ }),

/***/ "../src/services/fs-example.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var http_1 = __webpack_require__("../node_modules/@angular/common/esm2015/http.js");
var forkJoin_1 = __webpack_require__("../node_modules/rxjs/observable/forkJoin.js");
var operators_1 = __webpack_require__("../node_modules/rxjs/operators.js");
var FsExampleService = /** @class */ (function () {
    function FsExampleService(http) {
        this.http = http;
    }
    FsExampleService.prototype.getElementCode = function (name) {
        var tapData = function (res) {
            return res.children.filter(function (child) { return child.name === name; })[0];
        };
        return this.http.get('assets/components.json')
            .pipe(operators_1.map(tapData));
    };
    FsExampleService.prototype.getFileContents = function (name, paths) {
        var _this = this;
        var fileCode = paths.reduce(function (a, child) {
            if (RegExp(name).test(child.name)) {
                var type_1 = child.extension.replace(/\./, '');
                var call = _this.http.get(child.path, { responseType: 'text' }).pipe(operators_1.map(function (code) { return ({ type: type_1, code: code }); }));
                return a.concat([call]);
            }
            return a;
        }, []);
        return forkJoin_1.forkJoin.apply(void 0, fileCode);
    };
    FsExampleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FsExampleService);
    return FsExampleService;
}());
exports.FsExampleService = FsExampleService;


/***/ }),

/***/ "../tools lazy recursive":
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
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overview\">\r\n    <h1>Overview</h1>\r\n    <li><b>npm run serve</b> Starts the playground web server</li>\r\n    <li><b>npm run lint</b> Validates the package</li>\r\n    <li><b>npm run release</b> Builds the release directory for publishing to NPM</li>\r\n</div>\r\n<fs-examples>\r\n    <h1>Examples</h1> \r\n    <div class=\"example\">\r\n        <p>This is some text that could go above, and maybe below</p>\r\n        <fs-example title=\"Input Component\" componentName=\"fs-input-component\">\r\n            <fs-input-component></fs-input-component>\r\n        </fs-example>\r\n    </div>\r\n    <div class=\"example\">\r\n        <p>This is some more text and I don't know what else to say</p>\r\n        <fs-example title=\"Radio Component\" componentName=\"fs-radio-component\">\r\n            <fs-radio-component></fs-radio-component>\r\n        </fs-example>\r\n    </div>\r\n</fs-examples>"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/fs-examples/fs-examples.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/fs-examples/fs-examples.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/fs-examples/fs-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./app/components/fs-examples/fs-examples.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsExamplesComponent = /** @class */ (function () {
    function FsExamplesComponent() {
    }
    FsExamplesComponent = __decorate([
        core_1.Component({
            selector: 'fs-examples',
            template: __webpack_require__("./app/components/fs-examples/fs-examples.component.html"),
            styles: [__webpack_require__("./app/components/fs-examples/fs-examples.component.css")]
        })
    ], FsExamplesComponent);
    return FsExamplesComponent;
}());
exports.FsExamplesComponent = FsExamplesComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var http_1 = __webpack_require__("../node_modules/@angular/common/esm2015/http.js");
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                //FlexLayoutModule,
                http_1.HttpClientModule
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./assets/components/fs-input-component/fs-input-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Component template</h1>\r\nfs-input-component.component.html"

/***/ }),

/***/ "./assets/components/fs-input-component/fs-input-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsInputComponent = /** @class */ (function () {
    function FsInputComponent() {
    }
    FsInputComponent = __decorate([
        core_1.Component({
            selector: 'fs-input-component',
            template: __webpack_require__("./assets/components/fs-input-component/fs-input-component.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FsInputComponent);
    return FsInputComponent;
}());
exports.FsInputComponent = FsInputComponent;


/***/ }),

/***/ "./assets/components/fs-radio-component/fs-radio-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Component template</h1>\r\nfs-radio-component.component.html"

/***/ }),

/***/ "./assets/components/fs-radio-component/fs-radio-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsRadioComponent = /** @class */ (function () {
    function FsRadioComponent() {
    }
    FsRadioComponent = __decorate([
        core_1.Component({
            selector: 'fs-radio-component',
            template: __webpack_require__("./assets/components/fs-radio-component/fs-radio-component.component.html"),
            styleUrl: 'fs-radio-component.component.css',
        }),
        __metadata("design:paramtypes", [])
    ], FsRadioComponent);
    return FsRadioComponent;
}());
exports.FsRadioComponent = FsRadioComponent;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var fs_examples_component_1 = __webpack_require__("./app/components/fs-examples/fs-examples.component.ts");
var fs_input_component_component_1 = __webpack_require__("./assets/components/fs-input-component/fs-input-component.component.ts");
var fs_radio_component_component_1 = __webpack_require__("./assets/components/fs-radio-component/fs-radio-component.component.ts");
var PlaygroundModule = /** @class */ (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsComponentModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule
            ],
            declarations: [
                app_component_1.AppComponent,
                fs_examples_component_1.FsExamplesComponent,
                fs_input_component_component_1.FsInputComponent,
                fs_radio_component_component_1.FsRadioComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map