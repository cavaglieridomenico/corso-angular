export class Lezione {
  nome: string;
  descrizione: string;
  type?: string;

  constructor(nome: string, descrizione: string, type?: string) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.type = type;
  }
}
