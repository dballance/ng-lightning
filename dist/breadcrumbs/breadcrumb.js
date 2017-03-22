"use strict";
var core_1 = require('@angular/core');
var NglBreadcrumb = (function () {
    function NglBreadcrumb() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglBreadcrumb.prototype, "href", void 0);
    NglBreadcrumb = __decorate([
        core_1.Component({
            selector: 'ngl-breadcrumb',
            template: "\n    <a [href]=\"href\"><ng-content></ng-content></a>\n  ",
            host: {
                '[class.slds-list__item]': 'true',
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], NglBreadcrumb);
    return NglBreadcrumb;
}());
exports.NglBreadcrumb = NglBreadcrumb;
