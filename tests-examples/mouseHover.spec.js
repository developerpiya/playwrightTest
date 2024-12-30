import {expect, test} from "@playwright/test";

test("Mouse Hover", async({page})=>{
    await page.goto("https://demo.opencart.com/");

    const desktop = await page.locator('//a[normalize-space()="Desktops"]');
    const Laptops = await page.locator('//a[normalize-space()="Laptops & Notebooks"]');

    await desktop.hover();
    await Laptops.hover();
    await page.waitForTimeout(6000);
})