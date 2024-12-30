import { test, expect } from "@playwright/test";

test("Handle Frames", async ({ page }) => {
    // Navigate to the target URL
    await page.goto("https://ui.vision/demo/webtest/frames/");
    
    // Get all frames in the page
    const frames = page.frames();
    console.log("Number of frames:", frames.length);

    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.fill("[name='mytext1']","Hello World 1");

    const frame2  = await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']");
    await frame2.fill("Hello World 2");

    const frame3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });

    if(frame3){
        await frame3.fill("[name='mytext3']", "Hello World 3");

        const childFrames = frame3.childFrames();
        console.log("Number of child frames in Frame 3:", childFrames.length);
    }
    

    // childFrames.forEach((childFrame, index) => {
    //     console.log(`Child Frame ${index + 1} URL: ${childFrame.url()}`);
    // });

    // await childIframe[0].locator('//*[@id="i6"]/div[3]/div').check()
    // await childFrames.locator('//div[@id="i6"]').check();
    // await childFrames.locator('(//div[@class="SG0AAe"]/div/label)[1]').check();
    await childFrames.locator("//div[@class='nWQGrd zwllIb']//div[@id='i6']/div[3]/div").check();

    await page.waitForTimeout(5000);
});
