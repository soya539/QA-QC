const { test, expect } = require('@playwright/test');

test.describe('Production: playwright.dev', () => {
  test.setTimeout(60_000);

  test('External 1: заголовок сайту', async ({ page }) => {
    await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('External 2: наявність навігаційного меню', async ({ page }) => {
    await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('nav').first()).toBeAttached();
  });

  test('External 3: посилання Get started веде до документації', async ({ page }) => {
    await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('link', { name: /get started/i }).first().click();
    await expect(page).toHaveURL(/playwright\.dev\/docs\/intro/);
  });
});
