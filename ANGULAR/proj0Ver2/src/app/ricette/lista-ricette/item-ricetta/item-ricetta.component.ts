import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RicettaService } from 'src/app/shared/ricetta.service';
import { Ricetta } from '../../ricetta.model';

@Component({
  selector: 'app-item-ricetta',
  templateUrl: './item-ricetta.component.html',
  styleUrls: ['./item-ricetta.component.css'],
})
export class ItemRicettaComponent implements OnInit {
  @Input() ricetta: Ricetta;
  //Sono slegati!
  @Output() ricettaSelezionata = new EventEmitter<void>();

  constructor(private ricettaService: RicettaService) {}

  ngOnInit(): void {}

  onSelected() {
    this.ricettaService.ricettaSelezionata.emit(this.ricetta);
  }
}
