import { ElementRef, TemplateRef, ViewContainerRef, Renderer, ComponentFactoryResolver, Injector } from '@angular/core';
import { Direction } from './popover';
export declare class NglPopoverTrigger {
    private element;
    private viewContainer;
    private injector;
    private renderer;
    nglPopover: string | TemplateRef<any>;
    nglPopoverPlacement: Direction;
    nglPopoverTheme: string;
    nglTooltip: string | boolean;
    nglOpen: boolean;
    private popover;
    private popoverFactory;
    private componentRef;
    private placement;
    private theme;
    private tether;
    constructor(element: ElementRef, viewContainer: ViewContainerRef, injector: Injector, renderer: Renderer, componentFactoryResolver: ComponentFactoryResolver);
    ngOnDestroy(): void;
    private setTether(create?);
    private setPopover();
    private create();
    private projectableNodes;
    private destroy();
}
