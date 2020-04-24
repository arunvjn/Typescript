const carMakers = ['Ford', 'toyota', 'hyundai'];

const dates = [new Date(), new Date()];

//tuples

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

type XYX = {
  a: number;
  b: number;
};

const pepsi: Drink = ['brown', true, 40];
//Type forces order. Cannot rearrage the order. Order would thus have a meaning in the tuple
