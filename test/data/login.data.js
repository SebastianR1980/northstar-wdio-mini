const loginData = {
  validUsers: [
    {
      description: 'valid user with correct credentials',
      username: 'tomsmith',
      password: 'SuperSecretPassword!',
      expectedMessage: 'You logged into a secure area!'
    }
  ],

  invalidUsers: [
    {
      description: 'invalid password',
      username: 'tomsmith',
      password: 'wrong_pass',
      expectedMessage: 'Your password is invalid!'
    },
    {
      description: 'invalid user',
      username: 'wrong_username',
      password: 'SuperSecretPassword!',
      expectedMessage: 'Your username is invalid!'
    }
  ]
}

module.exports = { loginData }
