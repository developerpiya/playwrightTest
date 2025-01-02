import {test, expect} from "@playwright/test";

//only
// test.only("Test 1", async({page})=>{
//     console.log("It is test 1")
// })

//skip
test.skip("Test 2", async({page})=>{
    console.log("It is Test 2")
})

//skip
test("Test 3", async({page,browserName})=>{
    console.log("It is Test 3");
    if(browserName === 'chromium'){
        test.skip();
    }
})

//Fixme
test("Test 4", async({page})=>{
    test.fixme(); //This skip the test untill issue is not fixed
    console.log("It is test 4")
})

//Fail
// test("Test 5", async({page, browserName})=>{
//     if(browserName === 'firefox'){
//         test.fail(); //I am expect it is fail
//     }
//     console.log("It is test 5....");
//     // expect(1).toBe(1); //This will pass so both are mismatched so it is fail
//     expect(1).toBe(2);// 1 is not matched with 2 so it is fail both case fail so it is matched then pass test
// })

//slow
test("Test 6", async({page})=>{
    test.slow(); //This increase the time 3 times
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("It is Test 6...");
})
