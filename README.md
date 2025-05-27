# Aula 26/05

Essa aula aprendemos a fazer teste de regressão.

```js
// Arquivo: math.js
function sum(a, b) {
    return a + b;
  }
  
  module.exports = sum;
```
```js
// Arquivo: math.test.js
const sum = require('../src/math');

test('soma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma números negativos', () => {
  expect(sum(-1, -2)).toBe(-3);
});

```
Ao inves de usar o selenium, iremos usar o [Robot Framework](robotframework.org).
