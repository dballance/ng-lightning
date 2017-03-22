"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var NglButton = (function () {
    function NglButton(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.prefix = "slds-button--";
        this.renderer.setElementClass(this.element.nativeElement, 'slds-button', true);
    }
    Object.defineProperty(NglButton.prototype, "nglButton", {
        set: function (type) {
            util_1.replaceClass(this, "" + this.prefix + this._type, type ? "" + this.prefix + type : '');
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglButton.prototype, "nglButton", null);
    NglButton = __decorate([
        core_1.Directive({
            selector: '[nglButton]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglButton);
    return NglButton;
}());
exports.NglButton = NglButton;
;
