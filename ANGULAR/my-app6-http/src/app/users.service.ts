import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Utente } from './utente.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  dati: Utente;
  constructor(private http: HttpClient) {}
  url = 'https://projdotacademy-default-rtdb.europe-west1.firebasedatabase.app';

  getData() {
    return this.http.get(this.url + '/mieiUtenti.json');
  }
  getDataResponse() {
    return this.http.get(this.url + '/mieiUtenti.json', {
      observe: 'response',
    });
  }

  creaUtente(nome: string, cognome: string) {
    const postUtente: Utente = { nome: nome, cognome: cognome };

    this.http
      .post(this.url + '/mieiUtenti.json', postUtente)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  //Richiesta GET specifica per Firebase la response RealTime Database
  fetchUtenti() {
    return this.http
      .get<{ [key: string]: Utente }>(this.url + '/mieiUtenti.json')
      .pipe(
        map((responseData) => {
          const mieiUtentiArray: Utente[] = [];

          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              mieiUtentiArray.push({ ...responseData[key], id: key });
            }
          }
          return mieiUtentiArray;
        })
      );
  }

  deleteUsers() {
    return this.http.delete(this.url + '/mieiUtenti.json');
  }

  deleteSingoloUser(id: string) {
    return this.http.delete(this.url + '/mieiUtenti/' + id + '.json');
  }

  getPost() {
    return this.http.get('http://localhost:3000/posts');
  }

  postDataPost() {
    this.http
      .post('http://localhost:3000/posts', {
        pippo: 'Ciao',
        paperino: 'dieur',
      })
      .subscribe(() => console.log('Hai aggiunto un post'));
  }
}
