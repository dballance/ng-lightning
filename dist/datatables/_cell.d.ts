import { NglDatatableColumn } from './column';
export declare class NglInternalDatatableCell {
    row: any;
    column: NglDatatableColumn;
    index: number;
    dataLabel: string;
    context: {
        $implicit: any;
        row: any;
        index: number;
    };
    value: any;
}
