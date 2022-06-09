import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightBaseDirective } from './highlight-base/hightlight-base.directive';
import { HighlightIntermedioDirective } from './highlight-intermedio/highlight-intermedio.directive';
import { HighlightAvanzatoDirective } from './highlight-avanzato/highlight-avanzato.directive';
import { HighlightAvanzato2Directive } from './highlight-avanzato2/highlight-avanzato2.directive';
import { HighlightAvanzato3Directive } from './hightlight-avanzato3/highlight-avanzato3.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightBaseDirective,
    HighlightIntermedioDirective,
    HighlightAvanzatoDirective,
    HighlightAvanzato2Directive,
    HighlightAvanzato3Directive,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
