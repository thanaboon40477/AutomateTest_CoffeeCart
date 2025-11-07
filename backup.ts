import { test, expect } from '@playwright/test';
import { SearchPage } from '../resources/page/SearchPage';
import { ResultPage } from '../resources/page/ResultPage';
import * as testdata from '../resources/demo/testdata/index';
import * as locator from '../resources/locator/index';

test('Page1_001 Verify if enter words with thai language only', async ({ page }) => {
  await SearchPage.openBrowserDuckDuckGo(page);
  await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_google1);
  await SearchPage.clickIconMagnifyingGlass(page);
  await page.waitForLoadState('domcontentloaded');
  // const link_results = await page.$$('//article[contains(@id,"r1")]/div[3]/h2/a/span')
  await page.waitForSelector('//article[contains(@id,"r1")]/div[3]/h2/a/span');
  const links = page.locator('//article[contains(@id,"r1")]/div[3]/h2/a/span');  
  const link_results = await links.all(); 
  // console.log(link_results);
  for (const link_result of link_results) {  
    // const txt_link = await link_result.textContent();
    console.log(link_result);
    await ResultPage.verifySearchResult(link_result, testdata.txt_verify_google);
    // await ResultPage.clickButton(page, number);
    // await expect(link_result).toContainText(testdata.txt_verify_google);
    // const txt_link = await ResultPage.getTextTitle(link_result);
    // await ResultPage.verifySearchResult(link_result, testdata.txt_verify_google);
    // await ResultPage.clickButton(page);
    // await ResultPage.verifyResultTheContentKeywordRelated(page, txt_link);
  }
});

// test('Page1_002 Verify if enter words with English language only', async ({ page }) => {
//   await SearchPage.openBrowserDuckDuckGo(page);
//   await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_google2);
//   await SearchPage.clickIconMagnifyingGlass(page);
//   // await expect(page).toHaveTitle(/(Google|google|กูเกิล)/i);
//   // const txt = (await page.locator('//article[@id="r1-1"]/div[3]/h2/a/span').textContent())!
//   // console.log(txt)
//   const txt_link = await ResultPage.getTextTitle(page);
//   await ResultPage.verifySearchResult(page, testdata.txt_verify_google)
//   await ResultPage.clickButton(page)
//   await ResultPage.verifyResultTheContentKeywordRelated(page, txt_link);
//   // await expect(page).toHaveURL(/(Google|google|กูเกิล)/)
// });

// test('Page1_003 Verify if enter words with English language Mixed with Thai language', async ({ page }) => {
//   await SearchPage.openBrowserDuckDuckGo(page);
//   await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_google3);
//   await SearchPage.clickIconMagnifyingGlass(page);

//   const txt_link = await ResultPage.getTextTitle(page);
//   await ResultPage.verifySearchResult(page, testdata.txt_verify_google)
//   await ResultPage.clickButton(page)
//   await ResultPage.verifyResultTheContentKeywordRelated(page, txt_link);
//   // await expect(page).toHaveURL(/(Google|google|กูเกิล)/)
// });

// test('Page1_004 Verify if enter words with number only', async ({ page }) => {
//   await SearchPage.openBrowserDuckDuckGo(page);
//   await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_number);
//   await SearchPage.clickIconMagnifyingGlass(page);

//   const txt_link = await ResultPage.getTextTitle(page);
//   await ResultPage.verifySearchResult(page, testdata.txt_verify_number)
//   await ResultPage.clickButton(page)
//   await ResultPage.verifyResultTheContentKeywordRelated(page, txt_link);
//   // await expect(page).toHaveURL(/(Google|google|กูเกิล)/)
// });

