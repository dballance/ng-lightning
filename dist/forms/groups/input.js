"use strict";
var core_1 = require('@angular/core');
var group_1 = require('./group');
var group_alt_1 = require('./group-alt');
var NglFormGroupCheckbox = (function () {
    function NglFormGroupCheckbox() {
        this.type = 'checkbox';
    }
    NglFormGroupCheckbox = __decorate([
        core_1.Directive({
            selector: 'input([type=checkbox])',
        }), 
        __metadata('design:paramtypes', [])
    ], NglFormGroupCheckbox);
    return NglFormGroupCheckbox;
}());
exports.NglFormGroupCheckbox = NglFormGroupCheckbox;
var NglFormGroupRadio = (function () {
    function NglFormGroupRadio(formGroup, formGroupAlt) {
        this.type = 'radio';
        if (!formGroup && !formGroupAlt)
            return;
        this.name = "name_" + (formGroup || formGroupAlt).uid;
    }
    __decorate([
        core_1.HostBinding('attr.name'), 
        __metadata('design:type', String)
    ], NglFormGroupRadio.prototype, "name", void 0);
    NglFormGroupRadio = __decorate([
        core_1.Directive({
            selector: 'input([type=radio])',
            providers: [{ provide: NglFormGroupCheckbox, useExisting: NglFormGroupRadio }],
        }),
        __param(0, core_1.Optional()),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [group_1.NglFormGroup, group_alt_1.NglFormGroupAlternate])
    ], NglFormGroupRadio);
    return NglFormGroupRadio;
}());
exports.NglFormGroupRadio = NglFormGroupRadio;
