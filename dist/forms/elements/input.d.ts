import { ElementRef, Renderer } from '@angular/core';
export declare class NglFormInput {
    protected element: ElementRef;
    protected renderer: Renderer;
    describedBy: string;
    protected hostClass: string;
    constructor(element: ElementRef, renderer: Renderer);
    setup(id: string): void;
}
export declare class NglFormTextarea extends NglFormInput {
    protected element: ElementRef;
    protected renderer: Renderer;
    protected hostClass: string;
    constructor(element: ElementRef, renderer: Renderer);
}
export declare class NglFormSelect extends NglFormInput {
    protected element: ElementRef;
    protected renderer: Renderer;
    protected hostClass: string;
    constructor(element: ElementRef, renderer: Renderer);
}
export declare class NglFormCheckbox extends NglFormInput {
    protected element: ElementRef;
    protected renderer: Renderer;
    protected hostClass: string;
    constructor(element: ElementRef, renderer: Renderer);
}
