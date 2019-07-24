// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'node_modules/',
    'vendor/'
  ],
  testMatch: [
    '**/tests/*.js'
  ]
}
