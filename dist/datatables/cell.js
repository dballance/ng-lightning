"use strict";
var core_1 = require('@angular/core');
var NglDatatableCell = (function () {
    function NglDatatableCell(templateRef) {
        this.templateRef = templateRef;
    }
    NglDatatableCell = __decorate([
        core_1.Directive({ selector: 'template[nglDatatableCell]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NglDatatableCell);
    return NglDatatableCell;
}());
exports.NglDatatableCell = NglDatatableCell;
