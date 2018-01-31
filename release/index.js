(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/common/http"), require("rxjs/observable/forkJoin"), require("rxjs/operators"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/fs-playground", ["@angular/core", "@angular/common", "@angular/common/http", "rxjs/observable/forkJoin", "rxjs/operators"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/fs-playground"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/common/http"), require("rxjs/observable/forkJoin"), require("rxjs/operators"));
	else
		root["@firestitch/fs-playground"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/common/http"], root["rxjs/observable/forkJoin"], root["rxjs/operators"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_common_http__, __WEBPACK_EXTERNAL_MODULE_rxjs_observable_forkJoin__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__) {
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

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".test-component {\n  font-weight: 600;\n}\n\n", "", {"version":3,"sources":["D:/Projects/Firestitch/component-boilerplate/src/D:/Projects/Firestitch/component-boilerplate/src/src/styles.scss","D:/Projects/Firestitch/component-boilerplate/src/D:/Projects/Firestitch/component-boilerplate/styles.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;CCCD","file":"styles.scss","sourcesContent":[".test-component {\r\n  font-weight: 600;\r\n}\r\n",".test-component {\n  font-weight: 600;\n}\n\n"],"sourceRoot":""}]);

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

/***/ "./components/fs-input-component/fs-input-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Component template</h1>\r\nfs-input-component.component.html"

/***/ }),

/***/ "./components/fs-input-component/fs-input-component.component.ts":
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
var FsInputComponent = /** @class */ (function () {
    function FsInputComponent() {
    }
    FsInputComponent = __decorate([
        core_1.Component({
            selector: 'fs-input-component',
            template: __webpack_require__("./components/fs-input-component/fs-input-component.component.html"),
            styles: [__webpack_require__("./styles.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], FsInputComponent);
    return FsInputComponent;
}());
exports.FsInputComponent = FsInputComponent;


/***/ }),

/***/ "./components/fs-input-component/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-input-component/fs-input-component.component.ts"));


/***/ }),

/***/ "./components/fs-radio-component/fs-radio-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Component template</h1>\r\nfs-radio-component.component.html"

/***/ }),

/***/ "./components/fs-radio-component/fs-radio-component.component.ts":
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
var FsRadioComponent = /** @class */ (function () {
    function FsRadioComponent() {
    }
    FsRadioComponent = __decorate([
        core_1.Component({
            selector: 'fs-radio-component',
            template: __webpack_require__("./components/fs-radio-component/fs-radio-component.component.html"),
            styles: [__webpack_require__("./styles.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], FsRadioComponent);
    return FsRadioComponent;
}());
exports.FsRadioComponent = FsRadioComponent;


/***/ }),

/***/ "./elements.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELEMENTS = {
    input: {
        title: 'Input',
        codeCollection: [
            {
                label: 'HTML',
                code: "<h1>Component template</h1>\nfs-component.component.html"
            },
            {
                label: 'TS',
                code: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'fs-component',\n  template: require('./fs-component.component.html'),\n  styles: [ require('../../styles.scss') ],\n})\nexport class FsComponentComponent {\n\n  constructor() {\n  }\n}"
            },
            {
                label: 'CSS',
                code: ""
            }
        ]
    }
};


/***/ }),

/***/ "./fs-component.module.ts":
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
var fs_input_component_component_1 = __webpack_require__("./components/fs-input-component/fs-input-component.component.ts");
var fs_radio_component_component_1 = __webpack_require__("./components/fs-radio-component/fs-radio-component.component.ts");
var fs_component_service_1 = __webpack_require__("./services/fs-component.service.ts");
var elements_service_1 = __webpack_require__("./services/elements.service.ts");
var elements_1 = __webpack_require__("./elements.ts");
var FsComponentModule = /** @class */ (function () {
    function FsComponentModule() {
    }
    FsComponentModule_1 = FsComponentModule;
    FsComponentModule.forRoot = function () {
        return {
            ngModule: FsComponentModule_1,
            providers: [fs_component_service_1.FsComponentService]
        };
    };
    FsComponentModule = FsComponentModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                fs_input_component_component_1.FsInputComponent,
                fs_radio_component_component_1.FsRadioComponent
            ],
            entryComponents: [],
            declarations: [
                fs_input_component_component_1.FsInputComponent,
                fs_radio_component_component_1.FsRadioComponent
            ],
            providers: [
                fs_component_service_1.FsComponentService,
                { provide: 'elementService', useClass: elements_service_1.ElementsService },
                { provide: 'elements', useValue: elements_1.ELEMENTS }
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
__export(__webpack_require__("./fs-component.module.ts"));
__export(__webpack_require__("./components/fs-input-component/index.ts"));
__export(__webpack_require__("./services/fs-component.service.ts"));


/***/ }),

/***/ "./services/elements.service.ts":
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/common/http");
var forkJoin_1 = __webpack_require__("rxjs/observable/forkJoin");
var operators_1 = __webpack_require__("rxjs/operators");
var ElementsService = /** @class */ (function () {
    function ElementsService(http, elements) {
        this.http = http;
        this.elements = elements;
    }
    ElementsService.prototype.getElementCode = function (name) {
        var tapData = function (res) {
            return res.children.filter(function (child) { return child.name === name; })[0];
        };
        return this.http.get('./src/components/components.json')
            .pipe(operators_1.map(tapData));
    };
    ElementsService.prototype.getFileContents = function (name, paths) {
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
    ElementsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('elements')),
        __metadata("design:paramtypes", [http_1.HttpClient, Object])
    ], ElementsService);
    return ElementsService;
}());
exports.ElementsService = ElementsService;


/***/ }),

/***/ "./services/fs-component.service.ts":
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
var FsComponentService = /** @class */ (function () {
    function FsComponentService() {
    }
    FsComponentService.prototype.sayHello = function () {
        console.log('hello');
    };
    FsComponentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FsComponentService);
    return FsComponentService;
}());
exports.FsComponentService = FsComponentService;


/***/ }),

/***/ "./styles.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./styles.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

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