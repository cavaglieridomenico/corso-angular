import { EventEmitter, Injectable } from '@angular/core';
import { Utente } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  utentiAggiornati = new EventEmitter<Utente[]>();

  utentiService: Utente[] = [];

  condividiDati() {
    console.log(this.utentiService);
  }

  updateUtentiService(utente: Utente) {
    this.utentiService.push(utente);
    this.utentiAggiornati.emit(this.utentiService);
  }

  setActive(utente: Utente) {
    utente.status = 'active';
    this.utentiAggiornati.emit(this.utentiService);
  }

  setInactive(utente: Utente) {
    utente.status = 'inactive';
    this.utentiAggiornati.emit(this.utentiService);
  }

  setHidden(utente: Utente) {
    utente.status = 'hidden';
    this.utentiAggiornati.emit(this.utentiService);
  }

  getFilteredUtenti(listaUtenti: Utente[], status: string) {
    return listaUtenti.filter((item) => item.status === status);
  }
}
