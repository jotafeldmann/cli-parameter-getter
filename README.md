# cli-parameter-getter [![CircleCI](https://circleci.com/gh/jotafeldmann/cli-parameter-getter.svg?style=svg)](https://circleci.com/gh/jotafeldmann/cli-parameter-getter)

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

You can test the example directly from:

- The repo:

```bash
git clone https://github.com/jotafeldmann/cli-parameter-getter
cd examples
npm install
node example.js port=1337 app-test
```

- From [your browser on RunKit](https://runkit.com/jotafeldmann/cli-parameter-getter-example)

## How to dev

- Releases
```
npx release-it
```

## Links

- [Circle CI](https://circleci.com/gh/jotafeldmann/cli-parameter-getter)
