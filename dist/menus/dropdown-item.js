"use strict";
var core_1 = require('@angular/core');
var NglDropdownItem = (function () {
    function NglDropdownItem(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.isFocused = false;
    }
    NglDropdownItem.prototype.onFocus = function () {
        this.isFocused = true;
    };
    NglDropdownItem.prototype.onBlur = function () {
        this.isFocused = false;
    };
    NglDropdownItem.prototype.hasFocus = function () {
        return this.isFocused;
    };
    NglDropdownItem.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    __decorate([
        core_1.HostListener('focus'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglDropdownItem.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglDropdownItem.prototype, "onBlur", null);
    NglDropdownItem = __decorate([
        core_1.Directive({
            selector: '[nglDropdownItem]',
            host: {
                'tabindex': '0',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglDropdownItem);
    return NglDropdownItem;
}());
exports.NglDropdownItem = NglDropdownItem;
