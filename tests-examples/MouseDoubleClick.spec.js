import { test, expect } from "@playwright/test";

test("Mouse double click", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const copybtn = await page.locator("//button[normalize-space()='Copy Text']");
    await copybtn.dblclick();
    const f2 = await page.locator("#field2");
    await expect(f2).toHaveValue('Hello World!');
    await page.waitForTimeout(6000);
})