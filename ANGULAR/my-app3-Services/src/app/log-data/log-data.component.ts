import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Utente } from '../shared/utente.model';

@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.component.html',
  styleUrls: ['./log-data.component.css'],
})
export class LogDataComponent implements OnInit {
  utenze: Utente[];
  superUser: Utente;
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.utenze = this.logService.utenti;

    this.logService.scriviInConsole('Component log Data');
    this.logService.condividiDati(); //Scrive in console
    this.logService.aggiungiUtente('Paolo', 'Amministritore');
    this.superUser = this.logService.getSuperUser();
  }
  addUserLog() {
    this.logService.aggiungiUtente('Anna', 'Log');
  }

  modUserType() {
    this.logService.aggiornaTipo(0, 'Base');
  }
}
