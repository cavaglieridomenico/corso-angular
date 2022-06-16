import { Injectable } from '@angular/core';
import { Utente } from './utente.model';

@Injectable({
  providedIn: 'root',
})
export class UtentiService {
  private contatti: Utente[] = [];
  private utenti: Utente[] = [
    {
      id: 1,
      nome: 'Mario Rossi',
    },
    {
      id: 2,
      nome: 'Maria Bianchi',
    },
    {
      id: 3,
      nome: 'Anna Verdi',
    },
  ];

  getUtenti() {
    return this.utenti;
  }

  getUserById(id: number) {
    return this.utenti.find((item) => item.id === id);
  }

  getContatti() {
    return this.contatti;
  }

  isIncludedUtente(listaUtenti: Utente[], utente: Utente) {
    return listaUtenti.includes(utente);
  }

  setContattiUpdate(utente: Utente) {
    this.contatti.push(utente);
  }
}
