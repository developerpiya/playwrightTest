import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { cartPage } from "../pages/CartPage";
// const { test, expect } = require('@playwright/test');
// const { LoginPage } = require("../pages/LoginPage");

test("Learning page object model", async ({ page }) => {
    //Login Page Use
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("pavanol", "test@123");
    await page.waitForTimeout(3000);

    //Home Page use
    const home = new HomePage(page);
    // await home.gotoCart();
    await home.addProductToCart('Nokia lumia 1520');
    // await page.waitForTimeout(2000);
    await home.gotoCart();
    await page.waitForTimeout(3000);

    //Cart Page Use:
    const cart = new cartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart('Samsung galaxy s6');
    expect(status).toBe(true);
    await page.waitForTimeout(5000);
})