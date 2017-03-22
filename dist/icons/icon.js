"use strict";
var core_1 = require('@angular/core');
var config_1 = require('../config/config');
var util_1 = require('../util/util');
var button_1 = require('../buttons/button');
var button_icon_1 = require('../buttons/button-icon');
var NglIcon = (function () {
    function NglIcon(config, element, renderer, state, button, nglButton, nglButtonIcon) {
        this.config = config;
        this.element = element;
        this.renderer = renderer;
        this.state = state;
        this.nglButton = nglButton;
        this.nglButtonIcon = nglButtonIcon;
        this.category = 'utility';
        this.button = button === null ? !!(this.nglButton || this.nglButtonIcon) : util_1.toBoolean(button);
        if (state) {
            renderer.setElementClass(element.nativeElement, "slds-text-" + state, true);
        }
    }
    Object.defineProperty(NglIcon.prototype, "setIcon", {
        set: function (icon) {
            this._icon = icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglIcon.prototype, "icon", {
        get: function () {
            return this.category === 'custom' ? "custom" + this._icon : this._icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglIcon.prototype, "setCategory", {
        set: function (category) {
            this.category = category || 'utility';
        },
        enumerable: true,
        configurable: true
    });
    NglIcon.prototype.iconPath = function () {
        return this.config.svgPath + "/" + this.category + "-sprite/svg/symbols.svg#" + this.icon;
    };
    NglIcon.prototype.ngOnChanges = function () {
        var containerClass = this.containerClass;
        util_1.replaceClass(this, this._containerClass, containerClass);
        this._containerClass = containerClass;
    };
    NglIcon.prototype.svgClasses = function () {
        var classes = Array.isArray(this.svgClass) ? this.svgClass : [this.svgClass || ''];
        var prefix = this.button ? 'slds-button__icon' : 'slds-icon';
        classes.push(this.state ? 'slds-button__icon--stateful' : prefix);
        if (this.size) {
            classes.push(prefix + "--" + this.size);
        }
        if (this.type || (this.category === 'utility' && !this.button)) {
            classes.push("slds-icon-text-" + (this.type || 'default'));
        }
        if (this.align || this.state) {
            classes.push("slds-button__icon--" + (this.align || 'left'));
        }
        return classes;
    };
    Object.defineProperty(NglIcon.prototype, "containerClass", {
        get: function () {
            return /^(action|custom|standard)$/.test(this.category)
                ? ['slds-icon_container', ("slds-icon-" + this.category + "-" + this.icon.replace('_', '-'))]
                : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('icon'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglIcon.prototype, "setIcon", null);
    __decorate([
        core_1.Input('category'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglIcon.prototype, "setCategory", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglIcon.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglIcon.prototype, "align", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglIcon.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglIcon.prototype, "alt", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglIcon.prototype, "svgClass", void 0);
    NglIcon = __decorate([
        core_1.Component({
            selector: 'ngl-icon, [ngl-icon]',
            template: "\n    <svg aria-hidden=\"true\" [ngClass]=\"svgClasses()\"><use [attr.xlink:href]=\"iconPath()\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></use></svg><span *ngIf=\"alt\" class=\"slds-assistive-text\">{{alt}}</span><ng-content></ng-content>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __param(3, core_1.Attribute('state')),
        __param(4, core_1.Attribute('button')),
        __param(5, core_1.Optional()),
        __param(6, core_1.Optional()), 
        __metadata('design:paramtypes', [config_1.NglConfig, core_1.ElementRef, core_1.Renderer, Object, Object, button_1.NglButton, button_icon_1.NglButtonIcon])
    ], NglIcon);
    return NglIcon;
}());
exports.NglIcon = NglIcon;
;
