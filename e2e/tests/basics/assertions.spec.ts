import { test, expect } from '@playwright/test';

test.skip('Test - to have text', async ({page}) => {
  await page.goto('/login');

  await expect(page.locator('h4')).toHaveText('Welcome');

  // await expect(page.locator('text=Welcome')).toHaveText('Welcome');
  // await expect(page.getByText('Welcome')).toHaveText('Welcome');
});

test.skip('Test - not to have text', async ({page}) => {
  await page.goto('/login');

  await expect(page.locator('h4')).not.toHaveText('Hello', {
    timeout: 1000
  });
});

test.skip('Test - soft expect', async ({page}) => {
  await page.goto('/login');

  await expect.soft(page.getByText('Welcome')).toHaveText('Hello');
  await expect(page.locator('h4')).toHaveText('Welcome');
});

test('Test - custom message', async ({page}) => {
  await page.goto('/login');

  await expect(page.locator('h4'), "Header text should be `Welcome`").toHaveText('Welcome');
})
