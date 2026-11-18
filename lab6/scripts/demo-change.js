// Безпечно створює показові дефекти та відновлює сторінки.
// ВАЖЛИВО: під час demo:break-* збережені копії лежать лише в .lab6-backup/.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const backupDir = path.join(root, '.lab6-backup');
const names = ['index.html', 'about.html'];
const mode = process.argv[2];

function original(name) { return path.join(root, 'public', name); }
function backup(name) { return path.join(backupDir, name); }
function replaceExactly(text, from, to, name) {
  if (!text.includes(from)) throw new Error(`Не знайдено фрагмент у ${name}: ${from}`);
  return text.replace(from, to);
}
if (mode === 'restore') {
  if (!fs.existsSync(backupDir)) {
    console.log('Резервних копій немає: сторінки вже у початковому стані.');
    process.exit(0);
  }
  for (const name of names) fs.copyFileSync(backup(name), original(name));
  fs.rmSync(backupDir, { recursive: true, force: true });
  console.log('Відновлено public/index.html та public/about.html.');
  process.exit(0);
}
if (!['e2e', 'visual'].includes(mode)) {
  console.error('Використання: npm run demo:break-e2e | demo:break-visual | demo:restore');
  process.exit(1);
}
if (fs.existsSync(backupDir)) {
  console.error('Спочатку виконайте npm run demo:restore, потім повторіть.');
  process.exit(1);
}
fs.mkdirSync(backupDir);
for (const name of names) fs.copyFileSync(original(name), backup(name));
let index = fs.readFileSync(original('index.html'), 'utf8');
let about = fs.readFileSync(original('about.html'), 'utf8');
if (mode === 'e2e') {
  index = replaceExactly(index, '<title>Локальна сторінка</title>', '<title>Інша сторінка</title>', 'index.html');
  index = replaceExactly(index, 'id="loginButton"', 'id="loginBtn"', 'index.html');
  index = replaceExactly(index, 'type="password"', 'type="text"', 'index.html');
} else {
  index = replaceExactly(index, '<h1>Вітаємо на локальній сторінці</h1>', '<h1>Вітаємо на локальній зміненій сторінці!</h1>', 'index.html');
  about = replaceExactly(about, 'style="font-size: 2rem"', 'style="font-size: 60px"', 'about.html');
}
fs.writeFileSync(original('index.html'), index);
fs.writeFileSync(original('about.html'), about);
console.log(`Демонстраційні зміни (${mode}) внесено. Після знімків виконайте npm run demo:restore.`);
