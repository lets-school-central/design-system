import { expect, test } from '@playwright/test';

test('index', async ({ page }) => {
	await page.goto('/');

	const button = await page.$('text=Click me');
	const label = await page.$('text=Hello world');

	expect(button).not.toBeNull();
	expect(label).not.toBeNull();

	expect(await label?.textContent()).toBe('Hello world');
	await button?.click();
	expect(await label?.textContent()).toBe('Clicked');
});
