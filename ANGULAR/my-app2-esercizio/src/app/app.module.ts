import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { UtenteComponent } from './utente/utente.component';
import { VisibleComponent } from './visible/visible.component';
import { HiddenComponent } from './hidden/hidden.component';
import { InactiveComponent } from './inactive/inactive.component';
import { UserContainerComponent } from './user-container/user-container.component';

@NgModule({
  declarations: [AppComponent, NewAccountComponent, UtenteComponent, VisibleComponent, HiddenComponent, InactiveComponent, UserContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
