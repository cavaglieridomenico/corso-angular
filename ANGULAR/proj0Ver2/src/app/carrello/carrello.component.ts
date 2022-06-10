import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente-model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent implements OnInit {
  ingredienti: Ingrediente[];
  constructor(private shopListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shopListService.ingredientiAggiornati.subscribe(
      (ingredienti: Ingrediente[]) => {
        this.ingredienti = ingredienti;
      }
    );
  }
}
