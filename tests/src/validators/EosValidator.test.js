import EosValidator from 'validators/EosValidator';
import SUPPORTED_CURRENCIES from 'supportedCurrencies';

describe('EosValidator', () => {
  describe('Method validate', () => {
    const validator = new EosValidator();
    test('Should be applied for bitcoin cash', () => {
      const result = validator.isAppliedFor(SUPPORTED_CURRENCIES.eos);

      expect(result).toBe(true);
    });

    test('Shold validate legacy address format', () => {
      const result = validator.validate('EOS6ZXM3JeTT7h7At9bUFkMSns8rMrF5AGRVx8bD2n3vg3vCg1kkR');

      expect(result).toBe(true);
    });
  });
});