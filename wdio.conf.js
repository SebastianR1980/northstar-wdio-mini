const isCI = process.env.CI === 'true'

exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  suites: {
    sanity: ['./test/specs/sanity/**/*.js']
  },

  maxInstances: 1,
  automationProtocol: 'webdriver',

  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--window-size=1920,1080',
        ...(isCI ? [
          '--headless=new',
          '--disable-gpu',
          '--no-sandbox',
          '--disable-dev-shm-usage'
        ] : [])
      ]
    }
  }],

  logLevel: 'warn',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
