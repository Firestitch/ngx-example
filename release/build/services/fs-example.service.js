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
var forkJoin_1 = require("rxjs/observable/forkJoin");
var operators_1 = require("rxjs/operators");
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
//# sourceMappingURL=fs-example.service.js.map