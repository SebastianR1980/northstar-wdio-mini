const BasePage = require('../base/BasePage')
const LoginFormSection = require('../sections/LoginForm.section')

class LoginPage extends BasePage {
  constructor() {
    super()
    this.loginForm = new LoginFormSection()
  }

  async open() {
    await super.open('https://the-internet.herokuapp.com/login')
  }

  get flashMessage() {
    return $('#flash')
  }

  async login(username, password) {
    await this.loginForm.login(username, password)
  }
}

module.exports = new LoginPage()
