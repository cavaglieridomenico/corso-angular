import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Utente } from './utente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app6-http';
  constructor(private userService: UsersService) {}

  mieiUsers: Utente[];

  onPrendiUtenti() {
    this.userService.getData().subscribe((utenti) => {
      console.log(utenti);
    });
    this.userService.getDataResponse().subscribe((utenti) => {
      console.log(utenti);
      console.log(utenti.body);
    });
  }

  onCreaUtente(nome: string, cognome: string) {
    this.userService.creaUtente(nome, cognome);
  }
  onPrendiMieiUtenti() {
    this.userService.fetchUtenti().subscribe((utenti) => {
      console.log(utenti);
    });
  }

  onCancellaUtenti() {
    this.userService.deleteUsers().subscribe(() => {
      console.log('Hai cancellato tutti gli utenti');
      this.mieiUsers = [];
    });
  }
  onCancellaSingolo(id: string) {
    this.userService.deleteSingoloUser(id).subscribe(() => {
      console.log("Cancellato l'utente con id: " + id);
      this.onPrendiMieiUtenti();
    });
  }

  onGetPost() {
    this.userService.getPost().subscribe((response) => console.log(response));
  }

  onPostDataPost() {
    this.userService.postDataPost();
  }
}
