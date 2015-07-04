---
template: default.ejs
theme: dark
title: unexpected-color
repository: https://github.com/unexpectedjs/unexpected-color
---

# Unexpected-color

This module extends the
[Unexpected](https://github.com/unexpectedjs/unexpected) assertion
library with support for comparing colors via [one.color](https://github.com/One-com/one-color).

[![NPM version](https://badge.fury.io/js/unexpected-color.svg)](http://badge.fury.io/js/unexpected-color)
[![Build Status](https://travis-ci.org/unexpectedjs/unexpected-color.svg?branch=master)](https://travis-ci.org/unexpectedjs/unexpected-color)
[![Coverage Status](https://coveralls.io/repos/unexpectedjs/unexpected-color/badge.svg)](https://coveralls.io/r/unexpectedjs/unexpected-color)
[![Dependency Status](https://david-dm.org/unexpectedjs/unexpected-color.svg)](https://david-dm.org/unexpectedjs/unexpected-express)

```javascript
expect('blue', 'to be colored', '#2233ff');
```

```output
expected 'blue' to be colored '#2233ff'

#0000ff#2233ff
```

## How to use

### Node

Install it with NPM or add it to your `package.json`:

```
$ npm install knockout unexpected unexpected-color
```

Then:

```javascript#evaluate:false
var expect = require('unexpected').clone();
expect.installPlugin(require('unexpected-color'));
```

### Browser

Include the `unexpectedColor.min.js` found at the lib directory of this
repository after unexpected itself:

```html
<script src="unexpected.js"></script>
<script src="unexpected-color.js"></script>
```

And then go on to install the plugin:

```javascript#evaluate:false
var expect = weknowhow.expect.clone();
expect.installPlugin(unexpectedColor);
```

### RequireJS

Include the library with RequireJS the following way:

```javascript#evaluate:false
define(['unexpected', 'unexpected-color'], funtion (unexpected, unexpectedColor) {
    var expect = unexpected.clone();
    expect.installPlugin(unexpectedColor);
    // Your code
});
```
