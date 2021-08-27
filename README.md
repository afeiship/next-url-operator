# next-url-operator
> Operator for url.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-url-operator
```

## apis
| api            | params                      | description                        |
| -------------- | --------------------------- | ---------------------------------- |
| get            | (name: string)              | Get param by name.                 |
| gets           | -                           | Get all parmas.                    |
| set            | (name:string, value:string) | Set param value                    |
| sets           | (object:any)                | Update params value.               |
| update(public) | (object):string             | Update params and get the new url. |
| url(public)    | location.href               | The current url.                   |

## usage
```js
import NxUrlOperator from '@jswork/next-url-operator';

const op = new NxUrlOperator({ url: 'https://www.baidu.com?q=hello' });
const url = op.update({ q: 'world'});

//https://www.baidu.com?q=world

// static method
NxUrlOperator.update({
  q: 'hello'
});

// http://locahost?q=hello
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-url-operator/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-url-operator
[version-url]: https://npmjs.org/package/@jswork/next-url-operator

[license-image]: https://img.shields.io/npm/l/@jswork/next-url-operator
[license-url]: https://github.com/afeiship/next-url-operator/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-url-operator
[size-url]: https://github.com/afeiship/next-url-operator/blob/master/dist/next-url-operator.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-url-operator
[download-url]: https://www.npmjs.com/package/@jswork/next-url-operator
