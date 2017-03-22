"use strict";
var core_1 = require('@angular/core');
var dropdown_item_1 = require('./dropdown-item');
var pick_1 = require('../pick/pick');
var util_1 = require('../util/util');
var openEventEmitter = new core_1.EventEmitter();
var NglDropdown = (function () {
    function NglDropdown(element, renderer, pick) {
        this.element = element;
        this.renderer = renderer;
        this.pick = pick;
        this.handlePageEvents = true;
        this.isOpenChange = new core_1.EventEmitter();
        this.triggerFocusEventEmitter = new core_1.EventEmitter();
        this.isPicklist = false;
        this.handleGlobalClickEvents = true;
        this._isOpen = false;
        this.clickEventUnsubscriber = null;
        this.isPicklist = this.pick && this.pick.element.nativeElement === this.element.nativeElement;
    }
    Object.defineProperty(NglDropdown.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (isOpen) {
            var _this = this;
            isOpen = util_1.toBoolean(isOpen);
            if (isOpen) {
                this._subscribeToGlobalClickEvents();
                this.handleGlobalClickEvents = false;
                setTimeout(function () { return _this.handleGlobalClickEvents = true; });
            }
            else {
                this._unsubscribeFromGlobalClickEvents();
            }
            this._isOpen = isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglDropdown.prototype, "__isOpen", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    NglDropdown.prototype.onKeydownClose = function (eventName) {
        this.toggle(false);
        if (eventName === 'esc') {
            this.triggerFocusEventEmitter.emit(null);
        }
    };
    NglDropdown.prototype.onKeydownFocusNext = function ($event, direction) {
        $event.preventDefault();
        this.focusItem(direction);
    };
    NglDropdown.prototype.ngOnInit = function () {
        this.openEventSubscription = openEventEmitter.subscribe(this.handleDropdownOpenEvent.bind(this));
    };
    NglDropdown.prototype.ngOnDestroy = function () {
        this.openEventSubscription.unsubscribe();
        this._unsubscribeFromGlobalClickEvents();
    };
    NglDropdown.prototype.toggle = function (toggle, focus) {
        if (toggle === void 0) { toggle = !this.isOpen; }
        if (focus === void 0) { focus = false; }
        if (toggle === this.isOpen) {
            return;
        }
        this.isOpenChange.emit(toggle);
        if (toggle) {
            openEventEmitter.emit(this);
            if (focus) {
                this.focusItem('next');
            }
        }
    };
    NglDropdown.prototype.handleGlobalClickEvent = function ($event) {
        if (!this.handlePageEvents || !this.handleGlobalClickEvents ||
            $event.target === this.element.nativeElement || this.element.nativeElement.contains($event.target)) {
            return;
        }
        this.toggle(false);
    };
    NglDropdown.prototype._subscribeToGlobalClickEvents = function () {
        if (this.handlePageEvents && this.clickEventUnsubscriber === null) {
            this.clickEventUnsubscriber = this.renderer.listenGlobal('document', 'click', this.handleGlobalClickEvent.bind(this));
        }
    };
    NglDropdown.prototype._unsubscribeFromGlobalClickEvents = function () {
        if (this.clickEventUnsubscriber !== null) {
            this.clickEventUnsubscriber();
            this.clickEventUnsubscriber = null;
        }
    };
    NglDropdown.prototype.focusItem = function (direction) {
        if (!this.items.length) {
            return;
        }
        var items = this.items.toArray();
        var activeElementIndex = items.findIndex(function (item) { return item.hasFocus(); }) + (direction === 'next' ? 1 : -1);
        if (activeElementIndex === items.length || activeElementIndex < 0) {
            return;
        }
        this.renderer.invokeElementMethod(items[activeElementIndex], 'focus', []);
    };
    NglDropdown.prototype.handleDropdownOpenEvent = function (dropdown) {
        if (dropdown !== this) {
            this.toggle(false);
        }
    };
    __decorate([
        core_1.Input('open'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglDropdown.prototype, "isOpen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglDropdown.prototype, "handlePageEvents", void 0);
    __decorate([
        core_1.ContentChildren(dropdown_item_1.NglDropdownItem, { descendants: true }), 
        __metadata('design:type', core_1.QueryList)
    ], NglDropdown.prototype, "items", void 0);
    __decorate([
        core_1.Output('openChange'), 
        __metadata('design:type', Object)
    ], NglDropdown.prototype, "isOpenChange", void 0);
    __decorate([
        core_1.HostBinding('class.slds-is-open'),
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Object)
    ], NglDropdown.prototype, "__isOpen", null);
    __decorate([
        core_1.HostListener('keydown.esc', ['"esc"']),
        core_1.HostListener('keydown.tab', ['"tab"']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], NglDropdown.prototype, "onKeydownClose", null);
    __decorate([
        core_1.HostListener('keydown.arrowdown', ['$event', '"next"']),
        core_1.HostListener('keydown.arrowup', ['$event', '"previous"']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event, Object]), 
        __metadata('design:returntype', void 0)
    ], NglDropdown.prototype, "onKeydownFocusNext", null);
    NglDropdown = __decorate([
        core_1.Directive({
            selector: '[nglDropdown]',
            host: {
                '[class.slds-dropdown-trigger]': 'true',
                '[class.slds-dropdown-trigger--click]': 'true',
                '[class.slds-picklist]': 'isPicklist',
            },
        }),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, pick_1.NglPick])
    ], NglDropdown);
    return NglDropdown;
}());
exports.NglDropdown = NglDropdown;
