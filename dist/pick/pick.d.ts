import { ElementRef, Renderer } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
export declare class NglPick {
    element: ElementRef;
    private renderer;
    selected: any;
    values: BehaviorSubject<any>;
    isMultiple: boolean;
    setSelected: string;
    nglPickActiveClass: string;
    private nglPickChange;
    setIsMultiple: any;
    constructor(element: ElementRef, renderer: Renderer);
    ngAfterContentInit(): void;
    selectOption(value: any): void;
    optionRemoved(value: any): void;
}
