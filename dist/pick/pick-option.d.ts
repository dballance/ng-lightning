import { ElementRef, Renderer } from '@angular/core';
import { NglPick } from './pick';
export declare class NglPickOption {
    private element;
    private renderer;
    private nglPick;
    active: boolean;
    setValue: any;
    nglPickActiveClass: string;
    private _value;
    private _active;
    private _subscription;
    constructor(element: ElementRef, renderer: Renderer, nglPick: NglPick);
    pick(evt: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _isActive(value);
}
