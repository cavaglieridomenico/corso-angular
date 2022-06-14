import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../shared/utente.model';
import { UtentiService } from '../shared/utenti.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css'],
})
export class UtentiComponent implements OnInit {
  utenti: Utente[];
  constructor(private utentiService: UtentiService) {}

  ngOnInit(): void {
    this.utenti = this.utentiService.getUtenti();
  }
}
