import { Component, OnInit } from '@angular/core';
import { Ricetta } from './ricetta.model';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css'],
})
export class RicetteComponent implements OnInit {
  ricettaSelez: Ricetta;

  constructor() {}

  ngOnInit(): void {}
}
