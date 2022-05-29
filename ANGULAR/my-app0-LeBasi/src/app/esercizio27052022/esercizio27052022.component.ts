import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio27052022',
  templateUrl: './esercizio27052022.component.html',
  styleUrls: ['./esercizio27052022.component.css'],
})
export class Esercizio27052022Component implements OnInit {
  name = '';
  constructor() {}

  ngOnInit(): void {}

  onReset() {
    this.name = '';
  }
}
