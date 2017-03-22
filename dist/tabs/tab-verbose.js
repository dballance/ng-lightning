"use strict";
var core_1 = require('@angular/core');
var tab_1 = require('./tab');
var NglTabHeading = (function () {
    function NglTabHeading(templateRef) {
        this.templateRef = templateRef;
    }
    NglTabHeading = __decorate([
        core_1.Directive({ selector: 'template[ngl-tab-heading]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NglTabHeading);
    return NglTabHeading;
}());
exports.NglTabHeading = NglTabHeading;
var NglTabContent = (function () {
    function NglTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NglTabContent = __decorate([
        core_1.Directive({ selector: 'template[ngl-tab-content]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NglTabContent);
    return NglTabContent;
}());
exports.NglTabContent = NglTabContent;
var NglTabVerbose = (function (_super) {
    __extends(NglTabVerbose, _super);
    function NglTabVerbose() {
        _super.apply(this, arguments);
        this.onActivate = new core_1.EventEmitter();
        this.onDeactivate = new core_1.EventEmitter();
    }
    NglTabVerbose.prototype.ngAfterContentInit = function () {
        if (this.headingTemplate) {
            this.heading = this.headingTemplate.templateRef;
        }
        this.templateRef = this.contentTemplate.templateRef;
    };
    __decorate([
        core_1.Input('nglTabId'), 
        __metadata('design:type', String)
    ], NglTabVerbose.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglTabVerbose.prototype, "heading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglTabVerbose.prototype, "onActivate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglTabVerbose.prototype, "onDeactivate", void 0);
    __decorate([
        core_1.ContentChild(NglTabContent), 
        __metadata('design:type', NglTabContent)
    ], NglTabVerbose.prototype, "contentTemplate", void 0);
    __decorate([
        core_1.ContentChild(NglTabHeading), 
        __metadata('design:type', NglTabHeading)
    ], NglTabVerbose.prototype, "headingTemplate", void 0);
    NglTabVerbose = __decorate([
        core_1.Directive({
            selector: 'ngl-tab',
            providers: [{ provide: tab_1.NglTab, useExisting: NglTabVerbose }],
        }), 
        __metadata('design:paramtypes', [])
    ], NglTabVerbose);
    return NglTabVerbose;
}(tab_1.NglTab));
exports.NglTabVerbose = NglTabVerbose;
