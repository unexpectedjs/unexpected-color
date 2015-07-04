Passes if the subject and the argument are parsable as color strings and
represent the same color.

```javascript
expect('#f00', 'to be colored', 'red');
```

In case of a failing expectation you get the following output:

```javascript
expect('rgb(0, 100, 32)', 'to be colored', 'yellow');
```

```output
expected 'rgb(0, 100, 32)' to be colored 'yellow'

#006420#ffff00
```

```js
expect('red', 'not to be colored', 'yellow');
```
