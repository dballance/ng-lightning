import { ElementRef, Renderer } from '@angular/core';
export declare type AvatarSize = 'x-small' | 'small' | 'medium' | 'large';
export declare type AvatarType = 'rectangle' | 'circle';
export declare class NglAvatar {
    element: ElementRef;
    renderer: Renderer;
    src: string;
    alt: string;
    setSize: AvatarSize;
    setType: AvatarType;
    private _type;
    private _size;
    constructor(element: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    private updateClass(oldValue, newValue);
}
