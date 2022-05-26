import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css'],
})
export class PrimoComponent implements OnInit {
  nomeComponent = 'Primo Component';
  constructor() {}

  ngOnInit(): void {}
}
