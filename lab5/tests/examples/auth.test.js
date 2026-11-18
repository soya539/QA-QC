const isPasswordValid = require('../../src/auth');

test('Перевірка довжини пароля (приклад методички)', () => {
  expect(isPasswordValid('password123')).toBe(true);
  expect(isPasswordValid('short')).toBe(false);
});
