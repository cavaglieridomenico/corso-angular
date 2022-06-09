import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlightBase]',
})
export class HighlightBaseDirective implements OnInit {
  //Dependency Injection - riferimento di un elemento nel quale avverrà l'injection
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
  }
}
