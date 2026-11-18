const { test, expect } = require('@playwright/test');

test('Screenshot 1: головна сторінка повністю', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('index-page.png', { fullPage: true });
});

test('Screenshot 2: заголовок головної сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveScreenshot('index-heading.png');
});

test('Screenshot 3: сторінка про проєкт повністю', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page).toHaveScreenshot('about-page.png', { fullPage: true });
});

test('Screenshot 4: заголовок сторінки про проєкт', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page.locator('h1')).toHaveScreenshot('about-heading.png');
});
