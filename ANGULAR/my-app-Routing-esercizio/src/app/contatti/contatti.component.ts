import { Component, OnInit } from '@angular/core';
import { Utente } from '../shared/utente.model';
import { UtentiService } from '../shared/utenti.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
})
export class ContattiComponent implements OnInit {
  contatti: Utente[];
  constructor(private utentiService: UtentiService) {}

  ngOnInit(): void {
    this.contatti = this.utentiService.getContatti();
  }
}
