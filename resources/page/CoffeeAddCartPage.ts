import { Page } from '@playwright/test'
import * as locator from "../locator/indexCoffeeCartPage"

export const CoffeeAddCartPage = {

    // Verify Product in Tab Cart
    async verifyProductinTabCart(page: Page, lstProduct: string[]){
        const txt = await page.locator(locator.count_product_list);
        const count_txt = await txt.count();
        console.log('\nรายการสินค้าที่กดเพิ่ม :',lstProduct)
        for (let i=2; i < count_txt+2; i++) {
            const element = `//div[2]/div/ul/li[${i}][@class="list-item"]/div[1]`;
            const locator = page.locator(element);
            const menus = await locator.textContent();
            const menu = menus?.toLocaleLowerCase();
    
            if (lstProduct.includes(menu ?? '')) {
                console.log('สินค้า',menu,'ในตะกร้า อยู่ในรายการสินค้าที่กดเพิ่ม');
            } else {
                console.error('ไม่มีสินค้า',menu,'ในตะกร้า ไม่มีอยู่ในรายการสินค้าที่กดเพิ่ม');
            }
        }
    },
}