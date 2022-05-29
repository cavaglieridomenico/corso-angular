import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RicetteComponent } from './ricette/ricette.component';
import { ListaRicetteComponent } from './ricette/lista-ricette/lista-ricette.component';
import { DettaglioRicetteComponent } from './ricette/dettaglio-ricette/dettaglio-ricette.component';
import { ItemRicettaComponent } from './ricette/lista-ricette/item-ricetta/item-ricetta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RicetteComponent,
    ListaRicetteComponent,
    DettaglioRicetteComponent,
    ItemRicettaComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
