"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var demo_component_1 = require("./demo.component");
var demo_landing_component_1 = require("./demo-landing/demo-landing.component");
var demo_green_house_component_1 = require("./demo-green-house/demo-green-house.component");
var routes = [
    {
        path: '',
        component: demo_component_1.DemoComponent,
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { path: 'landing', component: demo_landing_component_1.DemoLandingComponent },
            { path: 'green-house', component: demo_green_house_component_1.DemoGreenHouseComponent }
        ]
    }
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());
exports.DemoRoutingModule = DemoRoutingModule;
//# sourceMappingURL=demo-routing.module.js.map