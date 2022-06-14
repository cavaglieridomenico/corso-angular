import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Utente } from 'src/app/shared/utente.model';
import { UtentiService } from 'src/app/shared/utenti.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css'],
})
export class UtenteComponent implements OnInit {
  utente: Utente;
  constructor(
    private utentiService: UtentiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.utente = this.utentiService.getUserById(id);

    this.route.params.subscribe((params: Params) => {
      this.utente = this.utentiService.getUserById(+params['id']);
    });
  }

  onConfirm() {
    this.utentiService.setContattiUpdate(this.utente);
    this.router.navigate(['contatti']);
  }

  onCancel() {
    this.router.navigate(['utenti']);
  }
}
