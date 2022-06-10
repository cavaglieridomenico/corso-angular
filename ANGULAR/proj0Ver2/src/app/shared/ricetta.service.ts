import { EventEmitter, Injectable } from '@angular/core';
import { Ricetta } from '../ricette/ricetta.model';
import { Ingrediente } from './ingrediente-model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RicettaService {
  ricettaSelezionata = new EventEmitter<Ricetta>();

  ingredienti: Ingrediente[] = [];
  private ricette: Ricetta[] = [
    new Ricetta(
      'Pasta e fagioli',
      'tipico piatto italiano',
      'https://via.placeholder.com/150',
      6,
      [new Ingrediente('fagioli', 2), new Ingrediente('pomodoro', 2)]
    ),
    new Ricetta(
      'Carbonara',
      'tipico piatto italiano',
      'https://via.placeholder.com/150',
      6,
      [new Ingrediente('uova', 2), new Ingrediente('guanciale', 2)]
    ),
    new Ricetta(
      'Montanara',
      'tipico piatto italiano',
      'https://via.placeholder.com/150',
      6,
      [new Ingrediente('basilico', 2), new Ingrediente('funghi', 2)]
    ),
  ];

  constructor(private shoppingListservice: ShoppingListService) {}
  getRicette() {
    return this.ricette;
  }
  addIngredientiToShoppingList(ingredienti: Ingrediente[]) {
    console.log(ingredienti);
    this.shoppingListservice.addIngredienti(ingredienti);
  }
}
