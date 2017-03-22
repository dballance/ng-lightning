"use strict";
var core_1 = require('@angular/core');
var NglInternalOutlet = (function () {
    function NglInternalOutlet() {
    }
    Object.defineProperty(NglInternalOutlet.prototype, "content", {
        get: function () {
            return this.nglInternalOutlet instanceof core_1.TemplateRef ? '' : this.nglInternalOutlet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglInternalOutlet.prototype, "contentTemplate", {
        get: function () {
            return this.nglInternalOutlet instanceof core_1.TemplateRef ? this.nglInternalOutlet : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglInternalOutlet.prototype, "nglInternalOutlet", void 0);
    NglInternalOutlet = __decorate([
        core_1.Component({
            selector: '[nglInternalOutlet]',
            template: "{{content}}<template [ngTemplateOutlet]=\"contentTemplate\"></template>",
        }), 
        __metadata('design:paramtypes', [])
    ], NglInternalOutlet);
    return NglInternalOutlet;
}());
exports.NglInternalOutlet = NglInternalOutlet;
;
