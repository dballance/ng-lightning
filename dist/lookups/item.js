"use strict";
var core_1 = require('@angular/core');
var NglLookupItemTemplate = (function () {
    function NglLookupItemTemplate(templateRef) {
        this.templateRef = templateRef;
    }
    NglLookupItemTemplate = __decorate([
        core_1.Directive({ selector: 'template[nglLookupItem]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NglLookupItemTemplate);
    return NglLookupItemTemplate;
}());
exports.NglLookupItemTemplate = NglLookupItemTemplate;
