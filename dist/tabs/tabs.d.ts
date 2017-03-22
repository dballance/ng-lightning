import { QueryList, EventEmitter } from '@angular/core';
import { NglTab } from './tab';
export declare class NglTabs {
    type: 'default' | 'scoped';
    tabs: QueryList<NglTab>;
    activeTab: NglTab;
    selected: string | number | NglTab;
    setSelected: string | number | NglTab;
    selectedChange: EventEmitter<NglTab>;
    ngAfterContentInit(): void;
    select(tab: NglTab): void;
    move(evt: Event, moves: number): void;
    private activate();
    private findTab(value?);
}
