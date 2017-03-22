"use strict";
var core_1 = require('@angular/core');
var notification_close_1 = require('./notification-close');
var button_icon_1 = require('../buttons/button-icon');
var icon_1 = require('../icons/icon');
var util_1 = require('../util/util');
var NglNotification = (function () {
    function NglNotification(element, renderer, notificationClose) {
        this.element = element;
        this.renderer = renderer;
        this.type = 'toast';
        this.closeEventEmitter = new core_1.EventEmitter();
        this.showClose = false;
        this.currentTimeout = null;
        this.showClose = !!notificationClose;
    }
    Object.defineProperty(NglNotification.prototype, "setSeverity", {
        set: function (severity) {
            this.severity = severity === 'info' ? null : severity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NglNotification.prototype, "timeout", {
        set: function (timeout) {
            var _this = this;
            this.clearTimeout();
            if (util_1.isInt(timeout) && timeout >= 0) {
                this.currentTimeout = setTimeout(function () { return _this.close('timeout'); }, timeout);
            }
        },
        enumerable: true,
        configurable: true
    });
    NglNotification.prototype.ngOnChanges = function (changes) {
        var changedType = changes.type, changedSeverity = changes.setSeverity;
        if (changedType) {
            var previousValue = typeof (changedType.previousValue) === 'string' ? changedType.previousValue : '';
            util_1.replaceClass(this, "slds-notify--" + previousValue, "slds-notify--" + changedType.currentValue);
        }
        if (changedSeverity) {
            var previousValue = typeof (changedSeverity.previousValue) === 'string' ? changedSeverity.previousValue : '';
            util_1.replaceClass(this, "slds-theme--" + previousValue, changedSeverity.currentValue ? "slds-theme--" + changedSeverity.currentValue : null);
        }
    };
    NglNotification.prototype.close = function (reason, $event) {
        this.clearTimeout();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this.closeEventEmitter.emit(reason);
    };
    NglNotification.prototype.clearTimeout = function () {
        if (this.currentTimeout !== null) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NglNotification.prototype, "type", void 0);
    __decorate([
        core_1.Input('severity'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NglNotification.prototype, "setSeverity", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglNotification.prototype, "assistiveText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NglNotification.prototype, "closeAssistiveText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], NglNotification.prototype, "timeout", null);
    __decorate([
        core_1.Output('nglNotificationClose'), 
        __metadata('design:type', Object)
    ], NglNotification.prototype, "closeEventEmitter", void 0);
    NglNotification = __decorate([
        core_1.Component({
            selector: 'ngl-notification',
            template: "\n    <span class=\"slds-assistive-text\">{{assistiveText || severity || 'Info'}}</span><button *ngIf=\"showClose\" type=\"button\" nglButtonIcon=\"inverse\" (click)=\"close('button', $event)\" class=\"slds-notify__close\"><ngl-icon icon=\"close\"></ngl-icon><span class=\"slds-assistive-text\">{{closeAssistiveText || 'Close'}}</span></button><ng-content></ng-content>\n  ",
            directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
            host: {
                '[class.slds-notify]': 'true',
                'role': 'alert',
            },
            styles: [
                ":host.slds-notify--alert {\n      display: block;\n    }",
            ],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'nglNotification',
        }),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, notification_close_1.NglNotificationClose])
    ], NglNotification);
    return NglNotification;
}());
exports.NglNotification = NglNotification;
