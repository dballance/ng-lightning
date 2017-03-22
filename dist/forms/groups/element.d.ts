import { ElementRef, Renderer, TemplateRef } from '@angular/core';
import { NglFormGroupAlternate } from './group-alt';
import { NglFormGroupCheckbox } from './input';
import { NglFormLabelTemplate } from '../form-label';
export declare class NglFormGroupElement {
    private groupAlt;
    private element;
    private renderer;
    contentEl: NglFormGroupCheckbox;
    label: string;
    labelTpl: NglFormLabelTemplate;
    _label: TemplateRef<any> | string;
    constructor(groupAlt: NglFormGroupAlternate, element: ElementRef, renderer: Renderer);
    ngAfterContentInit(): void;
}
