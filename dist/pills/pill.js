"use strict";
var core_1 = require('@angular/core');
var button_icon_1 = require('../buttons/button-icon');
var icon_1 = require('../icons/icon');
var NglPill = (function () {
    function NglPill(detector) {
        this.detector = detector;
        this.unlinked = true;
        this.nglPillRemove = new core_1.EventEmitter();
    }
    NglPill.prototype.remove = function () {
        this.nglPillRemove.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglPill.prototype, "nglPillRemove", void 0);
    NglPill = __decorate([
        core_1.Component({
            selector: 'ngl-pill',
            template: "\n    <ng-content select=\"[nglPillImage]\"></ng-content><ng-content select=\"a\"></ng-content><span *ngIf=\"unlinked\" class=\"slds-pill__label\"><ng-content></ng-content></span><button *ngIf=\"removable\" type=\"button\" nglButtonIcon=\"bare\" (click)=\"remove()\" class=\"slds-pill__remove\"><ngl-icon icon=\"close\"></ngl-icon></button>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
            host: {
                '[class.slds-pill]': 'true',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], NglPill);
    return NglPill;
}());
exports.NglPill = NglPill;
