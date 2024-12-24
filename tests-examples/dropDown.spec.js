import {test,expect} from "@playwright/test";

test("DropDown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#country').selectOption({label:'India'}); //select by label
    // await page.locator('#country').selectOption('India'); // visible Text
    // await page.locator('#country').selectOption({value:'uk'}) // select by value
    // await page.locator('#country').selectOption({index:2})//select by index
    // await page.selectOption('#country','Australia');

    //Assertions - check number of optionsin dropdown approch1
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    //check number of options in dropdown approch2
    // const options = await page.$$('#country option');
    // console.log('Number of options Count', options.length);
    // await expect(options.length).toBe(10);

    //check presense of value in the dropdown - Appraoch1
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy(); //if get false then through error

    //check presense of value in the dropdown - Appraoch2 - Using Looping
    // const options = await page.$$('#country option');
    // let status = false;
    // for(const option of options){
    //     // console.log(await option.textContent());
    //     let value = await option.textContent()
    //     if(value.includes('France')){
    //         status = true;
    //         break;
    //     }
    // }
    // expect(status).toBeTruthy();

     //check presense of value in the dropdown - Appraoch2 - Using Looping
     const options = await page.$$('#country option');
     for(const option of options){
         // console.log(await option.textContent());
         let value = await option.textContent()
         if(value.includes('France')){
             await page.selectOption('#country',value);
             break;
         }
     }
 

    await page.waitForTimeout(5000);
})