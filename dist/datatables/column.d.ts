import { NglDatatableCell } from './cell';
export declare class NglDatatableColumn {
    heading: string;
    key: string;
    cellClass: any;
    cellTpl: NglDatatableCell;
    sortable: string | boolean;
    private _sortable;
}
