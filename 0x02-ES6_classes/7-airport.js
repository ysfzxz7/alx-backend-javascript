export default class {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._code;
  }

  set name(name) {
    if ((typeof name !== 'string') && !(name instanceof String)) throw new TypeError('name must be a string');
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if ((typeof code !== 'string') && !(code instanceof String)) throw new TypeError('code must be a string');
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
