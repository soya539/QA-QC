# Лабораторна робота №5 — модульні та інтеграційні тести

Студент: **Гладковський Іван, АІ-243, варіант 7**.  
Дисципліна: «Забезпечення якості та контроль якості і тестування ПП».

## Об'єкт тестування

Власний вебзастосунок «Простий список справ» з лабораторної роботи №1:  
https://github.com/soya539/QA-QC (гілка `lab1`, каталог `lab1/`).

У `app/index.html`, `app/style.css` збережено вміст оригіналу. У `app/script.js` збережено поведінку оригіналу й **додано лише CommonJS-експорт двох функцій** `addTask` та `updateEmpty`, щоб тестувати їх окремо в Jest без зміни інтерфейсу. Це копія для лабораторної №5; у гілці `lab1` змінювати код не треба.

## Що входить

- `src/`: чотири приклади з методички (math, auth, currency, api).
- `tests/examples/`: 4 test suites, 6 тестів.
- `tests/todo/unit/`: **3 модульні тести** для коду To-Do застосунку.
- `tests/todo/integration/`: **2 інтеграційні тести** на взаємодію DOM, подій і функцій застосунку.
- `tests/helpers/`: ізольована DOM-розмітка для запуску тестів у `jest-environment-jsdom`.
- Загалом заплановано **8 test suites / 11 tests**. Результат `Passed` треба підтвердити запуском на своєму ПК.

## Швидкий запуск (Windows PowerShell або Git Bash)

1. Встановіть Node.js LTS, якщо його немає: https://nodejs.org/.
2. Розпакуйте цей архів та відкрийте папку `lab5-unit-integration-tests` у VS Code.
3. У терміналі введіть:

```shell
node -v
npm -v
npm install
npm run test:examples
npm test
```

Очікувані підсумки за умови успішного проходження:

- `npm run test:examples` → `Test Suites: 4 passed`, `Tests: 6 passed`;
- `npm test` → `Test Suites: 8 passed`, `Tests: 11 passed`.

Можна також запустити тільки власні тести: `npm run test:todo` → 4 suites / 5 tests.

**Важливо:** в цьому архіві немає `node_modules` або `package-lock.json`; залежності завантажуються командою `npm install`, після чого lock-файл буде створений автоматично. У середовищі підготовки архіву встановлення npm-пакетів через інтернет було недоступним, тому дані `Passed` до запуску на вашому ПК є очікуваними, а не засвідченими результатами.

## Testomat.io

Реєстрація / проєкт: https://app.testomat.io/projects/new. Створіть проєкт типу Classical, назва `QA-QC Lab5 ToDo`. Відкрийте **Import Tests from Source Code**, оберіть Jest + JavaScript + вашу ОС, **скопіюйте команду з сайту**, виконайте її в каталозі проєкту. У вебінтерфейсі Testomat.io назви опцій можуть змінюватися.

Для звіту про автоматичний запуск:

```shell
npm i --save-dev @testomatio/reporter
```

**Git Bash** (ключ не зберігається у файлах):

```bash
TESTOMATIO='ВАШ_КЛЮЧ' npm test
```

**Windows PowerShell**:

```powershell
$env:TESTOMATIO = 'ВАШ_КЛЮЧ'
npm test
Remove-Item Env:TESTOMATIO
```

Ключ з Testomat.io приватний. **Не надсилайте його нікому, не вставляйте в протокол і не комітьте до GitHub.**

Якщо репортер змінить шлях до адаптера в новій версії, візьміть чинний приклад `jest.config.js` безпосередньо з налаштувань Testomat.io замість шляху, наведеного в методичці.

## Публікація на GitHub

Скопіюйте **вміст папки** `lab5-unit-integration-tests` у каталог `lab5/` **у локальній копії** репозиторію QA-QC (тобто щоб існували шляхи `QA-QC/lab5/package.json`, `QA-QC/lab5/app/script.js`, `QA-QC/lab5/tests/`). Звичайний `git init` всередині вкладеної папки робити не потрібно — Git уже ініціалізований у репозиторії. Якщо потрібна окрема гілка `lab5`, у корені QA-QC:

```bash
git switch -c lab5
git add lab5
git commit -m "Add Jest unit and integration tests for lab5"
git push -u origin lab5
```

Якщо гілка `lab5` вже існує — переключіться на неї командою `git switch lab5` замість створення нової. Якщо поки немає доступу на запис, можна завантажити архів через GitHub вебінтерфейс після входу в аккаунт.

**Скриншоти та заповнення протоколу:** дивіться файл `ІНСТРУКЦІЯ_СКРІНШОТИ.md` у корені архіву. Протокол лежить у сусідньому файлі DOCX/PDF в архіві.
