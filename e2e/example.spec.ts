import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').fill('admin');

  await page.getByRole('button', { name: 'LOGIN' }).click();
  
  await expect(page.locator('div').filter({ hasText: /^Error/ }).nth(3)).toHaveText('Invalid data');
});
