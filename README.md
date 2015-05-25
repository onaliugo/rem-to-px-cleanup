# Cleanup REM to PX

Create a new stylesheet with **only** rem values converted.

*A [Gulp plugin](https://www.npmjs.com/package/gulp-rem-to-px-cleanup) is also available*


## Example

```js
var Converter = require('rem-to-px-cleanup');

// init Converter
var converter = new Converter({
  cssFile: 'example/app.css',
  baseFontSize: 14
});

// trigger convertion
converter.convert();
```

## Default options

```js
var defaultOpts = {
  trim: false, // boolean
  silent: false, // boolean
  baseFontSize: 16 // number
}
```
