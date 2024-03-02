const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    errorLockedOutUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`),
    errorMessages: (message) => $(`//h3[text()="${message}"]`)
}

class LoginPage extends Page {

    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    async login2 (username , password) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(password);
        await element.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage) {
        await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }

    async validateInvalidLogin (message) {
        await element.errorMessages(message).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorMessages(message)).toBeDisplayed()
    }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();