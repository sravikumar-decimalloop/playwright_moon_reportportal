import { test, expect } from '@playwright/test';

test('click Facebook login button', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const loginButton = page.locator('button[name="login"]');
  await expect(loginButton).toBeVisible();
  await loginButton.click();
});
