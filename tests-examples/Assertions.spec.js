const {test,expect} = require('@playwright/test');

test('Assertions cases',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    // expect(page).toHaveURL = page has url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // expect(page).toHaveTitle = page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //expect(locator).toBeVisible() = Element is visible
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //expect(locator).toBeEnabled() = control is enabled
    //expect(locator).toBeDisabled() = Element is disabled
    const serchStoreBox = await page.locator('#small-searchterms');
    await expect(serchStoreBox).toBeEnabled();

    //expect(locator).toBeChecked() = Radio/Checkbox is checked
    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click(); //select Radio btn
    await expect(maleRadioButton).toBeChecked();

    const newsLetter = await page.locator('#Newsletter');
    await expect(newsLetter).toBeChecked();

    //expect(locator).toHaveAttribute() = Element has Attribute
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');

    //expect(locator).toHaveText() = Element has text
    const pageTitle = await page.locator('.page-title h1');
    await expect(pageTitle).toHaveText('Register'); // full match text

    //expect(locator).toContainText() = Element contains text
    await expect(pageTitle).toContainText('Reg'); //partial match text

    //expect(locator).toHaveValue() = Input has a value
    const emailInput = await page.locator('#Email');
    await emailInput.fill('piya@gmail.com');
    await expect(emailInput).toHaveValue('piya@gmail.com'); 

    //expect(locator).toHaveCount() = List of elements has given length
    const options = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);
})
