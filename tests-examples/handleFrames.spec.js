import { test, expect } from "@playwright/test";

test("Handle Frames", async ({ page }) => {
    // Navigate to the target URL
    await page.goto("https://ui.vision/demo/webtest/frames/");
    
    // Get all frames in the page
    const frames = page.frames();
    console.log("Number of frames:", frames.length);

    const frame1 = await page.frames({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.fill("[name='mytext1']","Hello World");

    await page.waitForTimeout(5000);
});
