import { expect, test } from '@playwright/test';

test.describe('testes for home', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://kevincamussi.github.io/todo_svelte/');
	});

	test('should render correctly', async ({ page }) => {
		await expect(page.locator('text=Add Task')).toBeVisible();
	});

	test('should create new task on click', async ({ page }) => {
		const button = page.locator('button[aria-label="Add Task"]');
		const task = page.locator('input[type="text"]').last();

		await expect(button).toBeVisible();
		await button.click();
		await expect(task).toBeVisible();
		await expect(task).toHaveValue('Teste');
	});
});
