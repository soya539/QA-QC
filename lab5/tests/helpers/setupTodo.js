// Підготовка DOM для тестів реального коду застосунку з ЛР №1.
function setupTodo() {
  jest.resetModules();
  document.body.innerHTML = `
    <main>
      <div class="add">
        <input id="task" type="text">
        <button id="add-btn">Додати</button>
      </div>
      <ul id="list"></ul>
      <p id="empty">Поки що немає справ. Додайте першу.</p>
    </main>
  `;
  return require('../../app/script');
}

module.exports = setupTodo;
