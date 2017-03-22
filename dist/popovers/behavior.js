"use strict";
var core_1 = require('@angular/core');
var trigger_1 = require('./trigger');
var NglPopoverBehavior = (function () {
    function NglPopoverBehavior(trigger) {
        this.trigger = trigger;
    }
    NglPopoverBehavior.prototype.onMouseOver = function () {
        this.trigger.nglOpen = true;
    };
    NglPopoverBehavior.prototype.onMouseOut = function () {
        this.trigger.nglOpen = false;
    };
    __decorate([
        core_1.HostListener('mouseenter'),
        core_1.HostListener('focus'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglPopoverBehavior.prototype, "onMouseOver", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        core_1.HostListener('blur'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglPopoverBehavior.prototype, "onMouseOut", null);
    NglPopoverBehavior = __decorate([
        core_1.Directive({
            selector: '[nglPopover][nglPopoverBehavior]',
        }), 
        __metadata('design:paramtypes', [trigger_1.NglPopoverTrigger])
    ], NglPopoverBehavior);
    return NglPopoverBehavior;
}());
exports.NglPopoverBehavior = NglPopoverBehavior;
;
