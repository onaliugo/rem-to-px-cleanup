var Converter = require('./lib/index');

new Converter({
  src: 'example/app.css',
  dist: 'example/app-ie.css',
  baseFontSize: 14
}).convert();
