// TODO: Import the parent class
const vehicle = require('./vehicle');

// TODO: Create a `Car` class that extends the `Vehicle` class
class car extends vehicle {
  constructor(id, color, Passengers) {
    super(id, 4, 'beep');

    this.color = color;
    this.Passengers = Passengers;
  }
}


const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);
console.log(car)
// console.log('---CAR---');
// car.printInfo();
// car.useHorn();
// car.checkPassengers();
