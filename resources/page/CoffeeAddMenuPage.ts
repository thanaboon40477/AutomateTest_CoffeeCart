import { Page, expect } from '@playwright/test'
import * as locator from "../locator/indexCoffeeMenuPage"
import * as testdata from "../demo/testdata/indexDataMenuPage"

export const CoffeeAddMenuPage = {
    // Open browser Coffee Cart
    async openBrowserCoffeeCart(page: Page){
        await page.goto('https://seleniumbase.io/coffee/')
    },

    // Click add product
    async clickAddProduct(page: Page, btn: string, element: string[]) {
        const lst: string[] = []
        for (const menu of element) {
            await page.locator(menu).click();
            const txt = await page.locator(menu).getAttribute('aria-label');
            lst.push((txt ?? '').toLocaleLowerCase())

            const isMochaVisible = await page.locator(locator.ingredient_mocha).first().isVisible();
            if (isMochaVisible) {
                await CoffeeAddMenuPage.verifySpeciallOffer(page);
                if (btn == "yes") {
                    console.log('\nClick - Yes, of course!');
                    const txt = await page.locator(locator.btn_discount_mocha).getAttribute('aria-label');
                    lst.push((txt ?? '').toLocaleLowerCase())
                    await page.locator(locator.btn_yes_of_course).click();
                } else if (btn == "no") {
                    console.log("\nClick - Nah, I'll skip.'");
                    await page.locator(locator.btn_nah_i_skip).click();
                } else {
                    console.log('\nไม่มีปุ่ม/ไม่กดปุ่ม');
                }
            } 
        }
        return lst;
    },

    // Place on button "Total"
    async placeOnButtonTotal(page: Page, element: string) {
        const btn = page.locator(element)
        await btn.hover();
    },

    // Verify Special Offers
    async verifySpeciallOffer(page: Page) {
        const mocha = ['espresso','chocolate syrup','steamed milk','whipped cream']
        const offer_mocha = await page.locator(locator.ingredient_mocha);
        // waitForSelector รอจนกว่า element ปรากฏ
        await page.waitForSelector(locator.ingredient_mocha);
        const count = await offer_mocha.count();

        for (let i=1; i < count+1; i++) {
            const txt = await page.locator(`//div[@aria-label="(Discounted) Mocha"]/div[${i}]`);
            await txt.waitFor({ state: 'visible' });
            const ingredient = await txt.textContent();
            if (mocha.includes(ingredient ?? '')) {
                console.log(ingredient,'เป็นส่วนผสมของ Mocha');
            } else {
                console.error(ingredient,'ไม่เป็นส่วนผสมของ Mocha');
            }
        }
        
    },    

    // Verify Product in Product Detail Window
    async verifyProductinProductDetailWindow(page: Page, lstProduct: string[]){
        const txt = await page.locator(locator.product_list);
        const count_txt = await txt.count();
        console.log('\nรายการสินค้าที่กดเพิ่ม :',lstProduct)
        for (let i=0; i < count_txt; i++) {
            const element = await txt.nth(i);
            const menus = await element.textContent();
            const menu = menus?.slice(0,-6).toLocaleLowerCase();
    
            if (lstProduct.includes(menu ?? '')) {
                console.log('สินค้า',menu,'ในตะกร้า อยู่ในรายการสินค้าที่กดเพิ่ม');
            } else {
                console.error('ไม่มีสินค้า',menu,'ในตะกร้า ไม่มีอยู่ในรายการสินค้าที่กดเพิ่ม');
            }
        }
    },

    // Enter Data and Payment
    async enterDataAndPayment(page: Page, name: string, email: string) {
        await page.locator(locator.btn_total).click();
        await page.locator(locator.field_name).fill(name);
        await page.locator(locator.field_email).fill(email);
        await page.locator(locator.btn_submit).click();
        await expect(page.locator(locator.verify_success)).toHaveText(testdata.txt_verify_success);
        console.log('\nทำการชำระเรียบร้อย')
    },
    
}