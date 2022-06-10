import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ricetta } from '../ricetta.model';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css'],
})
export class ListaRicetteComponent implements OnInit {
  ricette: Ricetta[] = [];
  @Output() ricettaFuSelezionata = new EventEmitter<Ricetta>();
  constructor() {
    this.ricette = [
      {
        nome: 'Pasta e fagioli',
        descrizione: 'tipico piatto italiano',
        prezzo: 6,
        image: 'https://via.placeholder.com/150',
      },
      {
        nome: 'Pasta al pesto',
        descrizione: 'da Genova con amore',
        prezzo: 9,
        image: 'https://via.placeholder.com/150',
      },
      {
        nome: 'Spagetti allo scoglio',
        descrizione: 'pietre non comprese',
        prezzo: 12,
        image: 'https://via.placeholder.com/150',
        allergeni: ['cozze', 'ricci', 'vongole'],
      },
      {
        nome: 'Carbonara',
        descrizione: 'da Mangiare solo a Roma',
        prezzo: 12,
        image: 'https://via.placeholder.com/150',
        allergeni: ['uova'],
      },
    ];
  }

  ngOnInit(): void {}

  onRicettaSelezionata(ricetta: Ricetta) {
    console.log(ricetta);
    this.ricettaFuSelezionata.emit(ricetta);
  }
}
