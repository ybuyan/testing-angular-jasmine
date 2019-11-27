import { greet } from './greet';

describe('greet', () => {

  const name = 'Paulo de Tarso';

  it(`Should include the name "${name}" in the message`, () => {
    expect(greet(name)).toContain(name);
  });

});
