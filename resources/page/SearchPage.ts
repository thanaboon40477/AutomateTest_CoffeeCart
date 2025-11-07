import { Page, expect } from '@playwright/test'
import * as locator from '../locator/index';

export const SearchPage = {
    // Open browser DuckDuckGo
    async openBrowserDuckDuckGo(page: Page) {
        await page.goto('https://duckduckgo.com/');
    },
 
    // Enter words in field Search
    async enterWordsInFieldSearch(page: Page, keyword: string) {
        await page.locator(locator.txt_searchbox_input).fill(keyword);
    },

    // Click icon magnifying glass
    async clickIconMagnifyingGlass(page: Page) {
        await page.locator(locator.btn_search).click();
    },
 
};
 