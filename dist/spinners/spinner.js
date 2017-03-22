"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var NglSpinner = (function () {
    function NglSpinner() {
        this.size = 'medium';
        this._container = false;
    }
    Object.defineProperty(NglSpinner.prototype, "hasContainer", {
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglSpinner.prototype, "container", {
        set: function (container) {
            this._container = util_1.toBoolean(container);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglSpinner.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglSpinner.prototype, "type", void 0);
    __decorate([
        core_1.HostBinding('class.slds-spinner_container'), 
        __metadata('design:type', Object)
    ], NglSpinner.prototype, "hasContainer", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglSpinner.prototype, "container", null);
    NglSpinner = __decorate([
        core_1.Component({
            selector: 'ngl-spinner',
            template: "\n    <div [ngClass]=\"['slds-spinner--' + size, type ? 'slds-spinner--' + type : '']\" aria-hidden=\"false\" role=\"alert\" class=\"slds-spinner\"><div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div></div>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], NglSpinner);
    return NglSpinner;
}());
exports.NglSpinner = NglSpinner;
;
