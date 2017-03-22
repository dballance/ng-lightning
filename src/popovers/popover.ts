import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer, HostListener} from '@angular/core';
import {replaceClass, toBoolean} from '../util/util';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'ngl-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './popover.pug',
})
export class NglPopover {

  @Output() afterViewInit = new EventEmitter();

  @Output() onInteraction = new EventEmitter<boolean>();

  private _theme: string;
  @Input() set theme(theme: any) {
    replaceClass(this, `slds-theme--${this._theme}`, theme ? `slds-theme--${theme}` : '');
    this._theme = theme;
  }

  @Input() set nglTooltip(isTooltip: any) {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-popover--tooltip', toBoolean(isTooltip));
  }

  private _nubbin: Direction;
  set nubbin(direction: Direction) {
    replaceClass(this, `slds-nubbin--${this._nubbin}`, direction ? `slds-nubbin--${direction}` : '');
    this._nubbin = direction;
  }

  constructor(public element: ElementRef, public renderer: Renderer, public changeDetector: ChangeDetectorRef) {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-popover', true);

    // Prevent position changes of "close by" elements
    this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
  }

  ngAfterViewInit() {
    this.afterViewInit.emit(null);
  }

  @HostListener('mouseenter', ['$event', 'true'])
  @HostListener('mouseleave', ['$event', 'false'])
  interactiveHandler(evt: Event, isEnter: boolean) {
    this.onInteraction.emit(isEnter);
  }

}
