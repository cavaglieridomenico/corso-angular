import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  templateUrl: './esercizio1.component.html',
  styleUrls: ['./esercizio1.component.css'],
})
export class Esercizio1Component implements OnInit {
  word: string = '';
  countList: string[] = ['Count-1', 'Count-2', 'Count-3', 'Count-4', 'Count-5'];
  constructor() {}

  ngOnInit(): void {}

  onShowHideParagraph(data: boolean) {
    if (data) {
      this.word = 'Hello!';
    } else {
      this.word = '';
    }
    this.countList.push(`Count-${this.countList.length + 1}`);
  }
}
