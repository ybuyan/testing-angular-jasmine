import { compute } from './compute';

describe('compute', () => {

  it('Should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('Should increment the input if is positive', () => {
    const result = compute(3);
    expect(result).toBe(4);
  });

});
