import { Component } from '@angular/core';
import { Studente } from './prova-input/studente.model';
import { Lezione } from './lezione.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1-comp-databinding';
  messageToUser: string = "";
  lezioni: Lezione[]  = [
    {
      nome: "Html & CSS",
      descrizione: "Rudimenti",
      type: "Lezione Teorica",
    },
    {
      nome: "Angular",
      descrizione: "Corso intensivo",
      type: "Lezione Frontale",
    },
  ]

  onAddedTeo(data: {nomeLezione: string, contenutoLezione: string}) {
    this.messageToUser = "";

    if (!data.nomeLezione || !data.contenutoLezione) {
      console.log("Attenzione, compilare tutti i campi.");
      this.messageToUser = "Attenzione, compilare tutti i campi."
      setTimeout(() => this.messageToUser = '', 2000);
      return;
    }
    console.log(data);
    this.lezioni.push({
      nome: data.nomeLezione,
      descrizione: data.contenutoLezione,
      type: "Lezione Teorica"
    })
  }

  onAddedFront(data: {nomeLezione: string, contenutoLezione: string}) {
    this.messageToUser = "";

    if (!data.nomeLezione || !data.contenutoLezione) {
      console.log("Attenzione, compilare tutti i campi.")
      this.messageToUser = "Attenzione, compilare tutti i campi."
      setTimeout(() => this.messageToUser = '', 2000);
      return;
    }
    console.log(data);
    this.lezioni.push({
      nome: data.nomeLezione,
      descrizione: data.contenutoLezione,
      type: "Lezione Frontale"
    })
  }



  //------------------------------------------------//
  //-------------Esempi Input/Output----------------//
  //-----------------------------------------------//
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
