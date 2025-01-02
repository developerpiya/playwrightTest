import {test, expect} from "@playwright/test";

test('Page ScreenShots', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path:'tests-examples/'+Date.now()+'homePage.png'})
})

test('Full Page ScreenShots', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path:'tests-examples/'+Date.now()+'homePage.png',fullPage:true})
})

test('Element ScreenShots', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.locator('//*[@id="tbodyid"]/div[1]').screenshot({path:'tests-examples/'+Date.now()+'homePage.png'})
})