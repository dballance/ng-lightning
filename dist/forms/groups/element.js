"use strict";
var core_1 = require('@angular/core');
var group_alt_1 = require('./group-alt');
var input_1 = require('./input');
var form_label_1 = require('../form-label');
var outlet_1 = require('../../util/outlet');
var NglFormGroupElement = (function () {
    function NglFormGroupElement(groupAlt, element, renderer) {
        this.groupAlt = groupAlt;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(NglFormGroupElement.prototype, "_label", {
        get: function () {
            return form_label_1.getFormLabel(this.label, this.labelTpl);
        },
        enumerable: true,
        configurable: true
    });
    NglFormGroupElement.prototype.ngAfterContentInit = function () {
        var type = this.contentEl.type;
        if (this.groupAlt) {
            this.groupAlt.type = type;
            this.renderer.setElementClass(this.element.nativeElement, 'slds-button', true);
            this.renderer.setElementClass(this.element.nativeElement, "slds-" + type + "--button", true);
        }
        else {
            this.renderer.setElementClass(this.element.nativeElement, "slds-" + type, true);
        }
    };
    __decorate([
        core_1.ContentChild(input_1.NglFormGroupCheckbox), 
        __metadata('design:type', input_1.NglFormGroupCheckbox)
    ], NglFormGroupElement.prototype, "contentEl", void 0);
    __decorate([
        core_1.Input('nglFormLabel'), 
        __metadata('design:type', String)
    ], NglFormGroupElement.prototype, "label", void 0);
    __decorate([
        core_1.ContentChild(form_label_1.NglFormLabelTemplate), 
        __metadata('design:type', form_label_1.NglFormLabelTemplate)
    ], NglFormGroupElement.prototype, "labelTpl", void 0);
    NglFormGroupElement = __decorate([
        core_1.Component({
            selector: 'label[ngl-form-group-element]',
            template: "\n    <ng-content></ng-content><span [ngClass]=\"'slds-' + contentEl?.type + '--faux'\"><span *ngIf=\"groupAlt\" [nglInternalOutlet]=\"_label\"></span></span><span *ngIf=\"!groupAlt\" [nglInternalOutlet]=\"_label\" class=\"slds-form-element__label\"></span>\n  ",
            directives: [outlet_1.NglInternalOutlet],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [group_alt_1.NglFormGroupAlternate, core_1.ElementRef, core_1.Renderer])
    ], NglFormGroupElement);
    return NglFormGroupElement;
}());
exports.NglFormGroupElement = NglFormGroupElement;
;
