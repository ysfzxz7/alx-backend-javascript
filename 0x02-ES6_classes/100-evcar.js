import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, color, motor, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
