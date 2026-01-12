const LoginPage = require('../../pageobjects/pages/LoginPage')
const { loginData } = require('../../data/login.data')

describe('@sanity - Login', () => {

  describe('Valid credentials', () => {
    loginData.validUsers.forEach((user) => {
      it(`should login successfully: ${user.description}`, async () => {
        await LoginPage.open()
        await LoginPage.login(user.username, user.password)

        await LoginPage.expectLoginSucceeded(user.expectedMessage)
        await expect(page.flashMessage).toHaveTextContaining('THIS SHOULD FAIL')
      })
    })
  })

  describe('Invalid credentials', () => {
    loginData.invalidUsers.forEach((user) => {
      it(`should NOT login: ${user.description}`, async () => {
        await LoginPage.open()
        await LoginPage.login(user.username, user.password)

        await LoginPage.expectLoginFailed(user.expectedMessage)
      })
    })
  })

})
