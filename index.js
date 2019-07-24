const { set } = require('lodash')
const operate = require('./lib/operate')
const operations = require('./lib/operations')
const client = {}

operations.forEach(operation => {
  set(client, operation.operationId, operate.bind(operation))
  set(client, operation.operationId + '.operation', operation)
})

module.exports = client
