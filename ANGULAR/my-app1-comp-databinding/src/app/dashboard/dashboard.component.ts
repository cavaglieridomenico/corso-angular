import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lezione } from '../shared/lezione.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() messageToUser: string;
  //Output con Alias
  @Output('lezTeoCr') lezioneCreataTeo = new EventEmitter<Lezione>();

  @Output('lezFroCr') lezioneCreataFront = new EventEmitter<{
    nomeLezione: string;
    contenutoLezione: string;
  }>();

  newNomeLezione = '';
  newDescLezione = '';

  constructor() {}

  ngOnInit(): void {}

  //Metodo costruito in maniera ottimale!
  onAddTeorica() {
    let lezione = new Lezione(
      this.newNomeLezione,
      this.newDescLezione,
      'Lezione Teorica'
    );
    if (!this.newNomeLezione || !this.newDescLezione) {
      console.log('Attenzione, compilare tutti i campi.');
      this.messageToUser = 'Attenzione, compilare tutti i campi.';
      setTimeout(() => (this.messageToUser = ''), 2000);
      return;
    }
    this.lezioneCreataTeo.emit(lezione);
  }

  //Metddo costruito in maniera esemplificativa non corretta
  onAddFrontale() {
    if (!this.newNomeLezione || !this.newDescLezione) {
      console.log('Attenzione, compilare tutti i campi.');
      this.messageToUser = 'Attenzione, compilare tutti i campi.';
      setTimeout(() => (this.messageToUser = ''), 2000);
      return;
    }
    this.lezioneCreataFront.emit({
      nomeLezione: this.newNomeLezione,
      contenutoLezione: this.newDescLezione,
    });
  }
}
