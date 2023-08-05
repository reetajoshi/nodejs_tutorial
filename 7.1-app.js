// Modules-encapsulated code
//CommonJs ,every file is module (by default)

const names = require('./4-name')
const sayHi =require('./5-util')
require('./6-alternative-flavor')
require('./7-mind-granade');
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)