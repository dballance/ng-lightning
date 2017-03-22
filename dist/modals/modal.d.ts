import { ElementRef, Renderer, EventEmitter } from '@angular/core';
export declare class NglModal {
    private element;
    private renderer;
    header: string;
    size: 'large';
    headingId: string;
    open: boolean;
    _open: any;
    openChange: EventEmitter<{}>;
    constructor(element: ElementRef, renderer: Renderer);
    close(event?: string | boolean): void;
    focusFirst(): void;
}
