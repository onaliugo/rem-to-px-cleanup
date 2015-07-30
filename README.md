# Cleanup REM to PX

Create a new stylesheet with **only** rem values converted.

*A [Gulp plugin](https://www.npmjs.com/package/gulp-rem-to-px-cleanup) is also available*


## Example

```js
var Converter = require('rem-to-px-cleanup');

// init Converter
var converter = new Converter({
  src: 'example/app.css',
  dist: 'example/app-ie.css',
  baseFontSize: 14
});

// trigger convertion
converter.convert();
```

## Default options

```js
var defaultOpts = {
  src: null,
  dist: null,
  format: true,
  silent: false,
  baseFontSize: 16,
  type: 'fs' // 'fs' || 'stream'
}
```

## Example

#### Input (app.css)

```css
.Component {
  width: 40rem;
  height: 20px;
  margin: 0 auto;
}

.Component-child {
  padding: 0 2rem;
  background-color: blue;
}

.OtherComponent {
  display: inline-block;
  width: 50%;
  margin: 0 auto;
}

@media screen and (max-width: 30rem) {
  .Component {
    width: 80%;
    padding: 1rem;
  }

  .Component-child {
    width: 100%;
    padding: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    width: 1rem;
  }

  100% {
    transform: rotate(360deg);
    width: 2rem;
  }
}

```



#### Output

```css
.Component {
  width: 560px;
}

.Component-child {
  padding: 0 28px;
}

@media screen and (max-width: 420px) {
  .Component {
    padding: 14px;
  }
}

@keyframes spin {
  0% {
    width: 14px;
  }

  100% {
    width: 28px;
  }
}
```
