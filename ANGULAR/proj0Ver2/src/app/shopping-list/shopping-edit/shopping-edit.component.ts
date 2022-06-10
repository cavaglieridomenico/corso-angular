import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingrediente } from 'src/app/shared/ingrediente-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}
  @Output() ingredientiAggiunti = new EventEmitter<Ingrediente>();
  ngOnInit(): void {}
  addIngredienti(nomeIng: HTMLInputElement, quant: HTMLInputElement) {
    let newIngrediente = new Ingrediente(nomeIng.value, +quant.value);
    this.ingredientiAggiunti.emit(newIngrediente);
  }
}
