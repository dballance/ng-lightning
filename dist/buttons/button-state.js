"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var NglButtonState = (function () {
    function NglButtonState(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.selectedChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglButtonState.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (_selected) {
            this._selected = util_1.toBoolean(_selected);
            this.toggleClass('slds-is-selected', this._selected);
            this.toggleClass('slds-not-selected', !this._selected);
        },
        enumerable: true,
        configurable: true
    });
    NglButtonState.prototype.onSelectChange = function () {
        this.selectedChange.emit(!this.selected);
    };
    NglButtonState.prototype.toggleClass = function (className, isAdd) {
        this.renderer.setElementClass(this.element.nativeElement, className, isAdd);
    };
    __decorate([
        core_1.Input('nglButtonState'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglButtonState.prototype, "selected", null);
    __decorate([
        core_1.Output('nglButtonStateChange'), 
        __metadata('design:type', Object)
    ], NglButtonState.prototype, "selectedChange", void 0);
    __decorate([
        core_1.HostListener('click', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglButtonState.prototype, "onSelectChange", null);
    NglButtonState = __decorate([
        core_1.Directive({
            selector: '[nglButtonState]',
            host: {
                'aria-live': 'assertive',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglButtonState);
    return NglButtonState;
}());
exports.NglButtonState = NglButtonState;
;
