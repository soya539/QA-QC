/** @jest-environment jsdom */
const setupTodo = require('../../helpers/setupTodo');

test('Unit 2: addTask виводить HTML як текст (TC-010)', () => {
  const { addTask } = setupTodo();
  document.getElementById('task').value = '<script>alert(1)</script>';
  addTask();

  const span = document.querySelector('#list li span');
  expect(span.textContent).toBe('<script>alert(1)</script>');
  expect(span.innerHTML).toBe('&lt;script&gt;alert(1)&lt;/script&gt;');
  expect(document.querySelector('#list script')).toBeNull();
});
