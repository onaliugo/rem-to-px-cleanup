# Cleanup REM to PX

Create a new stylesheet with **only** rem values converted.



## Example

```js
var Converter = require('rem-to-px-cleanup');

new Converter({
  cssFile: 'example/app.css',
  baseFontSize: 14
});
```

## Default options

```js
var defaultOpts = {
  trim: false, // boolean
  silent: false, // boolean
  baseFontSize: 16 // number
}
```
