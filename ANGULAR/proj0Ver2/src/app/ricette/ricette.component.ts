import { Component, OnInit } from '@angular/core';
import { RicettaService } from '../shared/ricetta.service';
import { Ricetta } from './ricetta.model';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css'],
})
export class RicetteComponent implements OnInit {
  ricettaSelez: Ricetta;

  constructor(private ricettaService: RicettaService) {}

  ngOnInit(): void {
    this.ricettaService.ricettaSelezionata.subscribe((ricetta: Ricetta) => {
      this.ricettaSelez = ricetta;
    });
  }
}
