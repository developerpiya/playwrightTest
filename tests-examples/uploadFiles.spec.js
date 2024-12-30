import { test, expect } from "@playwright/test";

test("File Uploading", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.waitForSelector('#file-upload'); // here we wait untill the element is visible
    await page.locator('#file-upload').click();

    await page.locator('#file-upload').setInputFiles('tests-examples/uploadFiles/abc.pdf');
    await page.waitForTimeout(10000);
})

//when we use only then it will run only that test
test.only("Multiple upload files", async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator('#filesToUpload').setInputFiles([
        'tests-examples/uploadFiles/abc.pdf',
        'tests-examples/uploadFiles/abcd.pdf'
    ])
    await page.waitForTimeout(3000);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('abc.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('abcd.pdf');
    await page.waitForTimeout(10000);

    await page.locator('#filesToUpload').setInputFiles([]);
    expect(await page.locator('#fileList li')).toHaveText('No Files Selected');
    await page.waitForTimeout(10000);
})