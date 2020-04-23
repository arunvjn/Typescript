let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let any: any = "hey";
any = 1;

let colors: string[] = ["red", "green"];

// Classes

class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let json = '{"x": 20, "y": 10}';
let coordinates = JSON.parse(json); // returns any type.
//Fix
let coordinates2: { x: number; y: number } = JSON.parse(json);

let xyz: number | boolean = 1;
