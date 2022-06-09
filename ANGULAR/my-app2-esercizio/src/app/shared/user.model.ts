export class Utente {
  nome: string;
  tipoUtente: string;
  status: string;

  constructor(nome: string, tipoUtente: string, status: string) {
    this.nome = nome;
    this.tipoUtente = tipoUtente;
    this.status = status;
  }
}
