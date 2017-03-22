"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var DEFAULT_TYPE = 'border';
var NglButtonIcon = (function () {
    function NglButtonIcon(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.setElementClass(this.element.nativeElement, 'slds-button', true);
        this.renderer.setElementClass(this.element.nativeElement, this.normalize(), true);
    }
    Object.defineProperty(NglButtonIcon.prototype, "nglButtonIcon", {
        set: function (type) {
            util_1.replaceClass(this, this.normalize(this._type), this.normalize(type));
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    NglButtonIcon.prototype.normalize = function (type) {
        return "slds-button--icon" + (type === "''" ? '' : "-" + (type || DEFAULT_TYPE));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglButtonIcon.prototype, "nglButtonIcon", null);
    NglButtonIcon = __decorate([
        core_1.Directive({
            selector: '[nglButtonIcon]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglButtonIcon);
    return NglButtonIcon;
}());
exports.NglButtonIcon = NglButtonIcon;
