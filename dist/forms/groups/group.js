"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../../util/util');
var form_label_1 = require('../form-label');
var outlet_1 = require('../../util/outlet');
var NglFormGroup = (function () {
    function NglFormGroup() {
        this.uid = util_1.uniqueId('form_group');
    }
    Object.defineProperty(NglFormGroup.prototype, "_label", {
        get: function () {
            return form_label_1.getFormLabel(this.label, this.labelTpl);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('nglFormLabel'), 
        __metadata('design:type', String)
    ], NglFormGroup.prototype, "label", void 0);
    __decorate([
        core_1.ContentChild(form_label_1.NglFormLabelTemplate), 
        __metadata('design:type', form_label_1.NglFormLabelTemplate)
    ], NglFormGroup.prototype, "labelTpl", void 0);
    __decorate([
        core_1.HostBinding('class.slds-has-error'),
        core_1.Input('nglFormError'), 
        __metadata('design:type', String)
    ], NglFormGroup.prototype, "error", void 0);
    __decorate([
        core_1.Input('nglFormRequired'), 
        __metadata('design:type', Boolean)
    ], NglFormGroup.prototype, "required", void 0);
    NglFormGroup = __decorate([
        core_1.Component({
            selector: 'fieldset[ngl-form-group]',
            template: "\n    <legend class=\"slds-form-element__label\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><span [nglInternalOutlet]=\"_label\"></span></legend><div class=\"slds-form-element__control\"><ng-content></ng-content></div><div *ngIf=\"error\" class=\"slds-form-element__help\">{{error}}</div>\n  ",
            directives: [outlet_1.NglInternalOutlet],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                '[class.slds-form-element]': 'true',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], NglFormGroup);
    return NglFormGroup;
}());
exports.NglFormGroup = NglFormGroup;
;
