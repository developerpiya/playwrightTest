import { test, expect } from '@playwright/test';

test('Interact with an anchor inside an iframe', async ({ page }) => {
    
    await page.goto('https://quickfindanything.com/bachelor-of-science-in-health-services-administration-online?channel=test&network=test');

    const iframeElement = page.frameLocator('//iframe[@id="master-1"]'); 
    await iframeElement.locator('div#e4').click(); 

    const innerIframe = page.frameLocator('//iframe[@id="#slave-1-1"]');
    await innerIframe.locator('a.i_').click();
    
    await page.waitForTimeout(5000); 

});
