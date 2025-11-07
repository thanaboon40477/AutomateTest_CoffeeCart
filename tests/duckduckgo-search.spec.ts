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
  await page.waitForSelector(locator.link_result);
  const links = page.locator(locator.link_result);  
  const count = await links.count(); 
  console.log(count);
  for (let i = 0; i < count; i++) {
    const element = await links.nth(i);
    const titles = await element.textContent();
    await ResultPage.verifySearchResult(element, testdata.txt_verify_google);
    await ResultPage.clickButton(element);
    // await ResultPage.verifyResultTheContentKeywordRelated(page, titles);
    await page.goBack();
  }

  // const link_results = await links.all();
  // let number = 0;
  // for (const link_result of link_results) {  
  //   // const txt_link = await link_result.textContent();
  //   console.log(link_result);
  //   await ResultPage.verifySearchResult(link_result, testdata.txt_verify_google);
  //   await ResultPage.clickButton(page, number);
  //   //   // await ResultPage.verifyResultTheContentKeywordRelated(page, titles);
  //   await page.goBack();
  //   number++;
  // }
});

test('Page1_002 Verify if enter words with English language only', async ({ page }) => {
  await SearchPage.openBrowserDuckDuckGo(page);
  await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_google2);
  await SearchPage.clickIconMagnifyingGlass(page);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector(locator.link_result);
  const links = page.locator(locator.link_result);  
  const count = await links.count(); 
  console.log(count);
  for (let i = 0; i < count; i++) {
    const element = await links.nth(i);
    const titles = await element.textContent();
    await ResultPage.verifySearchResult(element, testdata.txt_verify_google);
    await ResultPage.clickButton(element);
    // await ResultPage.verifyResultTheContentKeywordRelated(page, titles);
    await page.goBack();
  }
});

test('Page1_003 Verify if enter words with English language Mixed with Thai language', async ({ page }) => {
  await SearchPage.openBrowserDuckDuckGo(page);
  await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_google3);
  await SearchPage.clickIconMagnifyingGlass(page);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector(locator.link_result);
  const links = page.locator(locator.link_result);  
  const count = await links.count(); 
  console.log(count);
  for (let i = 0; i < count; i++) {
    const element = await links.nth(i);
    const titles = await element.textContent();
    await ResultPage.verifySearchResult(element, testdata.txt_verify_google);
    await ResultPage.clickButton(element);
    // await ResultPage.verifyResultTheContentKeywordRelated(page, titles);
    await page.goBack();
  }
});

// test('Page1_004 Verify if enter words with number only', async ({ page }) => {
//   await SearchPage.openBrowserDuckDuckGo(page);
//   await SearchPage.enterWordsInFieldSearch(page, testdata.txt_input_number);
//   await SearchPage.clickIconMagnifyingGlass(page);
//   await page.waitForLoadState('domcontentloaded');
//   await page.waitForSelector(locator.link_result);
//   const links = page.locator(locator.link_result);  
//   const count = await links.count(); 
//   console.log(count);
//   for (let i = 0; i < count; i++) {
//     const element = await links.nth(i);
//     const titles = await element.textContent();
//     await ResultPage.verifySearchResult(element, testdata.txt_verify_number);
//     await ResultPage.clickButton(element);
//     // await ResultPage.verifyResultTheContentKeywordRelated(page, titles);
//     await page.goBack();
//   }
// });

