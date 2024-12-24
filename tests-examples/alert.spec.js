import { expect, test } from "@playwright/test";

test.skip('Alert with Ok', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator("//button[normalize-space()='Simple Alert']").click();
})

test.skip('Confirmation Dialog Alert with Ok and Cancel', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })
    await page.locator("#confirmBtn").click();

    await page.waitForTimeout(10000);
})

test('Prompt with Ok and Cancel for test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept();
    })
    await page.locator("#promptBtn").click();

    await page.waitForTimeout(10000);
})