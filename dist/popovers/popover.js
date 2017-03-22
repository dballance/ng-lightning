"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var NglPopover = (function () {
    function NglPopover(element, renderer, changeDetector) {
        this.element = element;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.renderer.setElementClass(this.element.nativeElement, 'slds-popover', true);
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
    }
    Object.defineProperty(NglPopover.prototype, "theme", {
        set: function (theme) {
            util_1.replaceClass(this, "slds-theme--" + this._theme, theme ? "slds-theme--" + theme : '');
            this._theme = theme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPopover.prototype, "nglTooltip", {
        set: function (isTooltip) {
            this.renderer.setElementClass(this.element.nativeElement, 'slds-popover--tooltip', util_1.toBoolean(isTooltip));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPopover.prototype, "nubbin", {
        set: function (direction) {
            util_1.replaceClass(this, "slds-nubbin--" + this._nubbin, direction ? "slds-nubbin--" + direction : '');
            this._nubbin = direction;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglPopover.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglPopover.prototype, "nglTooltip", null);
    NglPopover = __decorate([
        core_1.Component({
            selector: 'ngl-popover',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"slds-popover__body\"><ng-content></ng-content></div>\n  ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.ChangeDetectorRef])
    ], NglPopover);
    return NglPopover;
}());
exports.NglPopover = NglPopover;
