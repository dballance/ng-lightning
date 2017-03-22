"use strict";
var core_1 = require('@angular/core');
var NglPillImage = (function () {
    function NglPillImage(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    NglPillImage.prototype.ngAfterContentInit = function () {
        this.renderer.setElementClass(this.element.nativeElement, 'slds-pill__icon', true);
        this.renderer.setElementClass(this.element.nativeElement, 'slds-avatar--medium', false);
    };
    NglPillImage = __decorate([
        core_1.Directive({
            selector: '[nglPillImage]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglPillImage);
    return NglPillImage;
}());
exports.NglPillImage = NglPillImage;
