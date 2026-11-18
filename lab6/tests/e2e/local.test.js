const { test, expect } = require('@playwright/test');

test('Local 1: успішне заповнення та відправлення форми', async ({ page }) => {
  await page.goto('/');
  await page.locator('#username').fill('test_user');
  await page.locator('#password').fill('password123');
  await page.locator('#loginButton').click();
  await expect(page.locator('#successMessage')).toBeVisible();
  await expect(page.locator('#successMessage')).toHaveText('Успішний вхід!');
});

test('Local 2: заголовок локальної сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Локальна сторінка');
});

test('Local 3: валідація обов’язкових полів', async ({ page }) => {
  await page.goto('/');
  await page.locator('#loginButton').click();
  await expect(page.locator('input:invalid')).toHaveCount(2);
  await expect(page.locator('#successMessage')).toBeHidden();
});
