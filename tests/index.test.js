const sum = require('..');

describe('Test', () => {
  it('returns 3 when sum (1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
