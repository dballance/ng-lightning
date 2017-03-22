"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var util_1 = require('../util/util');
var button_icon_1 = require('../buttons/button-icon');
var icon_1 = require('../icons/icon');
var weekdays_1 = require('./weekdays');
var day_1 = require('./day');
var year_1 = require('./year');
var NglDatepicker = (function () {
    function NglDatepicker(datePipe) {
        this.datePipe = datePipe;
        this.showToday = true;
        this.dateChange = new core_1.EventEmitter();
        this.uid = util_1.uniqueId('datepicker');
        this.split = function (arr, size) {
            if (size === void 0) { size = 7; }
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        };
    }
    Object.defineProperty(NglDatepicker.prototype, "_date", {
        set: function (date) {
            this.date = this.parseDate(date);
            if (this.date) {
                this.current = Object.assign({}, this.date);
            }
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglDatepicker.prototype, "_showToday", {
        set: function (showToday) {
            this.showToday = util_1.toBoolean(showToday);
        },
        enumerable: true,
        configurable: true
    });
    NglDatepicker.prototype.moveYear = function (year) {
        this.current.year = +year;
        this.render();
    };
    NglDatepicker.prototype.keyboardHandler = function ($event, code, param) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        if (code === 'Enter') {
            this.select();
            return;
        }
        var _a = this.current, year = _a.year, month = _a.month, day = _a.day;
        var date = new Date(year, month, day, 12);
        if (code === 'Move') {
            date.setDate(day + (+param));
            this.current = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
        }
        else if (code === 'MoveMonth') {
            date.setMonth(month + (+param), 1);
            this.current = { year: date.getFullYear(), month: date.getMonth(), day: day };
        }
        else if (code === 'MoveTo') {
            this.current.day = +param;
        }
        this.render();
    };
    NglDatepicker.prototype.isSelected = function (date) {
        return this.isEqualDate(date, this.date);
    };
    NglDatepicker.prototype.isActive = function (date) {
        return this.isEqualDate(date, this.current);
    };
    NglDatepicker.prototype.select = function (date) {
        if (date === void 0) { date = this.current; }
        if (date.disabled)
            return;
        var year = date.year, month = date.month, day = date.day;
        this.dateChange.emit(new Date(year, month, day));
    };
    NglDatepicker.prototype.indexTrackBy = function (index) {
        return index;
    };
    NglDatepicker.prototype.selectToday = function () {
        this.dateChange.emit(new Date());
    };
    NglDatepicker.prototype.parseDate = function (date) {
        if (!date)
            return null;
        return { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
    };
    NglDatepicker.prototype.isEqualDate = function (d1, d2) {
        return d1 && d2 && d1.day === d2.day && d1.month === d2.month && d1.year === d2.year;
    };
    NglDatepicker.prototype.render = function () {
        if (!this.current) {
            this.current = this.today;
        }
        var _a = this.current, year = _a.year, month = _a.month, day = _a.day;
        this.monthLabel = this.datePipe.transform(new Date(year, month, 1), 'MMMM');
        var days = this.daysInMonth(year, month);
        this.current.day = Math.min(day, days.length);
        Array.prototype.unshift.apply(days, this.daysInPreviousMonth(year, month));
        var nextMonth = this.daysInNextMonth(year, month + 1, days.length);
        if (nextMonth) {
            Array.prototype.push.apply(days, nextMonth);
        }
        this.weeks = this.split(days);
    };
    NglDatepicker.prototype.daysInMonth = function (year, month) {
        var last = new Date(year, month + 1, 0).getDate();
        return this.getDayObjects(year, month, 1, last);
    };
    NglDatepicker.prototype.daysInPreviousMonth = function (year, month) {
        var first = new Date(year, month, 1);
        var offset = first.getDay();
        var last = new Date(year, month, 0).getDate();
        return this.getDayObjects(year, month - 1, last - offset + 1, last, true);
    };
    NglDatepicker.prototype.daysInNextMonth = function (year, month, numOfDays) {
        if (numOfDays % 7 === 0)
            return;
        return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), true);
    };
    NglDatepicker.prototype.getDayObjects = function (year, month, from, to, disabled) {
        if (disabled === void 0) { disabled = false; }
        var days = [];
        for (var day = from; day <= to; day++) {
            days.push({ year: year, month: month, day: day, disabled: disabled });
        }
        return days;
    };
    Object.defineProperty(NglDatepicker.prototype, "today", {
        get: function () {
            var today = new Date();
            return { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('date'), 
        __metadata('design:type', Date), 
        __metadata('design:paramtypes', [Date])
    ], NglDatepicker.prototype, "_date", null);
    __decorate([
        core_1.Input('showToday'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], NglDatepicker.prototype, "_showToday", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglDatepicker.prototype, "dateChange", void 0);
    __decorate([
        core_1.HostListener('keydown.Enter', ['$event', '"Enter"']),
        core_1.HostListener('keydown.ArrowUp', ['$event', '"Move"', '-7']),
        core_1.HostListener('keydown.ArrowLeft', ['$event', '"Move"', '-1']),
        core_1.HostListener('keydown.ArrowDown', ['$event', '"Move"', '7']),
        core_1.HostListener('keydown.ArrowRight', ['$event', '"Move"', '1']),
        core_1.HostListener('keydown.PageUp', ['$event', '"MoveMonth"', '-1']),
        core_1.HostListener('keydown.PageDown', ['$event', '"MoveMonth"', '1']),
        core_1.HostListener('keydown.Home', ['$event', '"MoveTo"', '1']),
        core_1.HostListener('keydown.End', ['$event', '"MoveTo"', '31']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent, String, String]), 
        __metadata('design:returntype', void 0)
    ], NglDatepicker.prototype, "keyboardHandler", null);
    NglDatepicker = __decorate([
        core_1.Component({
            selector: 'ngl-datepicker',
            template: "\n    <div class=\"slds-datepicker__filter slds-grid\"><div class=\"slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow\"><div class=\"slds-align-middle\"><button type=\"button\" nglButtonIcon=\"container\" (click)=\"keyboardHandler($event, 'MoveMonth', -1)\"><ngl-icon icon=\"left\" size=\"small\" alt=\"Previous Month\"></ngl-icon></button></div><h2 [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\" class=\"slds-align-middle\">{{ monthLabel }}</h2><div class=\"slds-align-middle\"><button type=\"button\" nglButtonIcon=\"container\" (click)=\"keyboardHandler($event, 'MoveMonth', 1)\"><ngl-icon icon=\"right\" size=\"small\" alt=\"Next Month\"></ngl-icon></button></div></div><ngl-date-year [year]=\"current.year\" (yearChange)=\"moveYear($event)\" class=\"slds-shrink-none\"></ngl-date-year></div><table role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" class=\"datepicker__month\"><thead><tr nglWeekdays></tr></thead><tbody><tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\"><td *ngFor=\"let date of week\" (click)=\"select(date)\" [class.slds-is-today]=\"isActive(date)\" [nglDay]=\"date.day\" [nglDaySelected]=\"isSelected(date)\" [nglDayDisabled]=\"date.disabled\"></td></tr><tr *ngIf=\"showToday\"><td colspan=\"7\" role=\"gridcell\"><a href=\"javascript:void(0)\" (click)=\"selectToday()\" class=\"slds-show--inline-block slds-p-bottom--x-small\">Today</a></td></tr></tbody></table>\n  ",
            directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon, day_1.NglDay, weekdays_1.NglDatepickerWeekdays, year_1.NglDatepickerYear],
            providers: [common_1.DatePipe],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                'aria-hidden': 'false',
                '[class.slds-datepicker]': 'true',
                'tabindex': '0',
            },
            styles: [":host { display: block; }"],
        }), 
        __metadata('design:paramtypes', [common_1.DatePipe])
    ], NglDatepicker);
    return NglDatepicker;
}());
exports.NglDatepicker = NglDatepicker;
;
