"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var util_1 = require('../util/util');
var NglPick = (function () {
    function NglPick(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.values = new Rx_1.BehaviorSubject(null);
        this.isMultiple = false;
        this.nglPickChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglPick.prototype, "setSelected", {
        set: function (selected) {
            this.selected = selected;
            this.ngAfterContentInit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPick.prototype, "setIsMultiple", {
        set: function (isMultiple) {
            this.isMultiple = util_1.toBoolean(isMultiple);
        },
        enumerable: true,
        configurable: true
    });
    NglPick.prototype.ngAfterContentInit = function () {
        this.values.next(this.selected);
    };
    NglPick.prototype.selectOption = function (value) {
        var next;
        if (this.isMultiple) {
            if (Array.isArray(this.selected)) {
                var index = this.selected.indexOf(value);
                next = index > -1
                    ? this.selected.slice(0, index).concat(this.selected.slice(index + 1))
                    : this.selected.concat([value]);
            }
            else {
                next = Object.assign({}, this.selected, (_a = {}, _a[value] = !this.selected[value], _a));
            }
        }
        else {
            next = value;
        }
        this.nglPickChange.emit(next);
        var _a;
    };
    NglPick.prototype.optionRemoved = function (value) {
        var _this = this;
        if (this.selected !== value)
            return;
        setTimeout(function () { return _this.nglPickChange.emit(undefined); });
    };
    __decorate([
        core_1.Input('nglPick'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglPick.prototype, "setSelected", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglPick.prototype, "nglPickActiveClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglPick.prototype, "nglPickChange", void 0);
    __decorate([
        core_1.Input('nglPickMultiple'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglPick.prototype, "setIsMultiple", null);
    NglPick = __decorate([
        core_1.Directive({
            selector: '[nglPick]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglPick);
    return NglPick;
}());
exports.NglPick = NglPick;
