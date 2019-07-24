// This module exports a generic function for making HTTP requests.
// Each operation is bound to this function

module.exports = async function operate () {
  console.log('arguments', arguments)
  console.log('operate', this)
}
