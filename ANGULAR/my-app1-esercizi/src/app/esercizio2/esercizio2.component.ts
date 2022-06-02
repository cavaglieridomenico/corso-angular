import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio2',
  templateUrl: './esercizio2.component.html',
  styleUrls: ['./esercizio2.component.css'],
})
export class Esercizio2Component implements OnInit {
  numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {}
  onReciveCounter(counter: number) {
    if (isNaN(counter)) {
      this.numbers = [];
      return;
    }
    this.numbers.push(counter);
  }
}
