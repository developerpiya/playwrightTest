import { test, expect } from "@playwright/test";

test("How to handle hidden items in dropdown", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    // await page.getByRole("link", { name: "Admin" }).click();
    // await page.locator('ul > li > a').first().click();
    // await page.locator('ul > li > a').nth(2).click();
    await page.locator('(//ul/li/a)[2]').click();

    const dropdown =  page.locator("//div[@role='listbox']");
    await dropdown.click();
    const options = await page.$$("//div[@role='listbox']//span");
    console.log('Length of the options is :', options.length);

    for (let option of options) {
        const jobTitle = await option.textContent();
        console.log('JobTitle is :', jobTitle);
    }
    await page.waitForTimeout(10000);
})

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.locator('form i').nth(2).click();
//   await page.getByRole('option', { name: 'ahh' }).click();
//   await page.locator('form i').nth(2).click();
//   await page.getByText('Database Administrator').click();
// });