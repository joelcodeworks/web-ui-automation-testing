import { test, expect } from '@playwright/test';

test('la página principal muestra el título esperado', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
test('el enlace Get started está visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});
test('el enlace Get started lleva a la documentación', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/intro/);
});
