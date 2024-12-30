import { test, expect } from "@playwright/test";

test("Drag and Drop", async ({ page }) => {
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    const rome = await page.locator('#box6');
    await rome.hover();
    await page.mouse.down();

    const italy = await page.locator('#box106');
    await italy.hover();
    await page.mouse.up();

    rome.dragTo(italy);

    const oslo = await page.locator('#box1');
    await oslo.hover();
    await page.mouse.down();
    
    const southKorea = await page.locator('#box105');
    await southKorea.hover();
    await page.mouse.up();
    
    oslo.dragTo(southKorea);

    await page.waitForTimeout(6000);
})