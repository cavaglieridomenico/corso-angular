import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzato]',
})
export class HighlightAvanzatoDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
  }
  @HostListener('mouseleave') mouseOutr(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
