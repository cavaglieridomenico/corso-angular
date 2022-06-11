import { Component, OnInit } from '@angular/core';
import { Utente } from '../shared/user.model';
import { UtenteService } from '../shared/utente.service';

@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.css'],
})
export class VisibleComponent implements OnInit {
  listaUtenti: Utente[] = [];
  constructor(private utenteService: UtenteService) {
    this.utenteService.utentiAggiornati.subscribe((utentiService: Utente[]) => {
      this.listaUtenti = this.utenteService.getFilteredUtenti(
        utenteService.utentiService,
        'active'
      );
    });
  }

  ngOnInit(): void {}
}
