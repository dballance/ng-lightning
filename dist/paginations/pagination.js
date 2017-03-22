"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var NglPagination = (function () {
    function NglPagination() {
        this.pages = [];
        this.pageChange = new core_1.EventEmitter();
        this.perPage = 10;
        this.limit = 0;
        this.boundaryNumbers = 0;
        this._boundaryLinks = false;
    }
    Object.defineProperty(NglPagination.prototype, "boundaryLinks", {
        get: function () {
            return this._boundaryLinks;
        },
        set: function (boundaryLinks) {
            this._boundaryLinks = util_1.toBoolean(boundaryLinks);
        },
        enumerable: true,
        configurable: true
    });
    NglPagination.prototype.hasPrevious = function () {
        return this.current > 1;
    };
    NglPagination.prototype.hasNext = function () {
        return this.current < this.totalPages;
    };
    NglPagination.prototype.goto = function (page) {
        if (page === this.current)
            return;
        this.pageChange.emit(+page);
    };
    NglPagination.prototype.ngOnChanges = function () {
        var _this = this;
        this.totalPages = Math.ceil(+this.total / +this.perPage);
        var _a = this.limits(), start = _a.start, end = _a.end;
        this.pages = this.getPageArray(start, end);
        if (this.boundaryNumbers > 0) {
            if (start > 1) {
                var preGap = this.getPageArray(1, Math.min(start - 1, this.boundaryNumbers));
                var lastGapNumber = +preGap[preGap.length - 1].number;
                if (lastGapNumber < start - 1) {
                    this.pages.unshift(this.getGapPage(lastGapNumber, start));
                }
                (_b = this.pages).unshift.apply(_b, preGap);
            }
            if (end < this.totalPages) {
                var postGap = this.getPageArray(Math.max(this.totalPages - this.boundaryNumbers + 1, end + 1), this.totalPages);
                var firstGapNumber = +postGap[0].number;
                if (firstGapNumber > end + 1) {
                    this.pages.push(this.getGapPage(end, firstGapNumber));
                }
                (_c = this.pages).push.apply(_c, postGap);
            }
        }
        if (this.current > this.totalPages) {
            setTimeout(function () { return _this.goto(_this.totalPages); });
        }
        else if (!this.current && this.totalPages > 0) {
            setTimeout(function () { return _this.goto(1); });
        }
        var _b, _c;
    };
    NglPagination.prototype.pageTrackBy = function (index, page) {
        return page.number;
    };
    Object.defineProperty(NglPagination.prototype, "start", {
        get: function () {
            return Math.max(1 + (+this.current - 1) * +this.perPage, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPagination.prototype, "end", {
        get: function () {
            return Math.min(this.start + (+this.perPage - 1), +this.total);
        },
        enumerable: true,
        configurable: true
    });
    NglPagination.prototype.getPageArray = function (start, end) {
        var _this = this;
        return Array.apply(null, { length: end - start + 1 }).map(function (value, index) { return _this.getPage(start + index); });
    };
    NglPagination.prototype.getPage = function (number, disabled) {
        if (disabled === void 0) { disabled = false; }
        return { number: number, disabled: disabled };
    };
    NglPagination.prototype.getGapPage = function (before, after) {
        var isConsecutive = before + 1 === after - 1;
        return this.getPage(isConsecutive ? before + 1 : '...', !isConsecutive);
    };
    NglPagination.prototype.limits = function () {
        var start = 1, end = this.totalPages;
        if (this.limit < 1)
            return { start: start, end: end };
        start = Math.max(+this.current - Math.floor(+this.limit / 2), 1);
        end = start + +this.limit - 1;
        if (end > this.totalPages) {
            end = this.totalPages;
            start = Math.max(end - +this.limit + 1, 1);
        }
        return { start: start, end: end };
    };
    __decorate([
        core_1.Input('page'), 
        __metadata('design:type', Object)
    ], NglPagination.prototype, "current", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglPagination.prototype, "pageChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglPagination.prototype, "total", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglPagination.prototype, "perPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglPagination.prototype, "limit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NglPagination.prototype, "boundaryNumbers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglPagination.prototype, "boundaryLinks", null);
    NglPagination = __decorate([
        core_1.Component({
            selector: 'ngl-pagination',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div role=\"group\" class=\"slds-button-group\"><button *ngIf=\"boundaryLinks\" [disabled]=\"!hasPrevious()\" (click)=\"goto(1)\" class=\"slds-button slds-button--neutral\">First</button><button [disabled]=\"!hasPrevious()\" (click)=\"goto(current - 1)\" class=\"slds-button slds-button--neutral\">Previous</button><button *ngFor=\"let page of pages; trackBy:pageTrackBy\" [class.slds-button--brand]=\"page.number === current\" (click)=\"goto(page.number)\" [disabled]=\"page.disabled\" class=\"slds-button slds-button--neutral\">{{page.number}}</button><button [disabled]=\"!hasNext()\" (click)=\"goto(current + 1)\" class=\"slds-button slds-button--neutral\">Next</button><button *ngIf=\"boundaryLinks\" [disabled]=\"!hasNext()\" (click)=\"goto(totalPages)\" class=\"slds-button slds-button--neutral\">Last</button></div>\n  ",
            exportAs: 'nglPagination',
        }), 
        __metadata('design:paramtypes', [])
    ], NglPagination);
    return NglPagination;
}());
exports.NglPagination = NglPagination;
