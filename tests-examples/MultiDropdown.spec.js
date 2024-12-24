import {test, expect} from "@playwright/test";

test("Multi Dropdown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['blue','green','red','green','yellow']);

    //Assertions
    //check number of options in dropdown 
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(7);

    //check number of options in dropdown using js array
    const option1 = await page.$$('#colors option');
    console.log('Number of options Count', option1.length);
    await expect(option1.length).toBe(7);

    //check presence of the value in the dropdown
    const content = await page.locator('#colors').textContent();
    // await expect(content.includes('Green')).toBeTruthy();
    // await expect(content.includes('Black')).toBeTruthy(); // it throughs error bcs black is not in the dropdown
    await expect(content.includes('Black')).toBeFalsy(); 

    await page.waitForTimeout(5000);
})