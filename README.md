# node-luhn

The Luhn Algorithm is used to validate various identitifcation numbers, such as credit card numbers and social insurance numbers.

A [Luhn (mod 10) algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm) module for credit card number validation.

## Install

```sh
$ npm install --save node-luhn
```


## Usage

```js
var isLuhn = require('node-luhn')

isLuhn('4441111111111114')
//=> true
```






