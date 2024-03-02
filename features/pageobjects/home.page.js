const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    iconCart: $('.shopping_cart_link')
}

class HomePage extends Page {

    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(element.iconCart).toBeDisplayed()
    }

    //for select product
    async selectProduct(){
        const productName = "Sauce Labs Backpack"
        const productsElement = await $$('div.inventory_item_name')

        for (const ele of productsElement) {
            if (await ele.getText() === productName) {
                await ele.click()
                break
            }
        }
        await browser.pause(1000)
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
