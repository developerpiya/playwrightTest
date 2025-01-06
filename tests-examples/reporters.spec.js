import { test, expect } from "@playwright/test";

test("Test 1", async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
})

test("Test 2", async ({ page }) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await expect(page).toHaveTitle('OpenCart - Demo');
})

test("Test 3", async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})

test("Test 4", async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
})

//npx playwright test reporters.spec.js --reporter=html
//npx playwright test reporters.spec.js --reporter=line
//npx playwright test reporters.spec.js --reporter=list
//npx playwright test reporters.spec.js --reporter=dot
//npx playwright test reporters.spec.js --reporter=json
//npx playwright test reporters.spec.js --reporter=junit

//['json', {  outputFile: 'test-results.json' }]
//['junit', {  outputFile: 'results.xml' }]