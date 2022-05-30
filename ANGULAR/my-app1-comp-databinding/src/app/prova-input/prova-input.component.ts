import { Component, Input, OnInit } from '@angular/core';
import { Studente } from './studente.model';

@Component({
  selector: 'app-prova-input',
  templateUrl: './prova-input.component.html',
  styleUrls: ['./prova-input.component.css']
})
export class ProvaInputComponent implements OnInit {
  @Input("elencoSchede") studente: Studente;
  constructor() { }

  ngOnInit(): void {
  }

}
