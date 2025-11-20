import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('surfaces hero, projects, and islands', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Marek');
    await expect(page.getByRole('link', { name: 'Book a pairing session' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /React-heavy surfaces/ })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /Where React met AI curiosity/ })).toBeVisible();
  });
});
