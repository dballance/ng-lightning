"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var NglAvatar = (function () {
    function NglAvatar(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.src = '';
        this.alt = '';
        renderer.setElementClass(element.nativeElement, 'slds-avatar', true);
    }
    Object.defineProperty(NglAvatar.prototype, "setSize", {
        set: function (value) {
            this.updateClass(this._size, value);
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglAvatar.prototype, "setType", {
        set: function (value) {
            this.updateClass(this._type, value);
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    NglAvatar.prototype.ngOnInit = function () {
        if (!this._type) {
            this.renderer.setElementClass(this.element.nativeElement, 'slds-avatar--rectangle', true);
        }
        if (!this._size) {
            this.renderer.setElementClass(this.element.nativeElement, 'slds-avatar--medium', true);
        }
    };
    NglAvatar.prototype.updateClass = function (oldValue, newValue) {
        util_1.replaceClass(this, "slds-avatar--" + oldValue, newValue ? "slds-avatar--" + newValue : '');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglAvatar.prototype, "src", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglAvatar.prototype, "alt", void 0);
    __decorate([
        core_1.Input('size'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglAvatar.prototype, "setSize", null);
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglAvatar.prototype, "setType", null);
    NglAvatar = __decorate([
        core_1.Component({
            selector: 'ngl-avatar',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <img [src]=\"src\" [alt]=\"alt\">\n  ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglAvatar);
    return NglAvatar;
}());
exports.NglAvatar = NglAvatar;
;
