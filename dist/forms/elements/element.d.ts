import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NglFormInput } from './input';
import { NglFormLabelTemplate } from '../form-label';
export declare class NglFormElement {
    detector: ChangeDetectorRef;
    contentEl: NglFormInput;
    label: string;
    labelTpl: NglFormLabelTemplate;
    setError: string;
    error: string;
    uid: string;
    required: boolean;
    _label: TemplateRef<any> | string;
    isCheckbox: boolean;
    constructor(detector: ChangeDetectorRef);
    ngAfterContentInit(): void;
    private setInputErrorId();
}
