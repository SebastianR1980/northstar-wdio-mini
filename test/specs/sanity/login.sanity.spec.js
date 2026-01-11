const LoginPage = require('../../pageobjects/pages/LoginPage')

describe('Sanity - Login', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open()
    await LoginPage.login('tomsmith', 'SuperSecretPassword!')

    await expect(LoginPage.flashMessage).toBeDisplayed()
    await expect(LoginPage.flashMessage).toHaveText('You logged into a secure area!', { containing: true })
  })
})
