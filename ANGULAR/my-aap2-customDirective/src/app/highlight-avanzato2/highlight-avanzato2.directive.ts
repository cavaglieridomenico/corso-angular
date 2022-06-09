import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzato2]',
})
export class HighlightAvanzato2Directive {
  @HostBinding('style.backgroundColor') coloreSfondo: string;
  constructor() {}
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.coloreSfondo = 'purple';
  }

  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.coloreSfondo = 'transparent';
  }
}
