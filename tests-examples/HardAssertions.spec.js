import {expect,test} from "@playwright/test";

test("Hard Assertion learn", async({page})=>{
    //hard is called bcs directly assign with expect 

    await page.goto("https://demoblaze.com/index.html");

    //while one line is break then rest of the line is not working in hard assertion
    // await expect(page).toHaveTitle("STORE");
    // await expect(page).toHaveURL("https://demoblaze.com/index.html");
    // await expect(page.locator(".navbar-brand")).toBeVisible();

    //while one line is break then rest of the line is not working in soft assertion
    await expect.soft(page).toHaveTitle("STORE");
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
    await expect.soft(page.locator(".navbar-brand")).toBeVisible();

})

