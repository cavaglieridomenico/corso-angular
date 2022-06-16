import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormTemplateDEsercizioComponent } from './form-template-d-esercizio/form-template-d-esercizio.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { EsercizioComponent } from './esercizio/esercizio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent,
    FormTemplateDEsercizioComponent,
    FormReactiveComponent,
    EsercizioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
