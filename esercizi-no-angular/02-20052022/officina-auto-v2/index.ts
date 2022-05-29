//Interfaces
interface Motor {
  name: string;
  number: number;
  setPower(acceleration: number): number;
}

interface Car {
  brand: string;
  model: string;
  isSport: boolean;
  motor: Motor;
  getSpeed(powerRequired: number): number;
  getRpm(): Number;
}

//Classes
class Motor1800 implements Motor {
  public name = "v-1800";
  public number = 12345;
  setPower(acceleration: number): number {
    return acceleration * 20;
  }
}

class Motor2000 implements Motor {
  public name = "v-2000";
  public number = 67890;
  setPower(acceleration: number): number {
    return acceleration * 22;
  }
}

class Bmw implements Car {
  speed: number = 0;
  constructor(
    public brand: string,
    public model: string,
    public isSport: boolean,
    public motor: Motor
  ) {}
  getSpeed(powerRequired: number): number {
    this.speed = this.motor.setPower(powerRequired);
    return this.speed;
  }
  getRpm(): number {
    return this.speed * 50;
  }
}

class Service {
  private carInventory: Car[] = [];
  setCarInventory(car: Car) {
    this.carInventory.push(car);
  }

  getCarInventory() {
    if (this.carInventory.length === 0) {
      console.log("There are currently no cars in the inventory.");
      return;
    }
    console.log("Car currently in inventory:");
    this.carInventory.forEach((item) =>
      console.log(
        `- ${item.brand.toUpperCase()}  ${item.model.toUpperCase()} ${
          item.isSport ? "Sport" : ""
        } ${item.motor.name}`
      )
    );
  }

  testDriveAll(number: number) {
    if (this.carInventory.length === 0) {
      console.log("There are currently no cars in the inventory.");
      console.log("Please add a car to inventory first.");
      return;
    }
    if (number > 10) number = 10;
    if (number < 0) number = 0;
    if (number === 0) {
      console.log("There are no cars currently in test driving");
      return;
    }
    console.log("Car currently in test driving:");
    this.carInventory.forEach((item) =>
      console.log(
        `- ${item.brand.toUpperCase()} ${item.model.toUpperCase()} ${
          item.isSport ? "Sport" : ""
        } ${item.motor.name} - Speed: ${
          number > 0 && item.isSport
            ? item.getSpeed(number + 1)
            : item.getSpeed(number)
        }Km/h - ${item.getRpm()}rpm`
      )
    );
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
