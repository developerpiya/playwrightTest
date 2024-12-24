import {test, expect} from '@playwright/test';


test('Locators : ', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    //click on login btn using css
    // await page.locator('id=login2').click();
    // await page.locator('//a[@id="login2"]').click();
    await page.click('#login2');

    //fill the username field with many methods using css
    // await page.locator('//input[@id="loginusername"]').fill('admin');
    // await page.locator('#loginusername').fill('admin');
    // await page.locator('input#loginusername').fill('admin');
    await page.fill('#loginusername', 'pavanol');
    // await page.type('#loginusername', 'pavanol');

    //fill the password with many types using css
    // await page.locator('input[id="loginpassword"]').fill('admin123');
    // await page.locator('input#loginpassword').fill('admin123');
    await page.fill('#loginpassword', 'test@123');
    // await page.type('#loginpassword', 'test@123');

    //click on login btn using xpath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presense using xpath
    const logOutLink = await page.locator("//a[normalize-space()='Log out']");
    await expect(logOutLink).toBeVisible();

     // Wait for some time to observe the result (optional in real tests)
    await page.waitForTimeout(10000);

    await page.close();
})