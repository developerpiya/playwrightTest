import {test, expect} from '@playwright/test';

test('Built in Locators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() - To locate an element, usually image, by its text alternatively
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - To locate an element by its placeholder text
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible();

    await page.waitForTimeout(5000);
})