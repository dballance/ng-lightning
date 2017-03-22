"use strict";
var core_1 = require('@angular/core');
var util_1 = require('../util/util');
var tab_1 = require('./tab');
var outlet_1 = require('../util/outlet');
var NglTabs = (function () {
    function NglTabs() {
        this.type = 'default';
        this.selectedChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglTabs.prototype, "setSelected", {
        set: function (selected) {
            if (selected === this.selected)
                return;
            this.selected = selected;
            if (!this.tabs)
                return;
            this.activate();
        },
        enumerable: true,
        configurable: true
    });
    NglTabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.activate();
        if (!this.activeTab) {
            setTimeout(function () { return _this.select(_this.tabs.first); });
        }
    };
    NglTabs.prototype.select = function (tab) {
        this.selectedChange.emit(tab);
    };
    NglTabs.prototype.move = function (evt, moves) {
        evt.preventDefault();
        var tabs = this.tabs.toArray();
        var selectedIndex = tabs.indexOf(this.activeTab);
        this.select(tabs[(tabs.length + selectedIndex + moves) % tabs.length]);
    };
    NglTabs.prototype.activate = function () {
        var _this = this;
        this.activeTab = this.findTab();
        this.tabs.forEach(function (t) { return t.active = (t === _this.activeTab); });
    };
    NglTabs.prototype.findTab = function (value) {
        if (value === void 0) { value = this.selected; }
        if (value instanceof tab_1.NglTab) {
            return value;
        }
        if (util_1.isInt(value)) {
            return this.tabs.toArray()[+value];
        }
        return this.tabs.toArray().find(function (t) {
            return t.id && t.id === value;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglTabs.prototype, "type", void 0);
    __decorate([
        core_1.ContentChildren(tab_1.NglTab), 
        __metadata('design:type', core_1.QueryList)
    ], NglTabs.prototype, "tabs", void 0);
    __decorate([
        core_1.Input('selected'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglTabs.prototype, "setSelected", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglTabs.prototype, "selectedChange", void 0);
    NglTabs = __decorate([
        core_1.Component({
            selector: 'ngl-tabs',
            template: "\n    <ul [ngClass]=\"'slds-tabs--' + type + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\"><li *ngFor=\"let tab of tabs\" [ngClass]=\"'slds-tabs--' + type + '__item'\" (click)=\"select(tab)\" [class.slds-active]=\"tab.active\" role=\"presentation\" class=\"slds-text-heading--label\"><a [nglInternalOutlet]=\"tab.heading\" [ngClass]=\"'slds-tabs--' + type + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : 1\"></a></li></ul><div [ngClass]=\"'slds-tabs--' + type + '__content'\" role=\"tabpanel\"><template [ngTemplateOutlet]=\"activeTab?.templateRef\"></template></div>\n  ",
            directives: [outlet_1.NglInternalOutlet],
        }), 
        __metadata('design:paramtypes', [])
    ], NglTabs);
    return NglTabs;
}());
exports.NglTabs = NglTabs;
