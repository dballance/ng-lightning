"use strict";
var core_1 = require('@angular/core');
var pill_1 = require('./pill');
var NglPillLink = (function () {
    function NglPillLink(pill, element, renderer) {
        if (!pill)
            return;
        renderer.setElementClass(element.nativeElement, 'slds-pill__label', true);
        pill.unlinked = false;
    }
    NglPillLink = __decorate([
        core_1.Directive({
            selector: 'a',
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [pill_1.NglPill, core_1.ElementRef, core_1.Renderer])
    ], NglPillLink);
    return NglPillLink;
}());
exports.NglPillLink = NglPillLink;
