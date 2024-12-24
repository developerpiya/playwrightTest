import { test, expect } from "@playwright/test";

test("Radio and Checkbox Interaction", async ({ page }) => {
  // Navigate to the practice form
  await page.goto('https://demoqa.com/automation-practice-form');

  // Click on the Gender radio button
  const genderRadioButton = page.locator('#gender-radio-1');
  await genderRadioButton.click({ force: true }); // Use `force` if hidden by other elements
  await expect(genderRadioButton).toBeChecked(); // Verify it's selected

  // Check the Hobbies checkbox
  const hobbiesCheckbox = page.locator('#hobbies-checkbox-1');
  await hobbiesCheckbox.check({ force: true }); // Use `force` if hidden by other elements
  await expect(hobbiesCheckbox).toBeChecked(); // Verify it's checked

  await page.waitForTimeout(5000); // Optional delay to see actions on the page
});