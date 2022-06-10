import { Injectable } from '@angular/core';
import { Utente } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  utentiService: Utente[] = [];

  condividiDati() {
    console.log(this.utentiService);
  }

  updateUtentiService(utente: Utente) {
    this.utentiService.push(utente);
  }

  setActive(utente: Utente) {
    utente.status = 'active';
  }

  setInactive(utente: Utente) {
    utente.status = 'inactive';
  }

  setHidden(utente: Utente) {
    utente.status = 'hidden';
  }
}
