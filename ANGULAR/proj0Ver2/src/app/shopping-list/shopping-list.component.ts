import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}
  ingredienti: Ingrediente[] = [
    new Ingrediente('Cipolle', 3),
    new Ingrediente('Pmodori', 5),
    new Ingrediente('Patate', 9),
  ];

  ngOnInit(): void {}
  onIngredientiAggiungi(data: Ingrediente) {
    this.ingredienti.push(data);
  }
}
