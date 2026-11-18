/** @jest-environment jsdom */
const setupTodo = require('../../helpers/setupTodo');

test('Unit 3: updateEmpty перемикає повідомлення про порожній список', () => {
  const { updateEmpty } = setupTodo();
  const list = document.getElementById('list');
  const empty = document.getElementById('empty');

  expect(empty.style.display).toBe('block');
  list.appendChild(document.createElement('li'));
  updateEmpty();
  expect(empty.style.display).toBe('none');
  list.firstElementChild.remove();
  updateEmpty();
  expect(empty.style.display).toBe('block');
});
