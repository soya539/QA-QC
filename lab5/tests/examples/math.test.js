const add = require('../../src/math');

test('Додавання чисел (приклад методички)', () => {
  expect(add(2, 3)).toBe(6);
  expect(add(-1, 1)).toBe(0);
});
