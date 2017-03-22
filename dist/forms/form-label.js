"use strict";
var core_1 = require('@angular/core');
var NglFormLabelTemplate = (function () {
    function NglFormLabelTemplate(templateRef) {
        this.templateRef = templateRef;
    }
    NglFormLabelTemplate = __decorate([
        core_1.Directive({ selector: 'template[nglFormLabel]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NglFormLabelTemplate);
    return NglFormLabelTemplate;
}());
exports.NglFormLabelTemplate = NglFormLabelTemplate;
function getFormLabel(label, labelTemplate) {
    if (label)
        return label;
    return labelTemplate ? labelTemplate.templateRef : '';
}
exports.getFormLabel = getFormLabel;
