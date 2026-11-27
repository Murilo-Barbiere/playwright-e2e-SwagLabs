import { test, expect } from '@playwright/test';

test.describe("teste", () => {
  test("teste menor", async ({ page }) => {
    await page.goto("/");
  })
})