"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var pill_1 = require('./pill');
var NglPillRemove = (function () {
    function NglPillRemove(pill) {
        this.pill = pill;
    }
    Object.defineProperty(NglPillRemove.prototype, "nglPillRemovable", {
        set: function (removable) {
            this.pill.removable = util_1.toBoolean(removable);
            this.pill.detector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    NglPillRemove.prototype.ngOnInit = function () {
        if (this.pill.removable === undefined) {
            this.pill.removable = true;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglPillRemove.prototype, "nglPillRemovable", null);
    NglPillRemove = __decorate([
        core_1.Directive({
            selector: '[nglPillRemove]',
        }), 
        __metadata('design:paramtypes', [pill_1.NglPill])
    ], NglPillRemove);
    return NglPillRemove;
}());
exports.NglPillRemove = NglPillRemove;
