"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var fs_input_component_component_1 = require("./components/fs-input-component/fs-input-component.component");
var fs_radio_component_component_1 = require("./components/fs-radio-component/fs-radio-component.component");
var fs_component_service_1 = require("./services/fs-component.service");
var elements_service_1 = require("./services/elements.service");
var elements_1 = require("./elements");
var ɵ0 = elements_1.ELEMENTS;
exports.ɵ0 = ɵ0;
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
                { provide: 'elements', useValue: ɵ0 }
            ],
        })
    ], FsComponentModule);
    return FsComponentModule;
    var FsComponentModule_1;
}());
exports.FsComponentModule = FsComponentModule;
//# sourceMappingURL=fs-component.module.js.map