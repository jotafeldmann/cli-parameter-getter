const cliParameters = require('cli-parameter-getter').get()
 
const port = cliParameters.port
console.log(port)
// 1337 
 
const portParameter = cliParameters[0]
console.log(portParameter)
// { name: 'port', value: '1337' } 
 
const nameParameter = cliParameters[1]
console.log(nameParameter)
// { name: 'app-test', value: 'app-test' }