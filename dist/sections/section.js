"use strict";
var core_1 = require('@angular/core');
var button_icon_1 = require('../buttons/button-icon');
var icon_1 = require('../icons/icon');
var NglSection = (function () {
    function NglSection(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.open = false;
        this.openChange = new core_1.EventEmitter();
        renderer.setElementClass(element.nativeElement, 'slds-section', true);
    }
    NglSection.prototype.toggle = function (event) {
        event.preventDefault();
        this.openChange.emit(!this.open);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglSection.prototype, "title", void 0);
    __decorate([
        core_1.HostBinding('class.slds-is-open'),
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglSection.prototype, "open", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglSection.prototype, "openChange", void 0);
    NglSection = __decorate([
        core_1.Component({
            selector: 'ngl-section',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"slds-section__title\"><h3 (click)=\"toggle($event)\" class=\"slds-section__title-action\"><button type=\"button\" nglButtonIcon=\"container\"><ngl-icon icon=\"switch\"></ngl-icon></button>{{title}}</h3></div><div class=\"slds-section__content\"><ng-content></ng-content></div>\n  ",
            directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], NglSection);
    return NglSection;
}());
exports.NglSection = NglSection;
