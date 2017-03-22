"use strict";
var core_1 = require('@angular/core');
var NglBreadcrumbs = (function () {
    function NglBreadcrumbs() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglBreadcrumbs.prototype, "assistiveText", void 0);
    NglBreadcrumbs = __decorate([
        core_1.Component({
            selector: 'ngl-breadcrumbs',
            template: "\n   <nav role=\"navigation\" [attr.aria-label]=\"assistiveText\"><div class=\"slds-breadcrumb slds-list--horizontal\"><ng-content></ng-content></div></nav>\n ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], NglBreadcrumbs);
    return NglBreadcrumbs;
}());
exports.NglBreadcrumbs = NglBreadcrumbs;
