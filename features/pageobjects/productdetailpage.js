const { $, expect } = require('@wdio/globals')
const Page = require('./page');
var assert = require('assert');
const productName = "Sauce Labs Backpack"

element = {
    backtoProduct: $('#back-to-products')
}

class ProductDetailPage extends Page {
   // get backtoProduct () { return $('#back-to-products'); }

    async validateProductDetailPage() {
        await expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
        await expect(element.backtoProduct).toBeDisplayed()
    }

    async clickCart(){
        await $('#back-to-products').waitForClickable({ timeout: 3000 })
        const product = await $('.inventory_details_name').getText()
        assert.strictEqual(product, productName, "product name mismatch!")
        await $('button=Add to cart').click()
        await $('a.shopping_cart_link').click()
    }

    async clickCheckout(){
        await browser.pause(1000)
        const title = await $('.title').getText()
        assert.strictEqual(title, "Your Cart")
        const product = await $('.inventory_item_name').getText()
        assert.strictEqual(product, productName)
        await $('#checkout').click()
    }

    async fillInfo(){
        await browser.pause(1000)
        const title = await $('.title').getText()
        assert.strictEqual(title, "Checkout: Your Information")
        await $('#first-name').setValue('Umi')
        await $('#last-name').setValue('Dewi')
        await $('#postal-code').setValue('29876')
        await $('#continue').click()
    }

    async checkoutOverview(){
        await browser.pause(1000)
        const title = await $('.title').getText()
        assert.strictEqual(title, "Checkout: Overview")
        const product = await $('.inventory_item_name').getText()
        assert.strictEqual(product, productName)
        await $('#finish').click()
    }

    async thankyouPage(){
        await browser.pause(1000)
        const title = await $('.title').getText()
        assert.strictEqual(title, "Checkout: Complete!")
        const message = await $('h2.complete-header').getText()
        assert.strictEqual(message, "Thank you for your order!")
    }
    open () {
        return super.open('/inventory-item.html?id=4');
    }
}

module.exports = new ProductDetailPage();