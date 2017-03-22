"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../../util/util');
var element_1 = require('./element');
var NglFormElementRequired = (function () {
    function NglFormElementRequired(nglFormElement) {
        this.nglFormElement = nglFormElement;
    }
    Object.defineProperty(NglFormElementRequired.prototype, "required", {
        set: function (required) {
            if (!this.nglFormElement)
                return;
            this.nglFormElement.required = util_1.toBoolean(required);
            this.nglFormElement.detector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglFormElementRequired.prototype, "required", null);
    NglFormElementRequired = __decorate([
        core_1.Directive({
            selector: 'input[required], textarea[required], select[required]',
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [element_1.NglFormElement])
    ], NglFormElementRequired);
    return NglFormElementRequired;
}());
exports.NglFormElementRequired = NglFormElementRequired;
;
