class Vehicle {
  color: string; //Initialization is optional

  constructor(color: string) {
    this.color = color;
  }
  // public drive(): void {
  //   console.log(`chugga chugga`);
  // }
  protected honk(): void {
    console.log(`Beep`);
  }
}

// const vehicle1 = new Vehicle();
// vehicle1.drive();
// vehicle1.honk();

class Car extends Vehicle {
  wheels: number;

  constructor(color: string, wheels: number) {
    super(color);
    this.wheels = wheels;
  }
  private drive(): void {
    console.log(`Nigga nigga`);
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('Red', 4);
car.startDriving();

console.log(car.color);
