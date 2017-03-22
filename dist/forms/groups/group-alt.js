"use strict";
var core_1 = require('@angular/core');
var group_1 = require('./group');
var form_label_1 = require('../form-label');
var outlet_1 = require('../../util/outlet');
var NglFormGroupAlternate = (function (_super) {
    __extends(NglFormGroupAlternate, _super);
    function NglFormGroupAlternate() {
        _super.apply(this, arguments);
    }
    __decorate([
        core_1.Input('nglFormLabel'), 
        __metadata('design:type', String)
    ], NglFormGroupAlternate.prototype, "label", void 0);
    __decorate([
        core_1.ContentChild(form_label_1.NglFormLabelTemplate), 
        __metadata('design:type', form_label_1.NglFormLabelTemplate)
    ], NglFormGroupAlternate.prototype, "labelTpl", void 0);
    __decorate([
        core_1.HostBinding('class.slds-has-error'),
        core_1.Input('nglFormError'), 
        __metadata('design:type', String)
    ], NglFormGroupAlternate.prototype, "error", void 0);
    __decorate([
        core_1.Input('nglFormRequired'), 
        __metadata('design:type', Boolean)
    ], NglFormGroupAlternate.prototype, "required", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglFormGroupAlternate.prototype, "type", void 0);
    NglFormGroupAlternate = __decorate([
        core_1.Component({
            selector: 'fieldset[ngl-form-group-alt]',
            template: "\n    <legend class=\"slds-form-element__label\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><span [nglInternalOutlet]=\"_label\"></span></legend><div class=\"slds-form-element__control\"><div [ngClass]=\"'slds-' + type + '--button-group'\"><ng-content></ng-content></div></div><div *ngIf=\"error\" class=\"slds-form-element__help\">{{error}}</div>\n  ",
            directives: [outlet_1.NglInternalOutlet],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                '[class.slds-form-element]': 'true',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], NglFormGroupAlternate);
    return NglFormGroupAlternate;
}(group_1.NglFormGroup));
exports.NglFormGroupAlternate = NglFormGroupAlternate;
;
