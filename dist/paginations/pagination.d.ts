import { EventEmitter, OnChanges } from '@angular/core';
export declare type NglPage = {
    number: number | string;
    disabled?: boolean;
};
export declare class NglPagination implements OnChanges {
    pages: NglPage[];
    current: number | string;
    pageChange: EventEmitter<number>;
    total: number | string;
    perPage: number | string;
    limit: number | string;
    boundaryNumbers: number;
    boundaryLinks: string | boolean;
    private totalPages;
    private _boundaryLinks;
    hasPrevious(): boolean;
    hasNext(): boolean;
    goto(page: number): void;
    ngOnChanges(): void;
    pageTrackBy(index: number, page: NglPage): number | string;
    start: number;
    end: number;
    private getPageArray(start, end);
    private getPage(number, disabled?);
    private getGapPage(before, after);
    private limits();
}
