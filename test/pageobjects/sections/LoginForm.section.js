class LoginFormSection {
  get usernameInput() {
    return $('#username')
  }

  get passwordInput() {
    return $('#password')
  }

  get submitButton() {
    return $('button[type="submit"]')
  }

  async login(username, password) {
    await this.usernameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.submitButton.click()
  }
}

module.exports = LoginFormSection
