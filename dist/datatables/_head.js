"use strict";
var core_1 = require('@angular/core');
var icon_1 = require('../icons/icon');
var NglInternalDatatableHeadCell = (function () {
    function NglInternalDatatableHeadCell(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onSort = new core_1.EventEmitter();
    }
    Object.defineProperty(NglInternalDatatableHeadCell.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (order) {
            this._sortOrder = order;
            this.renderer.setElementClass(this.element.nativeElement, 'slds-is-sorted--asc', this.sortOrder === 'asc');
            this.renderer.setElementClass(this.element.nativeElement, 'slds-is-sorted--desc', this.sortOrder === 'desc');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglInternalDatatableHeadCell.prototype, "isSorted", {
        get: function () {
            return !!this.sortOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglInternalDatatableHeadCell.prototype, "ariaSort", {
        get: function () {
            return this.sortOrder ? this.sortOrder + "ending" : null;
        },
        enumerable: true,
        configurable: true
    });
    NglInternalDatatableHeadCell.prototype.sortChange = function () {
        this.onSort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
    };
    __decorate([
        core_1.HostBinding('attr.title'),
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglInternalDatatableHeadCell.prototype, "heading", void 0);
    __decorate([
        core_1.HostBinding('class.slds-is-sortable'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NglInternalDatatableHeadCell.prototype, "sortable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglInternalDatatableHeadCell.prototype, "sortOrder", null);
    __decorate([
        core_1.HostBinding('class.slds-is-sorted'), 
        __metadata('design:type', Object)
    ], NglInternalDatatableHeadCell.prototype, "isSorted", null);
    __decorate([
        core_1.HostBinding('attr.aria-sort'), 
        __metadata('design:type', Object)
    ], NglInternalDatatableHeadCell.prototype, "ariaSort", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglInternalDatatableHeadCell.prototype, "onSort", void 0);
    NglInternalDatatableHeadCell = __decorate([
        core_1.Component({
            selector: 'th[ngl-internal-datatatable-head]',
            template: "\n    <div *ngIf=\"!sortable\" class=\"slds-truncate\">{{ heading }}</div><a *ngIf=\"sortable\" (click)=\"sortChange()\" class=\"slds-th__action slds-text-link--reset\"> <span class=\"slds-assistive-text\">Sort Column</span><span [title]=\"heading\" class=\"slds-truncate\">{{heading}}</span><div title=\"Sort Column\" ngl-icon icon=\"arrowdown\" size=\"x-small\" svgClass=\"slds-is-sortable__icon\" class=\"slds-icon_container\"></div></a>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [icon_1.NglIcon],
            host: {
                'scope': 'col',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglInternalDatatableHeadCell);
    return NglInternalDatatableHeadCell;
}());
exports.NglInternalDatatableHeadCell = NglInternalDatatableHeadCell;
