import { test, expect } from '@playwright/test';

test('el usuario puede iniciar sesión correctamente', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/secure/);

  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
});
test('el usuario no puede iniciar sesión con contraseña incorrecta', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  await page.getByRole('textbox', { name: 'Password' }).fill('incorrecta123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your password is invalid!')).toBeVisible();

  await expect(page).not.toHaveURL(/secure/);
});
test('el usuario no puede iniciar sesión con nombre de usuario incorrecto', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('usuarioincorrecto');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
  await expect(page).not.toHaveURL(/secure/);
});
