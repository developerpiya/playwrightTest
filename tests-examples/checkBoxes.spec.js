import { expect, test } from "@playwright/test";

test("Learn CheckBoxes", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("//input[@id='monday' and @type='checkbox']").check();
    await page.check("//input[@id='monday' and @type='checkbox']");

    const mondayCheckBox = page.locator("//input[@id='monday' and @type='checkbox']")

    await expect(mondayCheckBox).toBeChecked();

    expect(await mondayCheckBox.isChecked()).toBeTruthy();

    const sundayCheckBox = page.locator("//input[@id='sunday' and @type='checkbox']")
    expect(await sundayCheckBox.isChecked()).toBeFalsy();

    const checkBoxLocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='tuesday' and @type='checkbox']",
        "//input[@id='wednesday' and @type='checkbox']",
        "//input[@id='thursday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']",
    ]

    for (const locator of checkBoxLocators) {
        await page.locator(locator).check();
    }

    for (const locator of checkBoxLocators) {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(10000);
})