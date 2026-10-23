const input = document.getElementById("task");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");
const empty = document.getElementById("empty");

function updateEmpty() {
  empty.style.display = list.children.length ? "none" : "block";
}

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  li.addEventListener("click", () => li.classList.toggle("done"));

  const del = document.createElement("button");
  del.textContent = "Видалити";
  del.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateEmpty();
  });

  li.append(span, del);
  list.appendChild(li);
  input.value = "";
  updateEmpty();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
updateEmpty();
