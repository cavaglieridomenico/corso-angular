import { Component, OnInit, Input } from '@angular/core';
import { Lezione } from '../shared/lezione.model';

@Component({
  selector: 'app-lezione-element',
  templateUrl: './lezione-element.component.html',
  styleUrls: ['./lezione-element.component.css'],
})
export class LezioneElementComponent implements OnInit {
  // @Input() element: Lezione;

  //Utilizzo con Alias
  @Input('lezioneEl') element: Lezione;

  constructor() {}
  ngOnInit(): void {}
}
