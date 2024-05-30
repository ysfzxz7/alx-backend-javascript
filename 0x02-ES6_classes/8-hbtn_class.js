export default class HolbertonClass {
  constructor(size, location) {
    this.location = location;
    this.size = size;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if ((typeof size !== 'number') && !(size instanceof Number)) throw new TypeError('size must be a number');
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if ((typeof location !== 'string') && !(location instanceof String)) throw new TypeError('location must be a string');
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
