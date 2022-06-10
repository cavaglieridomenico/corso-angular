import { Component, OnInit } from '@angular/core';
import { Utente } from '../shared/user.model';
import { UtenteService } from '../utente/shared/utente.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
})
export class InactiveComponent implements OnInit {
  listaUtenti: Utente[] = [];
  constructor(private utenteService: UtenteService) {
    this.utenteService.utentiAggiornati.subscribe((utentiService: Utente[]) => {
      this.listaUtenti = this.utenteService.getFilteredUtenti(
        utenteService.utentiService,
        'inactive'
      );
      console.log(this.listaUtenti);
    });
  }

  ngOnInit(): void {}
}
