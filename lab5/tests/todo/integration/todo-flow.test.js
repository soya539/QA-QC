/** @jest-environment jsdom */
const setupTodo = require('../../helpers/setupTodo');

test('Integration 1: кнопка → додавання → статус → видалення (TC-001, TC-011, TC-013)', () => {
  setupTodo();
  document.getElementById('task').value = 'Купити хліб';
  document.getElementById('add-btn').click();

  const list = document.getElementById('list');
  const li = list.querySelector('li');
  expect(list.children).toHaveLength(1);
  expect(li.querySelector('span').textContent).toBe('Купити хліб');
  expect(document.getElementById('empty').style.display).toBe('none');

  li.click();
  expect(li.classList.contains('done')).toBe(true);

  li.querySelector('button').click();
  expect(list.children).toHaveLength(0);
  expect(document.getElementById('empty').style.display).toBe('block');
});

test('Integration 2: Enter → додавання → очищення поля (TC-002)', () => {
  setupTodo();
  const input = document.getElementById('task');
  input.value = '  Підготувати звіт  ';
  input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

  const list = document.getElementById('list');
  expect(list.children).toHaveLength(1);
  expect(list.querySelector('span').textContent).toBe('Підготувати звіт');
  expect(input.value).toBe('');
  expect(document.getElementById('empty').style.display).toBe('none');
});
