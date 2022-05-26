//Classes
var Motore1200 = /** @class */ (function () {
    function Motore1200(matricola, nome) {
        this.potenzaErogataRT = 0;
        this.matricola = matricola;
        this.nome = nome;
    }
    Motore1200.prototype.ottieniPotenza = function (value) {
        return value * 10;
    };
    Motore1200.prototype.azzeraPotenza = function (value) {
        return value * 0;
    };
    return Motore1200;
}());
var Bmw = /** @class */ (function () {
    function Bmw(marca, modello, motore) {
        this.motore = motore;
        this.potenzaErogataRT = 0;
        this.velocitaRT = 0;
        this.giriRT = 0;
        this.marca = marca;
        this.modello = modello;
    }
    Bmw.prototype.muovi = function () {
        this.potenzaErogataRT = 10;
        this.velocitaRT = this.motore.ottieniPotenza(this.potenzaErogataRT);
        return this.velocitaRT;
    };
    Bmw.prototype.calcolaGiri = function () {
        return this.velocitaRT * 100;
    };
    return Bmw;
}());
//Instances
var v8 = new Motore1200(12345, "v81200");
console.log("Motore V8 matricola: " + v8.matricola);
console.log("Motore V8 nome:" + v8.nome);
// console.log("Motore V8 accelerazione: " + v8.ottieniPotenza(10));
// console.log("Motore V8 decelerazione: " + v8.diminuisciPotenza());
var x1 = new Bmw("Bmw", "X1", v8);
console.log("Vettura Bmw marca: " + x1.marca);
console.log("Vettura Bmw modello: " + x1.modello);
console.log("Vettura Bmw contagiri: " + x1.calcolaGiri() + "rpm");
console.log("Vettura Bmw in marcia alla velocità di: " + x1.muovi() + "Km/h");
console.log("Vettura Bmw contagiri: " + x1.calcolaGiri() + "rpm");
