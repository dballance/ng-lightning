"use strict";
var core_1 = require('@angular/core');
var column_1 = require('./column');
var _head_1 = require('./_head');
var _cell_1 = require('./_cell');
;
var NglDatatable = (function () {
    function NglDatatable(detector, element, renderer) {
        this.detector = detector;
        this.data = [];
        this.bordered = true;
        this.striped = true;
        this.sortChange = new core_1.EventEmitter();
        renderer.setElementClass(element.nativeElement, 'slds-table', true);
    }
    NglDatatable.prototype.columnTrackBy = function (index, column) {
        return column.key || index;
    };
    NglDatatable.prototype.dataTrackBy = function (index, data) {
        return this.trackByKey ? data[this.trackByKey] : index;
    };
    NglDatatable.prototype.onColumnSort = function (column, order) {
        var key = column.key;
        if (!key) {
            throw new Error("ng-lightning: No \"key\" property is set for sortable column \"" + column.heading + "\"");
        }
        this.sortChange.emit({ key: key, order: order });
    };
    NglDatatable.prototype.getColumnSortOrder = function (column) {
        return this.sort && column.key === this.sort.key ? this.sort.order : null;
    };
    NglDatatable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._columnsSubscription = this.columns.changes.subscribe(function () { return _this.detector.markForCheck(); });
    };
    NglDatatable.prototype.ngOnDestroy = function () {
        this._columnsSubscription.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NglDatatable.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglDatatable.prototype, "trackByKey", void 0);
    __decorate([
        core_1.HostBinding('class.slds-table--bordered'),
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglDatatable.prototype, "bordered", void 0);
    __decorate([
        core_1.HostBinding('class.slds-table--striped'),
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglDatatable.prototype, "striped", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglDatatable.prototype, "sort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglDatatable.prototype, "sortChange", void 0);
    __decorate([
        core_1.ContentChildren(column_1.NglDatatableColumn), 
        __metadata('design:type', core_1.QueryList)
    ], NglDatatable.prototype, "columns", void 0);
    NglDatatable = __decorate([
        core_1.Component({
            selector: 'table[ngl-datatable]',
            template: "\n    <thead><tr class=\"slds-text-heading--label\"><th *ngFor=\"let col of columns; trackBy:columnTrackBy\" ngl-internal-datatatable-head [heading]=\"col.heading\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (onSort)=\"onColumnSort(col, $event)\"></th></tr></thead><tbody><tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\"><td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" ngl-internal-datatatable-cell [row]=\"d\" [column]=\"col\" [index]=\"i\"></td></tr></tbody>\n  ",
            directives: [_head_1.NglInternalDatatableHeadCell, _cell_1.NglInternalDatatableCell],
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer])
    ], NglDatatable);
    return NglDatatable;
}());
exports.NglDatatable = NglDatatable;
;
