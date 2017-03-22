import { EventEmitter, OnChanges, ElementRef, Renderer } from '@angular/core';
import { NglNotificationClose } from './notification-close';
export declare class NglNotification implements OnChanges {
    element: ElementRef;
    renderer: Renderer;
    type: 'toast' | 'alert';
    setSeverity: string;
    assistiveText: string;
    closeAssistiveText: string;
    timeout: number;
    closeEventEmitter: EventEmitter<string>;
    private severity;
    private showClose;
    private currentTimeout;
    constructor(element: ElementRef, renderer: Renderer, notificationClose: NglNotificationClose);
    ngOnChanges(changes: any): void;
    close(reason?: string, $event?: Event): void;
    private clearTimeout();
}
