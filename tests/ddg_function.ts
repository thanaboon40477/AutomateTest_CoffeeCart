import { Page, expect } from '@playwright/test';


export async function Search_field(page, word, xpath) {
    await page.goto('https://duckduckgo.com/');
    await page.locator('//input[@id="searchbox_input"]').fill(word);
    await page.locator('//button[@aria-label="Search"]').click();
    await expect(page.locator('//article[@id="r1-0"]/div[3]/h2/a/span')).toContainText(xpath);
    await page.locator('//article[@id="r1-0"]/div[3]/h2/a/span').click();
}