const { $, expect } = require('@wdio/globals')
const Page = require('./page');
var assert = require('assert');
const productName = "Sauce Labs Backpack"

element = {
    backtoProduct: $('#back-to-products'),
    buttonAddtoCart: $('button=Add to cart'),
    linkShoppingCart: $('a.shopping_cart_link'),
    title: $('.title'),
    invItemName: $('.inventory_item_name'),
    checkout: $('#checkout'),
    firstName: $('#first-name'),
    lastName: $('#last-name'),
    postalCode: $('#postal-code'),
    buttonContinue: $('#continue'),
    buttonFinish: $('#finish'),
    headerComplete: $('h2.complete-header')
}

class ProductDetailPage extends Page {
   // get backtoProduct () { return $('#back-to-products'); }

    async validateProductDetailPage() {
        await expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
        await expect(element.backtoProduct).toBeDisplayed()
    }

    async clickCart(){
        await element.backtoProduct.waitForClickable({ timeout: 3000 })
        const product = await $('.inventory_details_name').getText()
        assert.strictEqual(product, productName, "product name mismatch!")
        await element.buttonAddtoCart.click()
        await element.linkShoppingCart.click()
    }

    async clickCheckout(){
        await browser.pause(1000)
        const title = await element.title.getText()
        assert.strictEqual(title, "Your Cart")
        const product = await element.invItemName.getText()
        assert.strictEqual(product, productName)
        await element.checkout.click()
    }

    async fillInfo(){
        await browser.pause(1000)
        const title = await element.title.getText()
        assert.strictEqual(title, "Checkout: Your Information")
        await element.firstName.setValue('Umi')
        await element.lastName.setValue('Dewi')
        await element.postalCode.setValue('29876')
        await element.buttonContinue.click()
    }

    async checkoutOverview(){
        await browser.pause(1000)
        const title = await element.title.getText()
        assert.strictEqual(title, "Checkout: Overview")
        const product = await element.invItemName.getText()
        assert.strictEqual(product, productName)
        await element.buttonFinish.click()
    }

    async thankyouPage(){
        await browser.pause(1000)
        const title = await element.title.getText()
        assert.strictEqual(title, "Checkout: Complete!")
        const message = await element.headerComplete.getText()
        assert.strictEqual(message, "Thank you for your order!")
    }
    open () {
        return super.open('/inventory-item.html?id=4');
    }
}

module.exports = new ProductDetailPage();