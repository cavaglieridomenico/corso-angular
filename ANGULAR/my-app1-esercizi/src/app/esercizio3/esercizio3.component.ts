import { Component, OnInit } from '@angular/core';
import { Recensione } from '../shared/recensione.model';

@Component({
  selector: 'app-esercizio3',
  templateUrl: './esercizio3.component.html',
  styleUrls: ['./esercizio3.component.css'],
})
export class Esercizio3Component implements OnInit {
  message: string;
  recensioni: Recensione[] = [];
  winners: Recensione[] = [];
  constructor() {}

  ngOnInit(): void {}

  /**
   * Create a list of winners
   * @param recensioniList Recensione[]
   * @returns Recensione[]
   */
  getWinners(recensioniList: Recensione[]): Recensione[] {
    let winnerList: Recensione[] = [];

    //Voti value for first item
    let maxValue = recensioniList[0].voti;
    winnerList = [];
    for (let recensione of recensioniList) {
      if (recensione.voti > 0 && recensione.voti === maxValue) {
        winnerList.push(recensione);
      }
      if (recensione.voti > 0 && recensione.voti > maxValue) {
        maxValue = recensione.voti;
        winnerList = [];
        winnerList.push(recensione);
      }
    }
    return winnerList;
  }

  /**
   * Create messages based on the winners list
   * @param winnerMessage string
   * @param winnerList Recensione[]
   * @returns string
   */
  getWinnerMessage(winnerMessage: string, winnerList: Recensione[]): string {
    if (winnerList.length <= 0) {
      winnerMessage = 'Al momento non ci sono vincitori...';
      return winnerMessage;
    }
    if (winnerList.length === 1) {
      return (winnerMessage = `Al momento il vincitore è: "${winnerList[0].title}"(con ${winnerList[0].voti} like).`);
    }
    if (winnerList.length > 1) {
      winnerMessage = 'Al momento i vincitori sono: ';
      for (let winner of winnerList) {
        //check if the element is the last one in the list
        if (winnerList.indexOf(winner) === winnerList.length - 1) {
          winnerMessage += `"${winner.title}"(con ${winner.voti} like).`;
        } else winnerMessage += `"${winner.title}"(con ${winner.voti} like), `;
      }
      return winnerMessage;
    }
    return '';
  }

  onSubmit(
    nome: HTMLInputElement,
    link: HTMLInputElement,
    immagine: HTMLInputElement
  ) {
    if (nome.value === '' || link.value === '' || immagine.value === '') {
      this.message = 'Si prega di compilare tutti i campi.';
      setTimeout(() => (this.message = ''), 2000);
      return;
    }
    let recensione = new Recensione(nome.value, link.value, immagine.value);
    this.recensioni.push(recensione);
  }

  onWin() {
    this.winners = this.getWinners(this.recensioni);

    console.log('Elenco vincitori: ', this.winners);

    this.message = this.getWinnerMessage(this.message, this.winners);

    console.log(this.message);

    if (this.message === 'Al momento non ci sono vincitori...')
      setTimeout(() => (this.message = ''), 2000);
  }
}
