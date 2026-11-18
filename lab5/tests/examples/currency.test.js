const { parseCurrency, formatCurrency, addCurrencies } = require('../../src/currency');

test('Перетворення валюти на число (модульний)', () => {
  expect(parseCurrency('$50')).toBe(50);
  expect(parseCurrency('$30.25')).toBe(30.25);
});

test('Форматування числа як валюти (модульний)', () => {
  expect(formatCurrency(50)).toBe('$50.00');
  expect(formatCurrency(30.25)).toBe('$30.25');
});

test('Складання валют із взаємодією функцій (інтеграційний)', () => {
  expect(addCurrencies('$50', '$30')).toBe('$80.00');
  expect(addCurrencies('$20.75', '$9.25')).toBe('$30.00');
});
