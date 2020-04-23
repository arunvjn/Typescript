const add = (a: number, b: number): number => a + b;

function subtract(a: number, b: number): number {
  return a - b;
}

const divide = function (a: number, b: number): number {
  return a / b;
};

const logger = function (message: string): void {
  console.log(message);
  //Can return undefined or null
};

const throwError = (error: string): never => {
  throw new Error(error);
};

//Objects
const profile = {
  name: 'Arun',
  age: 25,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
