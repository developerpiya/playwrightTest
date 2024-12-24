const { test, expect } = require('@playwright/test');

test('Locating Multiple Elements', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

    const links = await page.$$('a');
    for (const link of links) {
        const textLink = await link.textContent();
        console.log(textLink);
    }

    //here single slash use for absolute path(DOM hierarchy) and // double slash use for relative path directly approach any tags
    const product = await page.$$('//div[@id=tbodyid]//h4/a'); 
    for (const prod of product) {
        const textProd = await prod.textContent();
        console.log(textProd);
    }
})