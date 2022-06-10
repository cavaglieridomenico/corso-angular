export class Ricetta {
  nome: string;
  descrizione: string;
  image: string;
  prezzo: number;
  allergeni?: string[];

  constructor(
    nome: string,
    descrizione: string,
    image: string,
    prezzo: number,
    allergeni?: string[]
  ) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.image = image;
    this.prezzo = prezzo;
    this.allergeni = allergeni;
  }
}
