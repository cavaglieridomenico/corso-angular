import { Component, OnInit } from '@angular/core';
import { Utente } from '../shared/user.model';
import { UtenteService } from '../utente/shared/utente.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  singoloUtente: Utente;

  constructor(private utenteService: UtenteService) {}

  ngOnInit(): void {}

  onSubmitItems(
    nome: HTMLInputElement,
    tipoUtente: HTMLInputElement,
    status: HTMLInputElement
  ) {
    this.singoloUtente = new Utente(nome.value, tipoUtente.value, status.value);
    this.utenteService.updateUtentiService(this.singoloUtente);
  }
}
