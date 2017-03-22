"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var icon_1 = require('../icons/icon');
var NglRating = (function () {
    function NglRating(element, renderer, max) {
        this.range = [];
        this.icon = 'favorite';
        this.max = 5;
        this.readonly = false;
        this.rateChange = new core_1.EventEmitter();
        this.hover = new core_1.EventEmitter();
        if (max)
            this.max = +max;
        this.range = Array.apply(null, { length: this.max }).map(function (value, index) { return index + 1; });
        var nativeElement = element.nativeElement;
        renderer.setElementAttribute(nativeElement, 'tabindex', '0');
        renderer.setElementAttribute(nativeElement, 'aria-valuemin', '0');
        renderer.setElementAttribute(nativeElement, 'aria-valuemax', this.max.toString());
    }
    Object.defineProperty(NglRating.prototype, "isReadonly", {
        set: function (readonly) {
            this.readonly = util_1.toBoolean(readonly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglRating.prototype, "rate", {
        set: function (rate) {
            this.inputRate = rate;
            this.currentRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    NglRating.prototype.update = function (value) {
        if (value < 1 || value > this.max || this.readonly || value === this.inputRate)
            return;
        this.rateChange.emit(value);
    };
    NglRating.prototype.enter = function (value) {
        if (this.readonly)
            return;
        this.currentRate = value;
        this.hover.emit(value);
    };
    NglRating.prototype.reset = function () {
        this.currentRate = this.inputRate;
    };
    NglRating.prototype.keyboardIncrease = function (evt) {
        evt.preventDefault();
        this.update(this.inputRate + 1);
    };
    NglRating.prototype.keyboardDecrease = function (evt) {
        evt.preventDefault();
        this.update(this.inputRate - 1);
    };
    Object.defineProperty(NglRating.prototype, "ariaValuenow", {
        get: function () {
            return this.inputRate;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglRating.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglRating.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglRating.prototype, "isReadonly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], NglRating.prototype, "rate", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglRating.prototype, "rateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglRating.prototype, "hover", void 0);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglRating.prototype, "reset", null);
    __decorate([
        core_1.HostListener('keydown.ArrowUp', ['$event']),
        core_1.HostListener('keydown.ArrowRight', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], NglRating.prototype, "keyboardIncrease", null);
    __decorate([
        core_1.HostListener('keydown.ArrowDown', ['$event']),
        core_1.HostListener('keydown.ArrowLeft', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], NglRating.prototype, "keyboardDecrease", null);
    __decorate([
        core_1.HostBinding('attr.aria-valuenow'), 
        __metadata('design:type', Object)
    ], NglRating.prototype, "ariaValuenow", null);
    NglRating = __decorate([
        core_1.Component({
            selector: 'ngl-rating',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [icon_1.NglIcon],
            template: "\n    <ngl-icon [icon]=\"icon\" [size]=\"size\" *ngFor=\"let r of range\" [type]=\"r &lt;= currentRate ? 'warning' : 'default'\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\"></ngl-icon>\n  ",
            host: {
                'style': 'white-space: nowrap;',
            },
        }),
        __param(2, core_1.Attribute('max')), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object])
    ], NglRating);
    return NglRating;
}());
exports.NglRating = NglRating;
;
