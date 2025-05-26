const sum = require('../src/math');

test('soma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma números negativos', () => {
  expect(sum(-1, -2)).toBe(-3);
});
