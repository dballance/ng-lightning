"use strict";
var core_1 = require('@angular/core');
var NglFormInput = (function () {
    function NglFormInput(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.hostClass = 'slds-input';
    }
    NglFormInput.prototype.setup = function (id) {
        this.renderer.setElementAttribute(this.element.nativeElement, 'id', id);
        if (this.hostClass) {
            this.renderer.setElementClass(this.element.nativeElement, this.hostClass, true);
        }
    };
    __decorate([
        core_1.HostBinding('attr.aria-describedby'), 
        __metadata('design:type', String)
    ], NglFormInput.prototype, "describedBy", void 0);
    NglFormInput = __decorate([
        core_1.Directive({
            selector: 'input:not([type=checkbox]), input:not([type=radio])',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglFormInput);
    return NglFormInput;
}());
exports.NglFormInput = NglFormInput;
;
var NglFormTextarea = (function (_super) {
    __extends(NglFormTextarea, _super);
    function NglFormTextarea(element, renderer) {
        _super.call(this, element, renderer);
        this.element = element;
        this.renderer = renderer;
        this.hostClass = 'slds-textarea';
    }
    NglFormTextarea = __decorate([
        core_1.Directive({
            selector: 'textarea',
            providers: [{ provide: NglFormInput, useExisting: NglFormTextarea }],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglFormTextarea);
    return NglFormTextarea;
}(NglFormInput));
exports.NglFormTextarea = NglFormTextarea;
var NglFormSelect = (function (_super) {
    __extends(NglFormSelect, _super);
    function NglFormSelect(element, renderer) {
        _super.call(this, element, renderer);
        this.element = element;
        this.renderer = renderer;
        this.hostClass = 'slds-select';
    }
    NglFormSelect = __decorate([
        core_1.Directive({
            selector: 'select',
            providers: [{ provide: NglFormInput, useExisting: NglFormSelect }],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglFormSelect);
    return NglFormSelect;
}(NglFormInput));
exports.NglFormSelect = NglFormSelect;
var NglFormCheckbox = (function (_super) {
    __extends(NglFormCheckbox, _super);
    function NglFormCheckbox(element, renderer) {
        _super.call(this, element, renderer);
        this.element = element;
        this.renderer = renderer;
        this.hostClass = null;
    }
    NglFormCheckbox = __decorate([
        core_1.Directive({
            selector: 'input[type=checkbox]',
            providers: [{ provide: NglFormInput, useExisting: NglFormCheckbox }],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglFormCheckbox);
    return NglFormCheckbox;
}(NglFormInput));
exports.NglFormCheckbox = NglFormCheckbox;
