"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var item_1 = require('./item');
var pill_1 = require('../pills/pill');
var pill_remove_1 = require('../pills/pill-remove');
var util_1 = require('../util/util');
var NglLookup = (function () {
    function NglLookup(element, renderer, detector, debounce) {
        this.element = element;
        this.renderer = renderer;
        this.detector = detector;
        this.debounce = debounce;
        this.valueChange = new core_1.EventEmitter();
        this.pickChange = new core_1.EventEmitter();
        this.inputId = util_1.uniqueId('lookup_input');
        this.globalClickUnsubscriber = null;
        this._open = false;
        this.inputValue = '';
        this.inputSubject = new Rx_1.BehaviorSubject(undefined);
        this.noResults = false;
        this.activeIndex = -1;
        this.pendingFocus = false;
        if (this.debounce === null) {
            this.debounce = 200;
        }
    }
    Object.defineProperty(NglLookup.prototype, "value", {
        set: function (value) {
            if (value !== this.inputSubject.getValue()) {
                this.inputValue = value;
                this.inputSubject.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglLookup.prototype, "setPick", {
        set: function (pick) {
            this.inputValue = this.resolveLabel(pick);
            this.pick = pick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglLookup.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (_open) {
            var _this = this;
            if (this.open === _open)
                return;
            if (_open) {
                this.globalClickUnsubscriber = this.renderer.listenGlobal('document', 'click', function ($event) {
                    _this.globalClickHandler($event);
                    _this.detector.markForCheck();
                });
            }
            else {
                this.activeIndex = -1;
                this.unsubscribeGlobalClick();
            }
            this._open = _open;
        },
        enumerable: true,
        configurable: true
    });
    NglLookup.prototype.handlePick = function (item) {
        this.pickChange.emit(item);
    };
    NglLookup.prototype.onInputChange = function (value) {
        this.inputSubject.next(value);
    };
    NglLookup.prototype.ngOnInit = function () {
        var _this = this;
        var valueStream = this.inputSubject.skip(1)
            .do(function (value) {
            _this.lastUserInput = value;
            _this.activeIndex = -1;
            _this.valueChange.emit(value);
        });
        if (this.debounce > 0) {
            valueStream = valueStream.debounceTime(this.debounce);
        }
        var suggestions$ = valueStream
            .distinctUntilChanged()
            .switchMap(function (value) {
            var suggestions = _this.lookup(value);
            return suggestions instanceof Rx_1.Observable ? suggestions : Rx_1.Observable.of(suggestions);
        })
            .publish().refCount();
        suggestions$.subscribe(function (suggestions) {
            _this.suggestions = suggestions;
            _this.noResults = Array.isArray(suggestions) && !suggestions.length;
            _this.open = !!suggestions;
            _this.detector.markForCheck();
        });
    };
    NglLookup.prototype.resolveLabel = function (item) {
        return this.field && util_1.isObject(item) ? item[this.field] : item;
    };
    NglLookup.prototype.close = function (evt) {
        evt.preventDefault();
        this.open = false;
    };
    NglLookup.prototype.globalClickHandler = function ($event) {
        var nativeElement = this.element.nativeElement;
        if ($event.target === nativeElement || nativeElement.contains($event.target)) {
            return;
        }
        this.open = false;
    };
    NglLookup.prototype.optionId = function (index) {
        return index < 0 ? null : this.inputId + "_active_" + index;
    };
    NglLookup.prototype.pickActive = function (evt) {
        if (this.activeIndex < 0)
            return;
        this.handlePick(this.suggestions[this.activeIndex]);
    };
    NglLookup.prototype.moveActive = function (evt, moves) {
        evt.preventDefault();
        if (!this.expanded)
            return;
        this.activeIndex = Math.max(-1, Math.min(this.activeIndex + moves, this.suggestions.length - 1));
        var value = this.activeIndex === -1 ? this.lastUserInput : this.resolveLabel(this.suggestions[this.activeIndex]);
        this.inputValue = value;
    };
    NglLookup.prototype.ngAfterViewChecked = function () {
        if (this.pendingFocus && !this.pick) {
            this.focus();
        }
        this.pendingFocus = false;
    };
    NglLookup.prototype.clear = function () {
        this.pickChange.emit(null);
        this.pendingFocus = true;
    };
    NglLookup.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'focus', []);
    };
    Object.defineProperty(NglLookup.prototype, "expanded", {
        get: function () {
            return this.open && !this.pick;
        },
        enumerable: true,
        configurable: true
    });
    NglLookup.prototype.ngOnDestroy = function () {
        this.unsubscribeGlobalClick();
    };
    NglLookup.prototype.unsubscribeGlobalClick = function () {
        if (!this.globalClickUnsubscriber)
            return;
        this.globalClickUnsubscriber();
        this.globalClickUnsubscriber = null;
    };
    __decorate([
        core_1.ContentChild(item_1.NglLookupItemTemplate), 
        __metadata('design:type', item_1.NglLookupItemTemplate)
    ], NglLookup.prototype, "itemTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglLookup.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglLookup.prototype, "value", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglLookup.prototype, "valueChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], NglLookup.prototype, "lookup", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglLookup.prototype, "field", void 0);
    __decorate([
        core_1.Input('pick'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NglLookup.prototype, "setPick", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NglLookup.prototype, "pickChange", void 0);
    __decorate([
        core_1.ViewChild('lookupInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], NglLookup.prototype, "inputEl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], NglLookup.prototype, "open", null);
    NglLookup = __decorate([
        core_1.Component({
            selector: 'ngl-lookup',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div data-select=\"single\" data-scope=\"single\" [class.slds-is-open]=\"expanded\" class=\"slds-lookup slds-form-element\"><label [attr.for]=\"inputId\" class=\"slds-form-element__label\"><ng-content select=\"[nglLookupLabel]\"></ng-content></label><div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon--right\"><div *ngIf=\"pick\" class=\"slds-pill_container\"><ngl-pill (nglPillRemove)=\"clear()\">{{resolveLabel(pick)}}</ngl-pill></div><input #lookupInput [id]=\"inputId\" type=\"text\" [ngClass]=\"{'slds-hide': pick}\" aria-autocomplete=\"list\" role=\"combobox\" [attr.aria-expanded]=\"!!expanded\" [attr.aria-activedescendant]=\"optionId(activeIndex)\" [ngModel]=\"inputValue\" (ngModelChange)=\"onInputChange($event)\" (keydown.Esc)=\"close($event)\" [placeholder]=\"placeholder || ''\" (keydown.ArrowDown)=\"moveActive($event, 1)\" (keydown.ArrowUp)=\"moveActive($event, -1)\" (keydown.Enter)=\"pickActive($event)\" class=\"slds-input slds-lookup__search-input\"></div><div *ngIf=\"expanded\" role=\"listbox\" [ngSwitch]=\"!!itemTemplate\" class=\"slds-lookup__menu\"><ul role=\"presentation\" class=\"slds-lookup__list\" *ngSwitchCase=\"false\"><li *ngIf=\"noResults\"><div class=\"slds-lookup__item--label\">No results found</div></li><li *ngFor=\"let item of suggestions; let i=index\" (click)=\"handlePick(item)\" [ngClass]=\"{'slds-dropdown__item--active': i === activeIndex }\"><a [id]=\"optionId(i)\" role=\"option\" class=\"slds-lookup__item-action\">{{resolveLabel(item)}}</a></li></ul><ul role=\"presentation\" class=\"slds-lookup__list\" *ngSwitchCase=\"true\"><li *ngIf=\"noResults\"><div class=\"slds-lookup__item--label\">No results found</div></li><li *ngFor=\"let item of suggestions; let i=index\" (click)=\"handlePick(item)\" [ngClass]=\"{'slds-dropdown__item--active': i === activeIndex }\"><a [id]=\"optionId(i)\" role=\"option\" class=\"slds-lookup__item-action\"><template [ngTemplateOutlet]=\"itemTemplate.templateRef\" [ngOutletContext]=\"{ $implicit: item }\"></template></a></li></ul></div></div>\n  ",
            directives: [pill_1.NglPill, pill_remove_1.NglPillRemove],
            styles: [
                ".slds-dropdown__item--active > a {\n        outline: 0;\n        text-decoration: none;\n        background-color: #f4f6f9;\n    }",
            ],
        }),
        __param(3, core_1.Attribute('debounce')), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.ChangeDetectorRef, Number])
    ], NglLookup);
    return NglLookup;
}());
exports.NglLookup = NglLookup;
