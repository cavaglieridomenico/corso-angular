import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prova-output',
  templateUrl: './prova-output.component.html',
  styleUrls: ['./prova-output.component.css']
})
export class ProvaOutputComponent implements OnInit {

  @Output() informazione = new EventEmitter<{nomeProg: string, descrizioneProg: string}>();
  @Output() dati = new EventEmitter<{datiSfusi: string}>();


  nomeProgetto = "Formatemp Angular";
  descrizioneProgetto = "Corso gestito da DotAcademy";

  constructor() { }

  ngOnInit(): void {
  }

  onInvia() {
    this.informazione.emit({nomeProg: this.nomeProgetto, descrizioneProg: this.descrizioneProgetto});

    this.dati.emit({datiSfusi: "Vattelapesca"});
  }

}
