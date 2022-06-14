import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ContattiComponent } from './contatti/contatti.component';
import { UtenteComponent } from './utenti/utente/utente.component';
import { ContattoComponent } from './contatti/contatto/contatto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UtentiComponent,
    ContattiComponent,
    UtenteComponent,
    ContattoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
