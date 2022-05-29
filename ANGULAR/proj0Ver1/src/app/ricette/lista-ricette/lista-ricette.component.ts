import { Component, OnInit } from '@angular/core';
import { Ricetta } from '../ricetta.model';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css'],
})
export class ListaRicetteComponent implements OnInit {
  // ricette: Ricetta[] = [
  //   new Ricetta(
  //     'Pasta e fagioli',
  //     "Un tipico piatto all'iteliana",
  //     'https://via.placeholder.com/150',
  //     12
  //   ),
  //   new Ricetta(
  //     'Carbonara',
  //     'Da mangiare solo a Roma',
  //     'https://via.placeholder.com/150',
  //     18,
  //     'Uova'
  //   ),
  //   new Ricetta(
  //     'Spagetti allo scoglio',
  //     'Pietre non comprese',
  //     'https://via.placeholder.com/150',
  //     20,
  //     'Gamberi'
  //   ),
  // ];
  ricette: Ricetta[] = [];
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
}
