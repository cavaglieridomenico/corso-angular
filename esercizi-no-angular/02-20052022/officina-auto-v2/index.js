"use strict";
//Classes
class Motor1800 {
    constructor() {
        this.name = "v-1800";
        this.number = 12345;
    }
    setPower(acceleration) {
        return acceleration * 20;
    }
}
class Motor2000 {
    constructor() {
        this.name = "v-2000";
        this.number = 67890;
    }
    setPower(acceleration) {
        return acceleration * 22;
    }
}
class Bmw {
    constructor(brand, model, isSport, motor) {
        this.brand = brand;
        this.model = model;
        this.isSport = isSport;
        this.motor = motor;
        this.speed = 0;
    }
    getSpeed(powerRequired) {
        this.speed = this.motor.setPower(powerRequired);
        return this.speed;
    }
    getRpm() {
        return this.speed * 50;
    }
}
class Service {
    constructor() {
        this.carInventory = [];
    }
    setCarInventory(car) {
        this.carInventory.push(car);
    }
    getCarInventory() {
        if (this.carInventory.length === 0) {
            console.log("There are currently no cars in the inventory.");
            return;
        }
        console.log("Car currently in inventory:");
        this.carInventory.forEach((item) => console.log(`- ${item.brand.toUpperCase()}  ${item.model.toUpperCase()} ${item.isSport ? "Sport" : ""} ${item.motor.name}`));
    }
    testDriveAll(number) {
        if (this.carInventory.length === 0) {
            console.log("There are currently no cars in the inventory.");
            console.log("Please add a car to inventory first.");
            return;
        }
        if (number > 10)
            number = 10;
        if (number < 0)
            number = 0;
        if (number === 0) {
            console.log("There are no cars currently in test driving");
            return;
        }
        console.log("Car currently in test driving:");
        this.carInventory.forEach((item) => console.log(`- ${item.brand.toUpperCase()} ${item.model.toUpperCase()} ${item.isSport ? "Sport" : ""} ${item.motor.name} - Speed: ${number > 0 && item.isSport
            ? item.getSpeed(number + 1)
            : item.getSpeed(number)}Km/h - ${item.getRpm()}rpm`));
    }
}
const service1 = new Service();
service1.getCarInventory();
service1.setCarInventory(new Bmw("bmw", "x1", false, new Motor1800()));
service1.setCarInventory(new Bmw("Bmw", "Serie1", true, new Motor1800()));
service1.setCarInventory(new Bmw("bmw", "x1", false, new Motor2000()));
service1.setCarInventory(new Bmw("Bmw", "Serie1", true, new Motor2000()));
service1.getCarInventory();
service1.testDriveAll(8);
service1.testDriveAll(0);
