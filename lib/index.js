var utils = require('uo-node-utils');
var cssbeautify = require('cssbeautify');

var Converter = function (opts) {
  this.init(opts);

  var css = utils.read.file(this.opts.src);
  var atRules = [];


  // store at-rules
  css = css.replace(this.regexs.atSomething, function (base, selecteurs, declarations) {
    selecteurs = this.toPx(selecteurs);
    declarations = this.convert(declarations);

    if (utils.trim(declarations).length)
      atRules.push(selecteurs + declarations + '\n}');

    return '';
  }.bind(this));


  // convert declarations
  css = this.convert(css);

  // merge atRules
  css += atRules.join('\n');


  // format
  css = cssbeautify(css, {
    indent: '  '
  });

  // dist
  this.createDist(css);
};



/* init (obj) {}
 * Take an object of opts in param
 * Test if user css file exist
 * Extend opts and regexd */
Converter.prototype.init = require('./init');

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
