"use strict";
var core_1 = require('@angular/core');
var Tether = require('tether');
var popover_1 = require('./popover');
var placements_1 = require('./placements');
var NglPopoverTrigger = (function () {
    function NglPopoverTrigger(element, viewContainer, injector, renderer, componentFactoryResolver) {
        this.element = element;
        this.viewContainer = viewContainer;
        this.injector = injector;
        this.renderer = renderer;
        this.placement = 'top';
        this.popoverFactory = componentFactoryResolver.resolveComponentFactory(popover_1.NglPopover);
    }
    Object.defineProperty(NglPopoverTrigger.prototype, "nglPopoverPlacement", {
        set: function (_placement) {
            this.placement = _placement || 'top';
            this.setTether();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPopoverTrigger.prototype, "nglPopoverTheme", {
        set: function (theme) {
            this.theme = theme;
            this.setPopover();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglPopoverTrigger.prototype, "nglOpen", {
        set: function (open) {
            if (open) {
                this.create();
            }
            else {
                this.destroy();
            }
        },
        enumerable: true,
        configurable: true
    });
    NglPopoverTrigger.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    NglPopoverTrigger.prototype.setTether = function (create) {
        if (create === void 0) { create = false; }
        if (!this.tether && !create)
            return;
        var _a = placements_1.placement(this.placement), attachment = _a.attachment, targetAttachment = _a.targetAttachment, offset = _a.offset;
        var options = {
            element: this.popover.element.nativeElement,
            target: this.element.nativeElement,
            attachment: attachment,
            targetAttachment: targetAttachment,
            offset: offset,
        };
        if (create) {
            this.tether = new Tether(options);
            this.tether.position();
        }
        else {
            this.tether.setOptions(options);
        }
        this.setPopover();
    };
    NglPopoverTrigger.prototype.setPopover = function () {
        if (!this.popover)
            return;
        var opposite = placements_1.placement(this.placement).opposite;
        this.popover.nubbin = opposite;
        this.popover.theme = this.theme;
        this.popover.nglTooltip = this.nglTooltip;
    };
    NglPopoverTrigger.prototype.create = function () {
        if (this.componentRef)
            return;
        this.componentRef = this.viewContainer.createComponent(this.popoverFactory, 0, this.injector, [this.projectableNodes]);
        this.popover = this.componentRef.instance;
        this.setTether(true);
        this.popover.changeDetector.markForCheck();
    };
    Object.defineProperty(NglPopoverTrigger.prototype, "projectableNodes", {
        get: function () {
            if (this.nglPopover instanceof core_1.TemplateRef) {
                var view = this.viewContainer.createEmbeddedView(this.nglPopover);
                return view.rootNodes;
            }
            else {
                return [this.renderer.createText(null, this.nglPopover)];
            }
        },
        enumerable: true,
        configurable: true
    });
    NglPopoverTrigger.prototype.destroy = function () {
        if (!this.componentRef)
            return;
        this.tether.destroy();
        this.tether = null;
        this.componentRef.destroy();
        this.componentRef = null;
        this.popover = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglPopoverTrigger.prototype, "nglPopover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglPopoverTrigger.prototype, "nglPopoverPlacement", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglPopoverTrigger.prototype, "nglPopoverTheme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglPopoverTrigger.prototype, "nglTooltip", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], NglPopoverTrigger.prototype, "nglOpen", null);
    NglPopoverTrigger = __decorate([
        core_1.Directive({
            selector: '[nglPopover]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.Injector, core_1.Renderer, core_1.ComponentFactoryResolver])
    ], NglPopoverTrigger);
    return NglPopoverTrigger;
}());
exports.NglPopoverTrigger = NglPopoverTrigger;
;
