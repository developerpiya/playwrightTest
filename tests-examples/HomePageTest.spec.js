const {test, expect} = require('@playwright/test');

test('Home Page',async({page}) => {
    await page.goto('https://demoblaze.com/index.html');

    const pageTitle = await page.title();
    console.log('page title: ' + pageTitle); //provide the page title

    const pageUrl =  page.url();
    console.log('page url: ' + pageUrl); // provide the page url

    await expect(page).toHaveTitle('STORE'); // check the page title using expect
    await expect(page).toHaveURL('https://demoblaze.com/index.html'); // match the page url using expect

    await page.close();
})