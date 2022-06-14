import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      nome: 'Pippo Rossi',
    },
    {
      id: 2,
      nome: 'Maria Bianchi',
    },
    {
      id: 2,
      nome: 'Anna Verdi',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
