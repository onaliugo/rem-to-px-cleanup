var utils = require('uo-node-utils');
var cssbeautify = require('cssbeautify');

var Converter = function (opts) {
  this.init(opts);

  var css = utils.read.file(this.opts.src);

  // remove media-queries blocks
  css = css.replace(this.regexs.atMedia, function () {
    return '';
  }.bind(this));

  // convert declarations
  css = css.replace(this.regexs.declaration, function (base, selecteurs, declarations) {
    declarations = this.filter(declarations);
    declarations = this.toPx(declarations);

    if (!declarations.length)
      return '';

    return selecteurs + ' {\n' + declarations + '\n}';
  }.bind(this));


  // format
  css = cssbeautify(css, {
    indent: '  '
  });

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

/* createDist (str)
 * Take a string of final css in param
 * Create dist file */
Converter.prototype.createDist = require('./create-dist');


/* toPx (str) {}
 * Take css declarations with REM units as string in param
 * Return the same string, with each REM units converted into pixels */
Converter.prototype.toPx = require('./to-px');


module.exports = Converter;
