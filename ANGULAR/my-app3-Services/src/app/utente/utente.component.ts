import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../shared/utente.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css'],
})
export class UtenteComponent implements OnInit {
  //Si possono inettare più servizi
  constructor(
    private utenteService: UtenteService,
    private logService: LogService
  ) {
    this.utenteService.scriviDalServiceUtente(
      'Sono nel Component Utente che inietta cose varie usando logService'
    );
  }

  ngOnInit(): void {}

  onModTypeUser() {
    this.logService.aggiornaTipo(1, 'Ammiraglio');
  }
}
