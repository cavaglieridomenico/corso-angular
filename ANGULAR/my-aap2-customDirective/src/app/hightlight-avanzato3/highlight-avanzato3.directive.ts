import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzato3]',
})
export class HighlightAvanzato3Directive {
  @Input() coloreDef: string;
  @Input() coloreHigh: string;
  @HostBinding('style.backgroundColor') coloreSfondo: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.coloreSfondo = this.coloreDef;
  }
  @HostListener('mouseenter') moouseOver(eventData: Event) {
    this.coloreSfondo = this.coloreHigh;
    //Si può fare anche così inserendo renderer e elementRef nel costruttore come nella direttiva 1 di esempio:
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   this.coloreHigh
    //);
  }
  @HostListener('mouseleave') moouseOut(eventData: Event) {
    this.coloreSfondo = this.coloreDef;
    // let newTxt = (this.renderer.createText = 'Qualcosa');
    // this.renderer.appendChild(this.elementRef.nativeElement, newTxt);
  }
}
