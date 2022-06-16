import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormTemplateDEsercizioComponent } from './form-template-d-esercizio/form-template-d-esercizio.component';

@NgModule({
  declarations: [AppComponent, FormTemplateDrivenComponent, FormTemplateDEsercizioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
