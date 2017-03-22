import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'template[nglLookupItem]'})
export class NglLookupItemTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'template[nglLookupLabel]'})
export class NglLookupLabelTemplate {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: '[nglLookupHeader]',
  host: {
    '[class.slds-lookup__item--label]': 'true',
  },
})
export class NglLookupHeader {}
