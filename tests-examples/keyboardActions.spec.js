import { test, expect } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare");

    await page.fill("[name='text1']", "Welcome in playwright automation");
    // await page.type("[name='text1']", "Welcome in playwright automation");

    //here we copy the text one textarea to another textarea
    //If we use Mac then use (Meta+A)

    //Ctrl +A = select all
    await page.keyboard.press("Control+A");

    //Ctrl + C = copy the text      
    await page.keyboard.press("Control+C");

    //Tab = switch the tab
    await page.keyboard.press("Tab");

    //Ctrl+V = Paste the text
    await page.keyboard.press("Control+V");

    await page.waitForTimeout(6000);
})