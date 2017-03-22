"use strict";
var core_1 = require('@angular/core');
var column_1 = require('./column');
var NglInternalDatatableCell = (function () {
    function NglInternalDatatableCell() {
    }
    Object.defineProperty(NglInternalDatatableCell.prototype, "dataLabel", {
        get: function () {
            return this.column.heading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglInternalDatatableCell.prototype, "context", {
        get: function () {
            return {
                $implicit: this.value,
                row: this.row,
                index: this.index,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglInternalDatatableCell.prototype, "value", {
        get: function () {
            var key = this.column.key;
            return key ? this.row[key] : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglInternalDatatableCell.prototype, "row", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', column_1.NglDatatableColumn)
    ], NglInternalDatatableCell.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NglInternalDatatableCell.prototype, "index", void 0);
    __decorate([
        core_1.HostBinding('attr.data-label'), 
        __metadata('design:type', Object)
    ], NglInternalDatatableCell.prototype, "dataLabel", null);
    NglInternalDatatableCell = __decorate([
        core_1.Component({
            selector: 'td[ngl-internal-datatatable-cell]',
            template: "\n    <template *ngIf=\"column.cellTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngOutletContext]=\"context\"></template><span *ngIf=\"!column.cellTpl\">{{ value }}</span>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], NglInternalDatatableCell);
    return NglInternalDatatableCell;
}());
exports.NglInternalDatatableCell = NglInternalDatatableCell;
