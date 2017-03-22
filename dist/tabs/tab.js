"use strict";
var core_1 = require('@angular/core');
var NglTab = (function () {
    function NglTab(templateRef) {
        this.templateRef = templateRef;
        this.onActivate = new core_1.EventEmitter();
        this.onDeactivate = new core_1.EventEmitter();
        this._active = false;
    }
    Object.defineProperty(NglTab.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            if (active === this._active)
                return;
            this._active = active;
            if (active) {
                this.onActivate.emit(this);
            }
            else {
                this.onDeactivate.emit(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('nglTabId'), 
        __metadata('design:type', String)
    ], NglTab.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglTab.prototype, "heading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglTab.prototype, "onActivate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglTab.prototype, "onDeactivate", void 0);
    NglTab = __decorate([
        core_1.Directive({
            selector: 'template[ngl-tab]',
            exportAs: 'nglTab',
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NglTab);
    return NglTab;
}());
exports.NglTab = NglTab;
