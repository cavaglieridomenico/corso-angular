import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogDataComponent } from './log-data/log-data.component';
import { UtenteComponent } from './utente/utente.component';

@NgModule({
  declarations: [
    AppComponent,
    LogDataComponent,
    UtenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
