import { expect, test } from "@playwright/test"
import { CoffeeAddMenuPage } from '../resources/page/CoffeeAddMenuPage'
import { CoffeeAddCartPage } from '../resources/page/CoffeeAddCartPage'
import * as locator from "../resources/locator/indexCoffeeMenuPage"
import * as locator_cart from "../resources/locator/indexCoffeeCartPage"
import * as testdata from "../resources/demo/testdata/indexDataMenuPage"

test('TS_Display_001 Verify playment when add product less than 3 items', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'yes', [locator.btn_espresso, locator.btn_cappuccino]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

test('TS_Display_002 Verify when add product 3 items and click button "Yes, of course"', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'yes'?.toLocaleLowerCase(), [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

test("TS_Display_003 Verify when add product 3 items and click button 'Nah, I'll skip'", async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'no'?.toLocaleLowerCase(), [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

test('TS_Display_004 Verify when add product 3 items and no button is clicked for special offers.', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, ''?.toLocaleLowerCase(), [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

test('TS_Display_005 Verify when add more than 3 items and click button "Yes, of course"', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'yes'?.toLocaleLowerCase(), [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha, locator.btn_americano]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

test("TS_Display_006 Verify when add product 3 items and click button 'Nah, I'll skip'", async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'no'?.toLocaleLowerCase(), [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha, locator.btn_americano]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

test('TS_Display_007 Verify when add more than 3 items and no button is clicked for special offers.', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, ''?.toLocaleLowerCase(), [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha, locator.btn_americano]);
    await CoffeeAddMenuPage.placeOnButtonTotal(page, locator.btn_total)
    await CoffeeAddMenuPage.verifyProductinProductDetailWindow(page, clickaddProduct)
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email)
});

// test('TS_Display_008 Verify when not adding products', async ({ page }) => {
//     await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
//     await expect(page.locator(locator.btn_total)).toBeDisabled();
// });

test('TS_Cart_001 Verify playment when add product less than 3 items', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, '', [locator.btn_espresso, locator.btn_cappuccino]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});

test('TS_Cart_002 Verify when add product 3 items and click button "Yes, of course!"', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'yes', [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});

test("TS_Cart_003 Verify when add product 3 items and click button 'Nah, I'll skip.'", async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'no', [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});

test("TS_Cart_004 Verify when add product 3 items and no button is clicked for special offers.", async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, '', [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});

test('TS_Cart_005 Verify when add more than 3 items and click button "Yes, of course!"', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'yes', [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha, locator.btn_americano]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});

test("TS_Cart_006 Verify when add more than 3 items and click button 'Nah, I'll skip.'", async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, 'no', [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha, locator.btn_americano]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});

test('TS_Cart_007 Verify when add more than 3 items and no button is clicked for special offers.', async ({ page }) => {
    await CoffeeAddMenuPage.openBrowserCoffeeCart(page);
    const clickaddProduct = await CoffeeAddMenuPage.clickAddProduct(page, '', [locator.btn_espresso, locator.btn_cappuccino, locator.btn_mocha, locator.btn_americano]);
    await page.locator(locator_cart.tab_cart).click();
    await CoffeeAddCartPage.verifyProductinTabCart(page, clickaddProduct);
    await CoffeeAddMenuPage.enterDataAndPayment(page, testdata.txt_name, testdata.txt_email);
});