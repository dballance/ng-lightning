import { ChangeDetectorRef, QueryList, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { NglDatatableColumn } from './column';
export interface INglDatatableSort {
    key: string;
    order: 'asc' | 'desc';
}
export declare class NglDatatable {
    private detector;
    data: any[];
    trackByKey: string;
    bordered: boolean;
    striped: boolean;
    sort: INglDatatableSort;
    sortChange: EventEmitter<INglDatatableSort>;
    columns: QueryList<NglDatatableColumn>;
    private _columnsSubscription;
    constructor(detector: ChangeDetectorRef, element: ElementRef, renderer: Renderer);
    columnTrackBy(index: number, column: NglDatatableColumn): string | number;
    dataTrackBy(index: number, data: any): any;
    onColumnSort(column: NglDatatableColumn, order: 'asc' | 'desc'): void;
    getColumnSortOrder(column: NglDatatableColumn): "asc" | "desc";
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
