import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lezione-element',
  templateUrl: './lezione-element.component.html',
  styleUrls: ['./lezione-element.component.css']
})
export class LezioneElementComponent implements OnInit {

  // @Input() element: {
  //   nome: string,
  //   descrizione: string,
  //   type: string
  // }
  @Input("nomeDelDocente") element: {
    nome: string,
    descrizione: string,
    type: string
  }
  constructor() { }
  ngOnInit(): void {}
}
