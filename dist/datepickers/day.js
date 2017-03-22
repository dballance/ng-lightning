"use strict";
var core_1 = require('@angular/core');
var NglDay = (function () {
    function NglDay() {
    }
    Object.defineProperty(NglDay.prototype, "label", {
        get: function () {
            return this.day < 10 ? "0" + this.day : this.day;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('nglDay'), 
        __metadata('design:type', Object)
    ], NglDay.prototype, "day", void 0);
    __decorate([
        core_1.HostBinding('class.slds-disabled-text'),
        core_1.HostBinding('attr.aria-disabled'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NglDay.prototype, "nglDayDisabled", void 0);
    __decorate([
        core_1.HostBinding('class.slds-is-selected'),
        core_1.HostBinding('attr.aria-selected'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NglDay.prototype, "nglDaySelected", void 0);
    NglDay = __decorate([
        core_1.Component({
            selector: 'td[nglDay]',
            template: "\n    <span class=\"slds-day\">{{ label }}</span>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                'role': 'gridcell',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], NglDay);
    return NglDay;
}());
exports.NglDay = NglDay;
