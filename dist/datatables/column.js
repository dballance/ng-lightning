"use strict";
var core_1 = require('@angular/core');
var cell_1 = require('./cell');
var util_1 = require('../util/util');
var NglDatatableColumn = (function () {
    function NglDatatableColumn() {
        this._sortable = false;
    }
    Object.defineProperty(NglDatatableColumn.prototype, "sortable", {
        get: function () {
            return this._sortable;
        },
        set: function (sortable) {
            this._sortable = util_1.toBoolean(sortable);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglDatatableColumn.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglDatatableColumn.prototype, "key", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglDatatableColumn.prototype, "cellClass", void 0);
    __decorate([
        core_1.ContentChild(cell_1.NglDatatableCell), 
        __metadata('design:type', cell_1.NglDatatableCell)
    ], NglDatatableColumn.prototype, "cellTpl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglDatatableColumn.prototype, "sortable", null);
    NglDatatableColumn = __decorate([
        core_1.Directive({
            selector: 'ngl-datatable-column',
        }), 
        __metadata('design:paramtypes', [])
    ], NglDatatableColumn);
    return NglDatatableColumn;
}());
exports.NglDatatableColumn = NglDatatableColumn;
;
