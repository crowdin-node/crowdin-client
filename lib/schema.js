// https://support.crowdin.com/enterprise/api/
// https://support.crowdin.com/assets/api/enterprise.yml

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const deref = require('json-schema-deref-sync')

const schemaPath = path.join(__dirname, '../schema.yml')
const schemaData = yaml.safeLoad(fs.readFileSync(schemaPath, 'utf8'))
const schema = deref(schemaData)

module.exports = schema
