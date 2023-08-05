// Modules-encapsulated code
//CommonJs ,every file is module (by default)

const names = require('./4-name')
const sayHi =require('./5-util')
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)