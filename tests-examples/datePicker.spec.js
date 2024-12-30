import { expect, test } from "allure-playwright";

test("Date Picker", async ({ page }) => {
    // Navigate to the target website
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Define the target year, month, and date
    const year = "2024"; // Target year as a string
    const month = "November"; // Target month as a string
    const date = "24"; // Target date as a string

    // Open the date picker
    await page.locator("#datepicker").click();

    // Loop to navigate to the desired month and year
    while (true) {
        // Get the current year and month displayed in the date picker
        const currentYear = (await page.locator(".ui-datepicker-year").textContent()).trim();
        const currentMonth = (await page.locator(".ui-datepicker-month").textContent()).trim();

        console.log("Target Year:", year, "Target Month:", month);
        console.log("Current Year:", currentYear, "Current Month:", currentMonth);

        // Navigate to the correct year and month
        if (currentYear < year || (currentYear === year && currentMonth < month)) {
            console.log("Navigating to Next");
            await page.locator('//a[@title="Next"]').click();
        } else if (currentYear > year || (currentYear === year && currentMonth > month)) {
            console.log("Navigating to Previous");
            await page.locator('//a[@title="Prev"]').click();
        } else if (currentYear === year && currentMonth === month) {
            console.log("Year and Month Matched");
            break; // Exit the loop when the desired year and month are reached
        }
        await page.waitForTimeout(300); // Add a small delay for UI update
    }

    // Select the desired date
    const dateElements = await page.locator('//a[@class="ui-state-default"]');
    const dateCount = await dateElements.count(); // Get the total number of dates available
    console.log("Number of available dates:", dateCount);

    // Iterate through the dates and click the desired one
    for (let i = 0; i < dateCount; i++) {
        const dateElement = dateElements.nth(i);
        const dateText = await dateElement.textContent();
        if (dateText.trim() === date) {
            console.log("Selecting Date:", dateText);
            await dateElement.click(); // Click the desired date
            break; // Exit the loop after selecting the date
        }
    }

    // Optional: Verify the selected date
    const selectedDate = await page.locator("#datepicker").inputValue();
    console.log("Selected Date:", selectedDate);
    expect(selectedDate).toContain(`${month} ${date}, ${year}`); // Expected format: "November 24, 2024"
});
