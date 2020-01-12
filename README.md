# node-luhn

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]

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






