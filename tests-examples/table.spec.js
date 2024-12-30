import { test, expect } from "@playwright/test";

test("Table Learn", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    const columns = await table.locator('thead >tr>th');
    console.log('Number of counts: ', await columns.count());

    const rows = await table.locator('tbody >tr');
    console.log('Number of rows: ', await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    // const matchedRow = await rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })
    // matchedRow.locator('input').check();

    // await selectProduct(rows, page, 'Smartwatch');
    // await selectProduct(rows, page, 'Laptop');
    // await selectProduct(rows, page, 'Tablet');

    const pages = await page.locator('#pagination>li>a');
    console.log('Number of pages: ', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = await rows.nth(i);
            const ids = row.locator('td');
            for (let j = 0; j < await ids.count() - 1; j++) {
                console.log(await ids.nth(j).textContent());
            }
        }

        await page.waitForTimeout(3000);
    }

    await page.waitForTimeout(5000);
})

async function selectProduct(rows, page, name) {
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}