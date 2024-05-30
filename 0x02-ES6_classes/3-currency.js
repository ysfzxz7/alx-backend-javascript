export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  set name(name) {
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if ((typeof code !== 'string') && !(code instanceof String)) {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
