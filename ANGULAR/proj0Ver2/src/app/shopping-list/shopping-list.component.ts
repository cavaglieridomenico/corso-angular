import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente-model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredienti: Ingrediente[] = [];
  constructor(private shopListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredienti = this.shopListService.getIngredienti();
    this.shopListService.ingredientiAggiornati.subscribe(
      (ingredienti: Ingrediente[]) => {
        this.ingredienti = ingredienti;
      }
    );
  }
  onIngredientiAggiungi(data: Ingrediente) {
    this.ingredienti.push(data);
  }
}
