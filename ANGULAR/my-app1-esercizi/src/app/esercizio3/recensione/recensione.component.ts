import { Component, Input, OnInit } from '@angular/core';
import { Recensione } from 'src/app/shared/recensione.model';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css'],
})
export class RecensioneComponent implements OnInit {
  @Input('recensioneUtente') element: Recensione;
  constructor() {}

  ngOnInit(): void {}
}
