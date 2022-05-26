import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { TerzoComponent } from './terzo/terzo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { StudenteComponent } from './primo/studente/studente.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputersComponent } from './computers/computers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    TerzoComponent,
    SecondoComponent,
    StudenteComponent,
    ComputerComponent,
    ComputersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
