import { Component } from '@angular/core';
import { Studente } from './prova-input/studente.model';
import { Lezione } from './shared/lezione.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app1-comp-databinding';
  messageToUser: string = '';
  lezioni: Lezione[] = [
    {
      nome: 'Html & CSS',
      descrizione: 'Rudimenti',
      type: 'Lezione Teorica',
    },
    {
      nome: 'Angular',
      descrizione: 'Corso intensivo',
      type: 'Lezione Frontale',
    },
  ];

  onAddedTeo(data: Lezione) {
    console.log(data);

    //Modo 1 - Si riceve già il dato tipizzato
    this.lezioni.push(data);

    //Modo 2 con una nuova istanza
    // let nuovaLezione: Lezione = new Lezione(
    //   data.nome,
    //   data.descrizione,
    //   'Lezione Teorica'
    // );
    // this.lezioni.push(nuovaLezione);

    //Modo 3 con un oggetto costruito manualmente
    // this.lezioni.push({
    //   nome: data.nome,
    //   descrizione: data.descrizione,
    //   type: 'Lezione Teorica',
    // });
  }

  onAddedFront(data: { nomeLezione: string; contenutoLezione: string }) {
    this.messageToUser = '';

    console.log(data);
    this.lezioni.push({
      nome: data.nomeLezione,
      descrizione: data.contenutoLezione,
      type: 'Lezione Frontale',
    });
  }

  //------------------------------------------------//
  //-------------Esempi Input/Output----------------//
  //-----------------------------------------------//
  cognomiStudenti = ['Cavaglieri', 'Morello', 'Franco'];
  schedeStudenti: Studente[] = [
    {
      nome: 'Domenico',
      cognome: 'Cavaglieri',
      matricola: 12345,
      materia: 'Angular',
    },
    {
      nome: 'Daniele',
      cognome: 'Morello',
      matricola: 12346,
      materia: 'Angular',
    },
    {
      nome: 'Cristiano',
      cognome: 'Franco',
      matricola: 12347,
      materia: 'Angular',
    },
  ];
  //Metodo per Output
  onReciveInfo(info: { nomeProg: string; descrizioneProg: string }) {
    console.log(info);
  }
  //Sconsigliato senza interfaccia:
  // onReciveInfo(info) {
  //   console.log(info)
  // }
  onRiceveDato(datiVari: { datiSfusi: string }) {
    console.log(datiVari);
  }
}
