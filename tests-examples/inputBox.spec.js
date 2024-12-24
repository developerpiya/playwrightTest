import { test, expect } from "@playwright/test";

test("Inout Box and learn Radio btn", async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form');
    
    await expect(await page.locator('#firstName')).toBeVisible();
    await expect(await page.locator('#firstName')).toBeEmpty();
    await expect(await page.locator('#firstName')).toBeEnabled();
    await expect(await page.locator('#firstName')).toBeEditable();

    await page.fill('#firstName','John');
    await page.waitForTimeout(5000);
})