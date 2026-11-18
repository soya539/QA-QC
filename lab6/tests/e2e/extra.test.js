const { test, expect } = require('@playwright/test');

test('Extra 1: перехід з головної на сторінку про проєкт', async ({ page }) => {
  await page.goto('/');
  await page.locator('#aboutLink').click();
  await expect(page).toHaveURL(/\/about\.html$/);
  await expect(page.getByRole('heading', { name: 'Про проєкт' })).toBeVisible();
});

test('Extra 2: повернення на головну сторінку', async ({ page }) => {
  await page.goto('/about.html');
  await page.locator('#homeLink').click();
  await expect(page).toHaveURL('http://127.0.0.1:3000/');
  await expect(page.locator('#loginForm')).toBeVisible();
});

test('Extra 3: повідомлення про успіх спочатку приховане', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#successMessage')).toBeHidden();
  await page.locator('#username').fill('user');
  await page.locator('#password').fill('test-password');
  await page.locator('#loginButton').click();
  await expect(page.locator('#successMessage')).toBeVisible();
});

test('Extra 4: поле пароля приховує введення', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#password')).toHaveAttribute('type', 'password');
});
