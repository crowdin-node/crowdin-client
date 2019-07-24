const client = require('..')
const { isPlainObject } = require('lodash')

describe('crowdin-client', () => {
  test('is an object', () => {
    expect(isPlainObject(client)).toBe(true)
  })

  test('has async methods', async () => {
    client.projects.branches.getOne()
  })
})
