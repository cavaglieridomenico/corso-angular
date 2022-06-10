import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ricetta } from '../ricetta.model';
import { RicettaService } from 'src/app/shared/ricetta.service';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css'],
})
export class ListaRicetteComponent implements OnInit {
  ricette: Ricetta[] = [];
  constructor(private ricettaService: RicettaService) {
    this.ricette = this.ricettaService.getRicette();
  }

  ngOnInit(): void {}
}
