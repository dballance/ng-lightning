"use strict";
var element_1 = require('./elements/element');
var input_1 = require('./elements/input');
var required_1 = require('./elements/required');
var group_1 = require('./groups/group');
var group_alt_1 = require('./groups/group-alt');
var element_2 = require('./groups/element');
var input_2 = require('./groups/input');
var form_label_1 = require('./form-label');
var element_3 = require('./elements/element');
exports.NglFormElement = element_3.NglFormElement;
var input_3 = require('./elements/input');
exports.NglFormInput = input_3.NglFormInput;
exports.NglFormTextarea = input_3.NglFormTextarea;
exports.NglFormSelect = input_3.NglFormSelect;
exports.NglFormCheckbox = input_3.NglFormCheckbox;
var required_2 = require('./elements/required');
exports.NglFormElementRequired = required_2.NglFormElementRequired;
var group_2 = require('./groups/group');
exports.NglFormGroup = group_2.NglFormGroup;
var group_alt_2 = require('./groups/group-alt');
exports.NglFormGroupAlternate = group_alt_2.NglFormGroupAlternate;
var element_4 = require('./groups/element');
exports.NglFormGroupElement = element_4.NglFormGroupElement;
var input_4 = require('./groups/input');
exports.NglFormGroupCheckbox = input_4.NglFormGroupCheckbox;
exports.NglFormGroupRadio = input_4.NglFormGroupRadio;
var form_label_2 = require('./form-label');
exports.NglFormLabelTemplate = form_label_2.NglFormLabelTemplate;
exports.NGL_FORM_DIRECTIVES = [
    element_1.NglFormElement,
    input_1.NglFormInput, input_1.NglFormTextarea, input_1.NglFormSelect, input_1.NglFormCheckbox,
    required_1.NglFormElementRequired,
    group_1.NglFormGroup,
    group_alt_1.NglFormGroupAlternate,
    element_2.NglFormGroupElement,
    input_2.NglFormGroupCheckbox, input_2.NglFormGroupRadio,
    form_label_1.NglFormLabelTemplate,
];
