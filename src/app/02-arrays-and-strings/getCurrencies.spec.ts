import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {

  it(`Should return the supported currencies`, () => {
    const currencies = getCurrencies();
    expect(currencies).toContain('USD');
    expect(currencies).toContain('AUD');
    expect(currencies).toContain('EUR');
    expect(currencies).toContain('BRL');
  });

});
