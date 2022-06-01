import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EsercizioComponent } from './01-01062022/esercizio/esercizio.component';
import { ButtonComponent } from './01-01062022/esercizio/button/button.component';
import { ParagraphComponent } from './01-01062022/esercizio/paragraph/paragraph.component';
import { DisplayCounterComponent } from './01-01062022/esercizio/display-counter/display-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EsercizioComponent,
    ButtonComponent,
    ParagraphComponent,
    DisplayCounterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
