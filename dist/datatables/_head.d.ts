import { EventEmitter, ElementRef, Renderer } from '@angular/core';
export declare class NglInternalDatatableHeadCell {
    private element;
    private renderer;
    heading: string;
    sortable: boolean;
    sortOrder: 'asc' | 'desc';
    isSorted: boolean;
    ariaSort: string;
    onSort: EventEmitter<{}>;
    private _sortOrder;
    constructor(element: ElementRef, renderer: Renderer);
    sortChange(): void;
}
