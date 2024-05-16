# cli-parameter-getter [![Node.js CI](https://github.com/jotafeldmann/cli-parameter-getter/actions/workflows/node.js.yml/badge.svg)](https://github.com/jotafeldmann/cli-parameter-getter/actions/workflows/node.js.yml)

[![https://www.npmjs.com/package/cli-parameter-getter](https://img.shields.io/npm/v/cli-parameter-getter.svg?logo=npm)](https://www.npmjs.com/package/cli-parameter-getter)
[![https://img.shields.io/npm/dt/cli-parameter-getter.svg](https://img.shields.io/npm/dt/cli-parameter-getter.svg)](https://www.npmjs.com/package/cli-parameter-getter)

From CLI you can get any parameter from it order or parameter name. Node.js version >= 6

```bash
npm install cli-parameter-getter
```

## Examples

### Get a parameter from it order

- You can use this:

```bash
node index.js 1337
```

- Implementing this way:

```javascript
const cliParameters = require('cli-parameter-getter').get()
 
const portParameter = cliParameters[0]
console.log(portParameter)
// { name: '1337', value: '1337' } 
```

### Get a parameter from it name or order

- You can use this:

```bash
node index.js port=1337
```

- Implementing this way:

```javascript
const cliParameters = require('cli-parameter-getter').get()
 
const port = cliParameters.port
console.log(port)
// 1337 
 
const portParameter = cliParameters[0]
console.log(portParameter)
// { name: 'port', value: '1337' }
```


### Get a parameter from mixed situations

- You can use this:

```bash
node index.js port=1337 app-test
```

- Implementing this way:

```javascript
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
```

You can test the package:

- From [your browser on Repl.it](https://repl.it/@jotafeldmann/cli-parameter-getter)
- From [your browser on RunKit](https://runkit.com/jotafeldmann/cli-parameter-getter-example)

## How to dev

- Releases
```
npx release-it
```
