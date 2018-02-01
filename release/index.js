(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common/http"), require("rxjs/observable/forkJoin"), require("rxjs/operators"), require("@angular/common"), require("@angular/material"), require("@angular/cdk/table"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/fs-playground", ["@angular/core", "@angular/common/http", "rxjs/observable/forkJoin", "rxjs/operators", "@angular/common", "@angular/material", "@angular/cdk/table"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/fs-playground"] = factory(require("@angular/core"), require("@angular/common/http"), require("rxjs/observable/forkJoin"), require("rxjs/operators"), require("@angular/common"), require("@angular/material"), require("@angular/cdk/table"));
	else
		root["@firestitch/fs-playground"] = factory(root["@angular/core"], root["@angular/common/http"], root["rxjs/observable/forkJoin"], root["rxjs/operators"], root["@angular/common"], root["@angular/material"], root["@angular/cdk/table"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common_http__, __WEBPACK_EXTERNAL_MODULE_rxjs_observable_forkJoin__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_material__, __WEBPACK_EXTERNAL_MODULE__angular_cdk_table__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/angular2-highlight-js/lib/highlight-js-content.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var HighlightJsContentDirective = (function () {
    function HighlightJsContentDirective(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.done = false;
    }
    HighlightJsContentDirective.prototype.ngOnInit = function () {
        if (this.useBr) {
            hljs.configure({ useBR: true });
        }
    };
    HighlightJsContentDirective.prototype.ngAfterViewChecked = function () {
        if (!this.done) {
            var selector = this.highlightSelector || 'code';
            if (this.elementRef.nativeElement.innerHTML && this.elementRef.nativeElement.querySelector) {
                var snippets_1 = this.elementRef.nativeElement.querySelectorAll(selector);
                this.zone.runOutsideAngular(function () {
                    for (var _i = 0, snippets_2 = snippets_1; _i < snippets_2.length; _i++) {
                        var snippet = snippets_2[_i];
                        hljs.highlightBlock(snippet);
                    }
                });
                this.done = true;
            }
        }
    };
    return HighlightJsContentDirective;
}());
HighlightJsContentDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[highlight-js-content]'
            },] },
];
/** @nocollapse */
HighlightJsContentDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.NgZone, },
]; };
HighlightJsContentDirective.propDecorators = {
    'useBr': [{ type: core_1.Input },],
    'highlightSelector': [{ type: core_1.Input, args: ['highlight-js-content',] },],
};
exports.HighlightJsContentDirective = HighlightJsContentDirective;
//# sourceMappingURL=highlight-js-content.directive.js.map

/***/ }),

/***/ "../node_modules/angular2-highlight-js/lib/highlight-js.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var highlight_js_content_directive_1 = __webpack_require__("../node_modules/angular2-highlight-js/lib/highlight-js-content.directive.js");
var HighlightJsModule = (function () {
    function HighlightJsModule() {
    }
    return HighlightJsModule;
}());
HighlightJsModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [],
                providers: [],
                declarations: [
                    highlight_js_content_directive_1.HighlightJsContentDirective
                ],
                exports: [
                    highlight_js_content_directive_1.HighlightJsContentDirective
                ]
            },] },
];
/** @nocollapse */
HighlightJsModule.ctorParameters = function () { return []; };
exports.HighlightJsModule = HighlightJsModule;
var highlight_js_service_1 = __webpack_require__("../node_modules/angular2-highlight-js/lib/highlight-js.service.js");
exports.HighlightJsService = highlight_js_service_1.HighlightJsService;
//# sourceMappingURL=highlight-js.module.js.map

/***/ }),

/***/ "../node_modules/angular2-highlight-js/lib/highlight-js.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var HighlightJsService = (function () {
    function HighlightJsService() {
    }
    HighlightJsService.prototype.highlight = function (codeBlock, useBr) {
        if (useBr) {
            hljs.configure({ useBR: true });
        }
        hljs.highlightBlock(codeBlock);
    };
    return HighlightJsService;
}());
HighlightJsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
HighlightJsService.ctorParameters = function () { return []; };
exports.HighlightJsService = HighlightJsService;
//# sourceMappingURL=highlight-js.service.js.map

/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./components/fs-example-component/fs-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  color: rgba(0, 0, 0, .54);\n  font-size: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.example-code {\n  border-bottom: 1px solid rgba(0, 0, 0, .1);\n  padding: 16px 24px;\n  min-height: 64px;\n}", "", {"version":3,"sources":["D:/Projects/Firestitch/component-boilerplate/src/components/fs-example-component/D:/Projects/Firestitch/component-boilerplate/fs-example.component.css"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,gBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;CACD;;AAED;EACE,2CAAA;EACA,mBAAA;EACA,iBAAA;CACD","file":"fs-example.component.css","sourcesContent":["mat-toolbar {\r\n  color: rgba(0,0,0,0.54);\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content:\r\n  space-between\r\n}\r\n.example-code {\r\n  border-bottom: 1px solid rgba(0,0,0,0.1);\r\n  padding: 16px 24px;\r\n  min-height: 64px\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../playground/app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("@angular/material");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("@angular/core");
var table_1 = __webpack_require__("@angular/cdk/table");
var http_1 = __webpack_require__("@angular/common/http");
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

/***/ "./components/fs-example-component/fs-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./components/fs-example-component/fs-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/fs-example-component/fs-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z2\">\r\n  <mat-toolbar>\r\n      <span>{{title}}</span>\r\n      <button mat-icon-button (click)=\"toggleContent()\">\r\n        <mat-icon>code</mat-icon>\r\n      </button>\r\n  </mat-toolbar>\r\n  <div *ngIf=\"showTabs\">\r\n    <mat-tab-group>\r\n      <div *ngFor=\"let tab of tabs\">\r\n        <mat-tab label=\"{{tab.type | uppercase}}\">\r\n          <pre class=\"example-code html\">{{tab.code}}</pre>\r\n        </mat-tab>\r\n      </div>\r\n    </mat-tab-group>\r\n</div>\r\n  <mat-card class=\"mat-elevation-z0\">\r\n    <div #items>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./components/fs-example-component/fs-example.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/common/http");
var fs_example_service_1 = __webpack_require__("./services/fs-example.service.ts");
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
            template: __webpack_require__("./components/fs-example-component/fs-example.component.html"),
            styles: [__webpack_require__("./components/fs-example-component/fs-example.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            fs_example_service_1.FsExampleService,
            angular2_highlight_js_1.HighlightJsService])
    ], FsExampleComponent);
    return FsExampleComponent;
}());
exports.FsExampleComponent = FsExampleComponent;


/***/ }),

/***/ "./fs-example.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var material_module_1 = __webpack_require__("../playground/app/material.module.ts");
var angular2_highlight_js_1 = __webpack_require__("../node_modules/angular2-highlight-js/lib/highlight-js.module.js");
var fs_example_component_1 = __webpack_require__("./components/fs-example-component/fs-example.component.ts");
var fs_example_service_1 = __webpack_require__("./services/fs-example.service.ts");
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

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-example.module.ts"));
// export * from './components/fs-example-component';
__export(__webpack_require__("./services/fs-example.service.ts"));


/***/ }),

/***/ "./services/fs-example.service.ts":
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
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/common/http");
var forkJoin_1 = __webpack_require__("rxjs/observable/forkJoin");
var operators_1 = __webpack_require__("rxjs/operators");
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

/***/ "@angular/cdk/table":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_cdk_table__;

/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common_http__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;

/***/ }),

/***/ "rxjs/observable/forkJoin":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_observable_forkJoin__;

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map