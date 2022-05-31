import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lezione-element',
  templateUrl: './lezione-element.component.html',
  styleUrls: ['./lezione-element.component.css'],
})
export class LezioneElementComponent implements OnInit {
  // @Input() element: {
  //   nome: string,
  //   descrizione: string,
  //   type: string
  // }
  //Utilizzo con Alias
  @Input('lezioneEl') element: {
    nome: string;
    descrizione: string;
    type: string;
  };

  constructor() {}
  ngOnInit(): void {}
}
