import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Esercizio1Component } from './esercizio1/esercizio1.component';
import { ButtonComponent } from './esercizio1/button/button.component';
import { ParagraphComponent } from './esercizio1/paragraph/paragraph.component';
import { DisplayCounterComponent } from './esercizio1/display-counter/display-counter.component';
import { Esercizio2Component } from './esercizio2/esercizio2.component';
import { PariComponent } from './esercizio2/pari/pari.component';
import { DispariComponent } from './esercizio2/dispari/dispari.component';
import { GameControlComponent } from './esercizio2/game-control/game-control.component';
import { Esercizio3Component } from './esercizio3/esercizio3.component';
import { RecensioneComponent } from './esercizio3/recensione/recensione.component';

@NgModule({
  declarations: [
    AppComponent,
    Esercizio1Component,
    ButtonComponent,
    ParagraphComponent,
    DisplayCounterComponent,
    Esercizio2Component,
    PariComponent,
    DispariComponent,
    GameControlComponent,
    Esercizio3Component,
    RecensioneComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
