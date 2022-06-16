import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderscore]',
})
export class UnderscoreDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.textDecoration = 'underline';
  }
}
