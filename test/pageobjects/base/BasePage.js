class BasePage {
  async open(path = '') {
    await browser.url(path)
  }

  /**
   * Wait helper to avoid raw pauses.
   * conditionFn must return true when condition is met.
   */
  async waitUntil(conditionFn, { timeout = 10000, interval = 200, timeoutMsg = 'waitUntil timeout' } = {}) {
    await browser.waitUntil(conditionFn, { timeout, interval, timeoutMsg })
  }
}

module.exports = BasePage
