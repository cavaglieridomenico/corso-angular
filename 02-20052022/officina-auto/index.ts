//Interfaces
interface Motore {
  matricola: number;
  nome: string;
  ottieniPotenza(value: number): number;
  azzeraPotenza(value: number): number;
}

interface Auto {
  marca: string;
  modello: string;
  potenzaErogataRT: number;
  velocitaRT: number;
  muovi(): number;
  calcolaGiri(): number;
}

//Classes
class Motore1200 implements Motore {
  matricola: number;
  nome: string;
  potenzaErogataRT: number = 0;
  constructor(matricola: number, nome: string) {
    this.matricola = matricola;
    this.nome = nome;
  }
  ottieniPotenza(value: number): number {
    return value * 10;
  }
  azzeraPotenza(value: number): number {
    return value * 0;
  }
}

class Bmw implements Auto {
  marca: string;
  modello: string;
  potenzaErogataRT = 0;
  velocitaRT: number = 0;
  giriRT = 0;
  constructor(marca: string, modello: string, private motore: Motore) {
    this.marca = marca;
    this.modello = modello;
  }
  muovi(): number {
    this.potenzaErogataRT = 10;
    this.velocitaRT = this.motore.ottieniPotenza(this.potenzaErogataRT);
    return this.velocitaRT;
  }
  calcolaGiri(): number {
    return this.velocitaRT * 100;
  }
}

//Instances
const v8 = new Motore1200(12345, "v81200");
console.log("Motore V8 matricola: " + v8.matricola);
console.log("Motore V8 nome:" + v8.nome);

const x1 = new Bmw("Bmw", "X1", v8);
console.log("Vettura Bmw marca: " + x1.marca);
console.log("Vettura Bmw modello: " + x1.modello);
console.log("Vettura Bmw contagiri: " + x1.calcolaGiri() + "rpm");
console.log("Vettura Bmw in marcia alla velocità di: " + x1.muovi() + "Km/h");
console.log("Vettura Bmw contagiri: " + x1.calcolaGiri() + "rpm");
