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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forkJoin_1 = require("rxjs/observable/forkJoin");
var operators_1 = require("rxjs/operators");
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
//# sourceMappingURL=elements.service.js.map