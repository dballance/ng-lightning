import { ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';
export declare type Direction = 'top' | 'right' | 'bottom' | 'left';
export declare class NglPopover {
    element: ElementRef;
    renderer: Renderer;
    changeDetector: ChangeDetectorRef;
    private _theme;
    theme: any;
    nglTooltip: any;
    private _nubbin;
    nubbin: Direction;
    constructor(element: ElementRef, renderer: Renderer, changeDetector: ChangeDetectorRef);
}
