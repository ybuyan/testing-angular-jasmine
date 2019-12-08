import { TextSummaryPipe } from './text-summary.pipe';

describe('TextSummaryPipe', () => {

  let pipe: TextSummaryPipe;

  beforeEach(() => {
    pipe = new TextSummaryPipe();
  });

  it('Should return an empty string if input is null', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('Should return null if input is undefined', () => {
    expect(pipe.transform(undefined)).toEqual('');
  });

  it('Should return empty string if input is an empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('Should return the same string if the length of input is less than the limit', () => {
    expect(pipe.transform('12345', 5)).toEqual('12345');
  });

  it('Should summarize the input if it is longer than the limit', () => {
    expect(pipe.transform('12345678901', 5)).toEqual('12345...');
  });

  it('Should assume 10 as the limit if not given', () => {
    expect(pipe.transform('12345678901')).toEqual('1234567890...');
  });

});
