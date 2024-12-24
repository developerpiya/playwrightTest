import {test, expect} from "@playwright/test";

test("Auto suggest Dropdown", async({page})=>{
    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]');

    const fromCityOptions = await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]');

    for(let options of fromCityOptions){
        const value = await options.textContent();
        console.log('Value is :',value);

        if(await value.includes('Azadpur')){
            await options.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})