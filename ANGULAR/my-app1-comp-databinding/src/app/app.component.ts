import { Component } from '@angular/core';
import { Studente } from './prova-input/studente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1-comp-databinding';
  lezioni = [
    {
      nome: "Angular",
      descrizione: "Corso intensivo",
      type: "Lezione frontale",
    },
    {
      nome: "Html & CSS",
      descrizione: "Rudimenti",
      type: "Lezione teorica",
    },
  ]
  nomiDocenti = ["Dario", "Giovanni", "Danilo"];

  cognomiStudenti = ["Cavaglieri", "Morello","Franco"];
  schedeStudenti:Studente[] = [
    {
      nome: "Domenico",
      cognome: "Cavaglieri",
      matricola: 12345,
      materia: "Angular"
    },
    {
      nome: "Daniele",
      cognome: "Morello",
      matricola: 12346,
      materia: "Angular"
    },
    {
      nome: "Cristiano",
      cognome: "Franco",
      matricola: 12347,
      materia: "Angular"
    }
  ];
//Metodo per Output
  onReciveInfo(info: {nomeProg: string, descrizioneProg: string}) {
    console.log(info)
  }
  //Sconsigliato senza interfaccia:
  // onReciveInfo(info) {
  //   console.log(info)
  // }
  onRiceveDato(datiVari: {datiSfusi: string}) {
    console.log(datiVari);
  }
}
