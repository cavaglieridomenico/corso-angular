import { Component, OnInit, Input } from '@angular/core';
import { Utente } from '../shared/user.model';
import { UtenteService } from './shared/utente.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css'],
})
export class UtenteComponent implements OnInit {
  @Input() userData: Utente;
  constructor(private utenteService: UtenteService) {}

  ngOnInit(): void {}

  onClick1() {
    this.utenteService.setActive(this.userData);
  }

  onClick2() {
    this.utenteService.setInactive(this.userData);
  }

  onClick3() {
    this.utenteService.setHidden(this.userData);
  }
}
