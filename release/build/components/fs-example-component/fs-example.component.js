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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var fs_example_service_1 = require("../../services/fs-example.service");
var angular2_highlight_js_1 = require("angular2-highlight-js");
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
            templateUrl: 'fs-example.component.html',
            styleUrls: ['fs-example.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            fs_example_service_1.FsExampleService,
            angular2_highlight_js_1.HighlightJsService])
    ], FsExampleComponent);
    return FsExampleComponent;
}());
exports.FsExampleComponent = FsExampleComponent;
//# sourceMappingURL=fs-example.component.js.map