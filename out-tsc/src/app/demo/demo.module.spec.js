"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_module_1 = require("./demo.module");
describe('DemoModule', function () {
    var demoModule;
    beforeEach(function () {
        demoModule = new demo_module_1.DemoModule();
    });
    it('should create an instance', function () {
        expect(demoModule).toBeTruthy();
    });
});
//# sourceMappingURL=demo.module.spec.js.map