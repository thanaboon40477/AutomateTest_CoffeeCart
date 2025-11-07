import { Locator, Page, expect } from '@playwright/test'
import * as locator from '../locator/index';

export const ResultPage = {
    // Verify Search result [1]
    async verifySearchResult(xpath: Locator, regex: RegExp) {
        await expect(xpath).toContainText(regex);
        // await expect(xpath.toContainText(regex));
    },

    async getTextTitle(page: Page) {
        return await page.title();
    },

    // Click icon magnifying glass
    async clickButton(element: Locator) {
    // async clickButton(page: Page, numbers: number) {
        await element.click();
        // await page.locator(`//article[@id="r1-${numbers}"]/div[3]/h2/a/span`).click();
    },

    // Verify the content of page is the keyword related [2]
    async verifyResultTheContentKeywordRelated(page: Page, titles: string|null) {
        await page.waitForLoadState('domcontentloaded');
        const currentTitle = await page.title();
        await expect(titles).toEqual(currentTitle);
    },
}