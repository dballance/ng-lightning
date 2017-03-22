import { TemplateRef } from '@angular/core';
import { NglFormLabelTemplate } from '../form-label';
export declare class NglFormGroup {
    label: string;
    labelTpl: NglFormLabelTemplate;
    error: string;
    required: boolean;
    uid: string;
    _label: TemplateRef<any> | string;
}
