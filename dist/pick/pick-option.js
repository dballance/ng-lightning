"use strict";
var core_1 = require('@angular/core');
var pick_1 = require('./pick');
var NglPickOption = (function () {
    function NglPickOption(element, renderer, nglPick) {
        this.element = element;
        this.renderer = renderer;
        this.nglPick = nglPick;
        this._active = false;
    }
    Object.defineProperty(NglPickOption.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPickOption.prototype, "setValue", {
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    NglPickOption.prototype.pick = function (evt) {
        if (evt) {
            evt.preventDefault();
        }
        this.nglPick.selectOption(this._value);
    };
    NglPickOption.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.nglPick.values.subscribe(function (value) {
            _this._active = _this._isActive(value);
            var activeClass = _this.nglPickActiveClass || _this.nglPick.nglPickActiveClass;
            if (activeClass) {
                _this.renderer.setElementClass(_this.element.nativeElement, activeClass, _this.active);
            }
        });
    };
    NglPickOption.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
        this.nglPick.optionRemoved(this._value);
    };
    NglPickOption.prototype._isActive = function (value) {
        if (this.nglPick.isMultiple) {
            return Array.isArray(value) ? value.indexOf(this._value) > -1 : !!value[this._value];
        }
        else {
            return this._value === value;
        }
    };
    __decorate([
        core_1.Input('nglPickOption'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglPickOption.prototype, "setValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglPickOption.prototype, "nglPickActiveClass", void 0);
    __decorate([
        core_1.HostListener('click'),
        core_1.HostListener('keydown.Space', ['$event']),
        core_1.HostListener('keydown.Enter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], NglPickOption.prototype, "pick", null);
    NglPickOption = __decorate([
        core_1.Directive({
            selector: '[nglPickOption]',
            exportAs: 'nglPickOption',
            host: {
                'role': 'button',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, pick_1.NglPick])
    ], NglPickOption);
    return NglPickOption;
}());
exports.NglPickOption = NglPickOption;
