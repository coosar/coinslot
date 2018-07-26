import BaseValidator from './BaseValidator';
import SUPPORTED_CURRENCIES from '../supportedCurrencies';

export default class EosValidator extends BaseValidator {
  constructor() {
    super([
      SUPPORTED_CURRENCIES.eos,
    ]);
  }

  validate(address, currency) {
    let result = false;
    if (address.startsWith('EOS')) {
      result = true;
    }
    return result;
  }
}