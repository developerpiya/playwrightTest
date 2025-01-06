import { test, expect } from "@playwright/test";

test("Learn Retries", async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();

    //Login Pge
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.getByRole('button', { name: 'Log in' }).click();

    //Home Page
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();
})

//npx playwright test retries.spec.js --project chromium --headed --retries=2
// we cen set retries:3 in playwright.config.js file

//Retries and test flakiness
// (1) Passed - No Retry
// (2) Failed - Retry Failed
// (3) Failed - Retry Passed = Fleky Test

// # Give failing tests 3 retry attempts 
// npx playwright test --retries=3