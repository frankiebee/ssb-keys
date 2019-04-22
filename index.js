module.exports = function (encrypt, decrypt) {
  const keyOps = require('./key-operations')
  //import functions for loading/saving keys from storage
  const storage = require('./storage')(keyOps.generate, encrypt, decrypt)
  for(var key in storage) keyOps[key] = storage[key]
  return keyOps
}