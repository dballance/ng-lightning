"use strict";
var core_1 = require('@angular/core');
var NglDatepickerYear = (function () {
    function NglDatepickerYear() {
        this.numYearsBefore = 100;
        this.numYearsAfter = 10;
        this.yearChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglDatepickerYear.prototype, "setYear", {
        set: function (year) {
            this.year = +year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglDatepickerYear.prototype, "range", {
        get: function () {
            var currentYear = (new Date()).getFullYear();
            var firstYear = Math.min(currentYear - this.numYearsBefore, this.year);
            var size = Math.max(currentYear + this.numYearsAfter, this.year) - firstYear;
            return Array.apply(null, { length: size + 1 }).map(function (value, index) { return firstYear + index; });
        },
        enumerable: true,
        configurable: true
    });
    NglDatepickerYear.prototype.change = function ($event) {
        this.yearChange.emit($event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NglDatepickerYear.prototype, "numYearsBefore", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NglDatepickerYear.prototype, "numYearsAfter", void 0);
    __decorate([
        core_1.Input('year'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglDatepickerYear.prototype, "setYear", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglDatepickerYear.prototype, "yearChange", void 0);
    NglDatepickerYear = __decorate([
        core_1.Component({
            selector: 'ngl-date-year',
            template: "\n    <div class=\"slds-select_container\"><select [ngModel]=\"year\" (ngModelChange)=\"change($event)\" class=\"slds-select\"><option *ngFor=\"let yr of range\" [value]=\"yr\">{{yr}}</option></select></div>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], NglDatepickerYear);
    return NglDatepickerYear;
}());
exports.NglDatepickerYear = NglDatepickerYear;
