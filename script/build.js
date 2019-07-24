#!/usr/bin/env node

const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()
const yaml = require('js-yaml')
const operations = require('../lib/operations')

console.log(`

`)
operations.forEach(operation => {
  const heading = `${operation.operationId}${operation.signature}`
  const slug = slugger.slug(heading)
  console.log(`- [${heading}](#${slug})`)
})

operations.forEach(operation => {
  console.log(`\n\n## ${operation.operationId}${operation.signature}`)
  console.log(`> ${operation.summary}\n`)

  console.log('**Parameters**')
  console.log("```yml")
  console.log(yaml.safeDump(operation.parameters))
  console.log("```")
})