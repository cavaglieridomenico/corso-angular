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
  isIncludedUtente: boolean;
  constructor(
    private utentiService: UtentiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const currentUtente = this.utentiService.getUserById(id);
    this.utente = currentUtente;

    this.isIncludedUtente = this.utentiService.isIncludedUtente(
      this.utentiService.getContatti(),
      currentUtente
    );

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
