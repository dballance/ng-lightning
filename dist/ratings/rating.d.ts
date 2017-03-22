import { ElementRef, Renderer } from '@angular/core';
export declare class NglRating {
    range: number[];
    currentRate: number;
    icon: string;
    size: 'x-small' | 'small' | 'large';
    isReadonly: any;
    rate: number;
    private max;
    private readonly;
    private inputRate;
    private rateChange;
    private hover;
    constructor(element: ElementRef, renderer: Renderer, max: string | number);
    update(value: number): void;
    enter(value: number): void;
    reset(): void;
    keyboardIncrease(evt: KeyboardEvent): void;
    keyboardDecrease(evt: KeyboardEvent): void;
    ariaValuenow: number;
}
