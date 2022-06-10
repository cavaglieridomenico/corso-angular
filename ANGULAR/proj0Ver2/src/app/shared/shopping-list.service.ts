import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediente } from './ingrediente-model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientiAggiornati = new EventEmitter<Ingrediente[]>();

  private ingredienti: Ingrediente[] = [
    new Ingrediente('Farina', 10),
    new Ingrediente('Acua', 1),
  ];
  getIngredienti() {
    return this.ingredienti;
  }

  addIngredienteSingolo(ingrediente: Ingrediente) {
    this.ingredienti.push(ingrediente);
    this.ingredientiAggiornati.emit(this.ingredienti);
  }

  addIngredienti(listaIngredienti: Ingrediente[]) {
    // for (let ingrediente of ingredienti) {
    //   this.ingredienti.push(ingrediente);
    // }
    //Oppure
    this.ingredienti.push(...listaIngredienti);
    this.ingredientiAggiornati.emit(this.ingredienti);
  }
}
