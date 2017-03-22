"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var button_icon_1 = require('../buttons/button-icon');
var icon_1 = require('../icons/icon');
var NglModal = (function () {
    function NglModal(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.header = '';
        this.headingId = util_1.uniqueId('modal_header');
        this.open = false;
        this.openChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglModal.prototype, "_open", {
        set: function (_open) {
            var _this = this;
            _open = util_1.toBoolean(_open);
            if (_open === this.open)
                return;
            if (_open) {
                setTimeout(function () { return _this.focusFirst(); });
            }
            this.open = _open;
        },
        enumerable: true,
        configurable: true
    });
    NglModal.prototype.close = function (event) {
        if (event === void 0) { event = false; }
        this.openChange.emit(event);
    };
    NglModal.prototype.focusFirst = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus', []);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglModal.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglModal.prototype, "size", void 0);
    __decorate([
        core_1.Input('open'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglModal.prototype, "_open", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglModal.prototype, "openChange", void 0);
    NglModal = __decorate([
        core_1.Component({
            selector: 'ngl-modal',
            directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div *ngIf=\"open\" (click)=\"$event.stopPropagation()\" tabindex=\"0\" (keyup.esc)=\"close()\"><div [ngClass]=\"[size ? 'slds-modal--' + size : '']\" [attr.aria-hidden]=\"!open\" role=\"dialog\" [attr.aria-labelledby]=\"headingId\" class=\"slds-modal slds-fade-in-open\"><div class=\"slds-modal__container\"><div class=\"slds-modal__header\"><button type=\"button\" nglButtonIcon=\"inverse\" (click)=\"close()\" class=\"slds-modal__close\"><ngl-icon icon=\"close\" size=\"large\" alt=\"Close\"></ngl-icon></button><h2 [id]=\"headingId\" class=\"slds-text-heading--medium\">{{header}}</h2><ng-content select=\"[tagline]\"></ng-content></div><div class=\"slds-modal__content slds-p-around--medium\"><ng-content select=\"[body]\"></ng-content></div><div class=\"slds-modal__footer\"><ng-content select=\"button\"></ng-content></div></div></div><div tabindex=\"0\" (focus)=\"focusFirst()\"></div><div class=\"slds-backdrop slds-backdrop--open\"></div></div>\n  ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglModal);
    return NglModal;
}());
exports.NglModal = NglModal;
;
