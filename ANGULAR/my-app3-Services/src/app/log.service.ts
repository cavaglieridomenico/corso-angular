import { Injectable } from '@angular/core';
import { Utente } from './shared/utente.model';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  utenti = [
    {
      nome: 'Dario',
      tipo: 'Docente',
    },
    {
      nome: 'Pippo',
      tipo: 'Amministratore',
    },
    {
      nome: 'Pluto',
      tipo: 'Base',
    },
  ];

  private superUser: Utente = {
    nome: 'Paperino',
    tipo: 'Super-user',
  };

  getSuperUser() {
    return this.superUser;
  }

  scriviInConsole(parola: string) {
    console.log('Ciao dal service nel: ' + parola);
  }

  condividiDati() {
    console.log(this.utenti);
  }

  aggiungiUtente(nome: string, tipo: string) {
    this.utenti.push({ nome: nome, tipo: tipo });
  }

  aggiornaTipo(id: number, tipo: string) {
    this.utenti[id].tipo = tipo;
  }
}
