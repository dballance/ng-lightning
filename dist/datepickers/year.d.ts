import { EventEmitter } from '@angular/core';
export declare class NglDatepickerYear {
    numYearsBefore: number;
    numYearsAfter: number;
    year: number;
    setYear: string | number;
    yearChange: EventEmitter<{}>;
    range: number[];
    change($event: string): void;
}
