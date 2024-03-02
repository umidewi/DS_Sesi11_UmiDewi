const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const productdetailpage = require('../pageobjects/productdetailpage.js');

Given(/^Umi is on the login page$/, async () => {
    await LoginPage.open()
})

//For case valid credential
When(/^Umi login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Umi should see home page$/, async() => {
    await HomePage.validateHomePage()
})

//For case invalid credential
When (/^Umi login with (.*) and (.*)$/, async (username,password) => {
    await LoginPage.login2(username,password)
})

Then (/^Umi should see error (.*)$/, async (message) => {
    await LoginPage.validateInvalidLogin(message)
})

// For Case Add to Cart
Given(/^Umi is on the product page$/, async () => {
    await HomePage.open()
})

When (/^Umi click product name$/, async() => {
    await HomePage.selectProduct()
})

Then (/^Umi should see product detail page$/, async() => {
    await productdetailpage.validateProductDetailPage()
})

When (/^Umi click icon cart$/, async() => {
    await productdetailpage.clickCart()
})

When (/^Umi click button checkout$/, async() => {
    await productdetailpage.clickCheckout()
})

When (/^Umi fill information$/, async() => {
    await productdetailpage.fillInfo()
})

When (/^Umi click continue$/, async() => {
    await productdetailpage.checkoutOverview()
})

Then (/^Umi should see thank you page$/, async() => {
     await productdetailpage.thankyouPage()
})





