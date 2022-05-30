import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prova-input2',
  templateUrl: './prova-input2.component.html',
  styleUrls: ['./prova-input2.component.css']
})
export class ProvaInput2Component implements OnInit {
  @Input() cognomi: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
