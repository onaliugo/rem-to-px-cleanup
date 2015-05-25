var utils = require('uo-node-utils');
var cssbeautify = require('cssbeautify');

var Converter = function (opts) {
  this.init(opts);

  var css = utils.read.file(this.opts.src);

  css = this.storeAtRules(css);
  css = this.convert(css);
  css += this.atRules.join('\n');

  if (this.opts.format)
    css = cssbeautify(css, {
      indent: '  '
    });

  this.createDist(css);
  this.atRules = [];
};



/* init (obj) {}
 * Take an object of opts in param
 * Test if user css file exist
 * Extend opts and regexs */
Converter.prototype.init = require('./init');

/* storeAtRules (obj) {}
 * Take an string of css in param
 * Store @ rules to avoid .filter() to mess */
Converter.prototype.storeAtRules = require('./store-at-rules');

/* filter (str) {}
 * Take a string of declarations in param
 * Remove non-REM declarations
 * Convert others into pixels
 * Return a string */
Converter.prototype.filter = require('./filter');

/* createDist (str) {}
 * Take a string of final css in param
 * Create dist file */
Converter.prototype.createDist = require('./create-dist');

/* convert (str) {
 * Take a string of css in param
 * Same as filter(), then toPx() */
Converter.prototype.convert = require('./convert');

/* toPx (str) {}
 * Take css declarations with REM units as string in param
 * Return the same string, with each REM units converted into pixels */
Converter.prototype.toPx = require('./to-px');


module.exports = Converter;
