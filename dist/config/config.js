"use strict";
var core_1 = require('@angular/core');
var NglConfig = (function () {
    function NglConfig() {
        this.svgPath = 'assets/icons';
    }
    return NglConfig;
}());
exports.NglConfig = NglConfig;
var defaultConfig = new NglConfig();
function provideNglConfig(config) {
    if (config === void 0) { config = {}; }
    var useValue = Object.assign({}, defaultConfig, config || {});
    return [core_1.provide(NglConfig, { useValue: useValue })];
}
exports.provideNglConfig = provideNglConfig;
