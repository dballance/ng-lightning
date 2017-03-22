"use strict";
var popover_1 = require('./popover');
var trigger_1 = require('./trigger');
var behavior_1 = require('./behavior');
var popover_2 = require('./popover');
exports.NglPopover = popover_2.NglPopover;
var trigger_2 = require('./trigger');
exports.NglPopoverTrigger = trigger_2.NglPopoverTrigger;
var behavior_2 = require('./behavior');
exports.NglPopoverBehavior = behavior_2.NglPopoverBehavior;
exports.NGL_POPOVER_DIRECTIVES = [
    trigger_1.NglPopoverTrigger,
    behavior_1.NglPopoverBehavior,
];
exports.NGL_POPOVER_PRECOMPILE = [
    popover_1.NglPopover,
];
