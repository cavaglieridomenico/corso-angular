import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
})
export class ComputersComponent implements OnInit {
  permessoAggComputer = false;
  computerCreation = '';
  nomeComputer = 'NuovoPCTest';
  computerCreated = false;
  computers = ['PcMegatron 1', 'CompServer'];

  nomeComputer2 = 'nuovissimo PC';

  constructor() {
    setTimeout(() => {
      this.permessoAggComputer = true;
    }, 3000);
  }

  ngOnInit(): void {}
  onCreaComputer() {
    this.computerCreation =
      'Stai creando un comuter nuoco chiamato:' + this.nomeComputer;
    this.computerCreated = true;
    this.computers.push(this.nomeComputer);
    console.log(this.computerCreation);
    console.log(this.computers);
  }
  onModificaComputer(nome: any) {
    this.nomeComputer = (<HTMLInputElement>nome.target).value;
    console.log(nome.target.value);
  }
}
