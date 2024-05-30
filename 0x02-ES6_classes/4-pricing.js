import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if ((typeof amount !== 'number') && !(amount instanceof Number)) throw new Error('Number must be a number');
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if ((currency instanceof Currency)) this._currency = currency;
    else throw new TypeError('Currency must be a currency');
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') && !(amount instanceof Number)) throw new TypeError('Amount must be a number');
    if ((typeof conversionRate !== 'number') && !(conversionRate instanceof Number)) throw new TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}
