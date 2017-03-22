"use strict";
var core_1 = require('@angular/core');
var dropdown_1 = require('./dropdown');
var NglDropdownTrigger = (function () {
    function NglDropdownTrigger(element, renderer, dropdown) {
        this.element = element;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(this.focus.bind(this));
    }
    NglDropdownTrigger.prototype.ngOnDestroy = function () {
        this.parentFocusEventSubscription.unsubscribe();
    };
    NglDropdownTrigger.prototype.toggleOpen = function () {
        this.dropdown.toggle();
    };
    NglDropdownTrigger.prototype.onKeyDownOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle(true);
    };
    NglDropdownTrigger.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NglDropdownTrigger.prototype, "toggleOpen", null);
    __decorate([
        core_1.HostListener('keydown.arrowdown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], NglDropdownTrigger.prototype, "onKeyDownOpen", null);
    NglDropdownTrigger = __decorate([
        core_1.Directive({
            selector: '[nglDropdownTrigger]',
            host: {
                'aria-haspopup': 'true',
                '[class.slds-picklist__label]': 'dropdown.isPicklist',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, dropdown_1.NglDropdown])
    ], NglDropdownTrigger);
    return NglDropdownTrigger;
}());
exports.NglDropdownTrigger = NglDropdownTrigger;
