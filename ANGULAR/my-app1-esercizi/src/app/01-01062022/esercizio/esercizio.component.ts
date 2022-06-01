import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css'],
})
export class EsercizioComponent implements OnInit {
  word: string = '';
  countList: string[] = ['Count-1', 'Count-2', 'Count-3', 'Count-4', 'Count-5'];
  constructor() {}

  ngOnInit(): void {}

  onShowHideParagraph(data: boolean) {
    if (data) {
      this.word = 'Hello';
    } else {
      this.word = '';
    }
    this.countList.push(`Count-${this.countList.length + 1}`);
  }
}
