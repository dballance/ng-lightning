"use strict";
var core_1 = require('@angular/core');
var NglBadge = (function () {
    function NglBadge() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglBadge.prototype, "type", void 0);
    NglBadge = __decorate([
        core_1.Component({
            selector: 'ngl-badge',
            template: "\n    <span [ngClass]=\"type ? 'slds-theme--' + type : ''\" class=\"slds-badge\"><ng-content></ng-content></span>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], NglBadge);
    return NglBadge;
}());
exports.NglBadge = NglBadge;
;
