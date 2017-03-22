"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../../util/util');
var input_1 = require('./input');
var form_label_1 = require('../form-label');
var outlet_1 = require('../../util/outlet');
var NglFormElement = (function () {
    function NglFormElement(detector) {
        this.detector = detector;
        this.uid = util_1.uniqueId('form_element');
        this.required = false;
    }
    Object.defineProperty(NglFormElement.prototype, "setError", {
        set: function (error) {
            this.error = error;
            if (this.contentEl) {
                this.setInputErrorId();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglFormElement.prototype, "_label", {
        get: function () {
            return form_label_1.getFormLabel(this.label, this.labelTpl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglFormElement.prototype, "isCheckbox", {
        get: function () {
            return this.contentEl instanceof input_1.NglFormCheckbox;
        },
        enumerable: true,
        configurable: true
    });
    NglFormElement.prototype.ngAfterContentInit = function () {
        this.contentEl.setup(this.uid);
        this.setInputErrorId();
    };
    NglFormElement.prototype.setInputErrorId = function () {
        this.contentEl.describedBy = this.error ? "error_" + this.uid : null;
    };
    __decorate([
        core_1.ContentChild(input_1.NglFormInput), 
        __metadata('design:type', input_1.NglFormInput)
    ], NglFormElement.prototype, "contentEl", void 0);
    __decorate([
        core_1.Input('nglFormLabel'), 
        __metadata('design:type', String)
    ], NglFormElement.prototype, "label", void 0);
    __decorate([
        core_1.ContentChild(form_label_1.NglFormLabelTemplate), 
        __metadata('design:type', form_label_1.NglFormLabelTemplate)
    ], NglFormElement.prototype, "labelTpl", void 0);
    __decorate([
        core_1.Input('nglFormError'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglFormElement.prototype, "setError", null);
    __decorate([
        core_1.HostBinding('class.slds-has-error'), 
        __metadata('design:type', String)
    ], NglFormElement.prototype, "error", void 0);
    NglFormElement = __decorate([
        core_1.Component({
            selector: 'ngl-form-element',
            template: "\n    <label *ngIf=\"!isCheckbox\" [attr.for]=\"uid\" class=\"slds-form-element__label\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><span [nglInternalOutlet]=\"_label\"></span></label><div class=\"slds-form-element__control\"><label *ngIf=\"isCheckbox\" class=\"slds-checkbox\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><ng-content select=\"input[type=checkbox]\"></ng-content><span class=\"slds-checkbox--faux\"></span><span [nglInternalOutlet]=\"_label\" class=\"slds-form-element__label\"></span></label><ng-content></ng-content></div><div *ngIf=\"error\" [id]=\"'error_' + uid\" class=\"slds-form-element__help\">{{error}}</div>\n  ",
            directives: [outlet_1.NglInternalOutlet],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                '[class.slds-form-element]': 'true',
            },
            styles: [":host { display: block; }"],
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], NglFormElement);
    return NglFormElement;
}());
exports.NglFormElement = NglFormElement;
;
