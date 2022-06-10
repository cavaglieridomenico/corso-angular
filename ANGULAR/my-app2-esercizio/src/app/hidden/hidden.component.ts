import { Component, OnInit } from '@angular/core';
import { Utente } from '../shared/user.model';
import { UtenteService } from '../utente/shared/utente.service';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css'],
})
export class HiddenComponent implements OnInit {
  listaUtenti: Utente[] = [];
  constructor(private utenteService: UtenteService) {
    this.utenteService.utentiAggiornati.subscribe((utentiService: Utente[]) => {
      this.listaUtenti = this.utenteService.getFilteredUtenti(
        utenteService.utentiService,
        'hidden'
      );
      console.log(this.listaUtenti);
    });
  }

  ngOnInit(): void {}
}
