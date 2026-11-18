/** @jest-environment jsdom */
const setupTodo = require('../../helpers/setupTodo');

test('Unit 1: addTask відхиляє порожнє введення та пробіли (TC-008, TC-009)', () => {
  const { addTask } = setupTodo();
  const input = document.getElementById('task');
  const list = document.getElementById('list');

  input.value = '';
  addTask();
  input.value = '   ';
  addTask();

  expect(list.children).toHaveLength(0);
  expect(document.getElementById('empty').style.display).toBe('block');
});
