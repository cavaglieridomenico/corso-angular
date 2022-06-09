import { Component, OnInit } from '@angular/core';
import { Utente } from './shared/user.model';
import { UtenteService } from './utente/shared/utente.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app2-esercizio';
  listaUtenti: Utente[] = [];
  constructor(private utenteService: UtenteService) {}

  ngOnInit(): void {
    this.listaUtenti = this.utenteService.utentiService;
  }
}
