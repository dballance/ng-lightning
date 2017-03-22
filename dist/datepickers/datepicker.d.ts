import { EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
export declare type NglInternalDate = {
    year: number;
    month: number;
    day: number;
    disabled?: boolean;
};
export declare class NglDatepicker {
    private datePipe;
    date: NglInternalDate;
    current: NglInternalDate;
    _date: Date;
    showToday: boolean;
    _showToday: boolean;
    dateChange: EventEmitter<{}>;
    weeks: NglInternalDate[];
    uid: string;
    private monthLabel;
    constructor(datePipe: DatePipe);
    moveYear(year: string | number): void;
    keyboardHandler($event: KeyboardEvent, code: string, param?: string): void;
    isSelected(date: NglInternalDate): boolean;
    isActive(date: NglInternalDate): boolean;
    select(date?: NglInternalDate): void;
    indexTrackBy(index: number): number;
    selectToday(): void;
    private parseDate(date);
    private isEqualDate(d1, d2);
    private render();
    private daysInMonth(year, month);
    private daysInPreviousMonth(year, month);
    private daysInNextMonth(year, month, numOfDays);
    private getDayObjects(year, month, from, to, disabled?);
    private today;
    private split;
}
