const LoginPage = require('../../pageobjects/pages/LoginPage')
const { loginData } = require('../../data/login.data')

describe('Sanity - Login', () => {

  describe('Valid credentials', () => {

    loginData.validUsers.forEach((user) => {

      it(`should login successfully: ${user.description}`, async () => {
        await LoginPage.open()
        await LoginPage.login(user.username, user.password)

        await expect(LoginPage.flashMessage).toBeDisplayed()
        await expect(LoginPage.flashMessage).toHaveText(user.expectedMessage, { containing: true })


      })

    })

  })

  describe('Invalid credentials', () => {

    loginData.invalidUsers.forEach((user) => {

      it(`should NOT login: ${user.description}`, async () => {
        await LoginPage.open()
        await LoginPage.login(user.username, user.password)

        await expect(LoginPage.flashMessage).toBeDisplayed()
        await expect(LoginPage.flashMessage).toHaveText(user.expectedMessage, { containing: true })


      })

    })

  })

})