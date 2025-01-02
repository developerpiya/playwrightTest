import { test, expect } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
// Initialize the page
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://demoblaze.com/");

    await page.click('#login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
})

test.afterAll(async () => {
    await page.click('#logout2');
    // await page.waitForTimeout(5000);
})

test("Hooks Learnings- Home Page Test", async () => {
    const products = await page.$$("//div[@class='card h-100']");
    expect(products).toHaveLength(9);
})

test("Product to Add to Cart Page", async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    await page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
})