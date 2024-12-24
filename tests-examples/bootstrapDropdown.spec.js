import { test, expect } from "@playwright/test";

test("Bootstrap Multi Dropdown", async ({ page }) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    const options = await page.locator('ul>li label input');
    await expect(options).toHaveCount(11);

    const option1 = await page.$$('ul>li label input');
    console.log('Number of options Count', option1.length);
    await expect(option1.length).toBe(11);

    const option2 = await page.$$('ul>li label');
    for(const option of option2){
        const value = await option.textContent();
        console.log("Value is :",value);
        if(await value.includes('HTML') || value.includes('CSS') || value.includes('Angular')){
            await option.click();
        }
    }


    await page.waitForTimeout(5000);
})