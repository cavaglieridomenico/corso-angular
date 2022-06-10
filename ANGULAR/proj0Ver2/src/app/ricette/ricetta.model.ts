import { Ingrediente } from '../shared/ingrediente-model';

export class Ricetta {
  nome: string;
  descrizione: string;
  image: string;
  prezzo: number;
  ingredienti: Ingrediente[];
  allergeni?: string[];

  constructor(
    nome: string,
    descrizione: string,
    image: string,
    prezzo: number,
    ingredienti: Ingrediente[],
    allergeni?: string[]
  ) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.image = image;
    this.prezzo = prezzo;
    this.ingredienti = ingredienti;
    this.allergeni = allergeni;
  }
}
