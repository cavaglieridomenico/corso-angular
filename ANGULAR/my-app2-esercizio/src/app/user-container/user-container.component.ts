import { Component, Input, OnInit } from '@angular/core';
import { Utente } from '../shared/user.model';
import { UtenteService } from '../shared/utente.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  @Input() title: string;
  @Input() status: string;
  listaUtenti: Utente[] = [];
  constructor(private utenteService: UtenteService) {
    this.utenteService.utentiAggiornati.subscribe(() => {
      this.listaUtenti = this.utenteService.getFilteredUtenti(
        utenteService.utentiService,
        this.status
      );
    });
  }

  ngOnInit(): void {}
}
