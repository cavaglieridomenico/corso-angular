export class Server {
  id: number;
  nome: string;
  status: string;

  constructor(id: number, nome: string, status: string) {
    this.id = id;
    this.nome = nome;
    this.status = status;
  }
}
