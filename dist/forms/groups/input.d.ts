import { NglFormGroup } from './group';
import { NglFormGroupAlternate } from './group-alt';
export declare class NglFormGroupCheckbox {
    type: string;
}
export declare class NglFormGroupRadio {
    type: string;
    name: string;
    constructor(formGroup: NglFormGroup, formGroupAlt: NglFormGroupAlternate);
}
