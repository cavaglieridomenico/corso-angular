import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prima App';
  paragraph = 'paragrafo';

  docente = {
    nome: 'Mario Rossi',
    materia: 'Filosofia',
  };
}
