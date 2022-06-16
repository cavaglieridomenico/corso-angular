import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = true;
  constructor() {}

  //Simulazione autenticazione
  isAuthenticated() {
    const miaProm = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
    return miaProm;
  }
  login() {
    this.loggedIn = true;
    console.log(this.loggedIn);
  }
  logOut() {
    this.loggedIn = false;
    console.log(this.loggedIn);
  }
}
