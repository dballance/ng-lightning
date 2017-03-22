"use strict";
function toBoolean(value) {
    switch (value) {
        case '':
            return true;
        case 'false':
        case '0':
            return false;
        default:
            return !!value;
    }
}
exports.toBoolean = toBoolean;
function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}
exports.isInt = isInt;
function isObject(value) {
    var type = typeof value;
    return !!value && (type === 'object' || type === 'function');
}
exports.isObject = isObject;
var idCounter = 0;
function uniqueId(prefix) {
    if (prefix === void 0) { prefix = 'uid'; }
    return "ngl_" + prefix + "_" + ++idCounter;
}
exports.uniqueId = uniqueId;
;
function replaceClass(instance, oldClass, newClass) {
    if (oldClass && oldClass !== newClass) {
        setClass(instance, oldClass, false);
    }
    if (newClass) {
        setClass(instance, newClass, true);
    }
}
exports.replaceClass = replaceClass;
function setClass(instance, klasses, isAdd) {
    if (klasses) {
        (Array.isArray(klasses) ? klasses : [klasses]).forEach(function (k) {
            instance.renderer.setElementClass(instance.element.nativeElement, k, isAdd);
        });
    }
}
