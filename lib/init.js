var utils = require('uo-node-utils');

module.exports = function (userOpts) {
  this.opts = {
    trim: userOpts.trim || false,
    format: userOpts || true,
    silent: userOpts.silent || false,
    baseFontSize: userOpts.baseFontSize || 16,
    src: userOpts.cssFile
  };

  this.regexs = {
    declaration: /(\S+(?:,?\s\S*)*?\s*\{)([\s\S]+?)\}+\s?}?/g,
    remValue: /(-?[0-9]?[.]?[0-9]*)(rem)/g,
    atSomething: /(@[\s\S]+?{)([\s\S]+?\})([\s]+?)\}/g
  };

  this.atRules = [];

  if (!utils.exist(this.opts.src))
    throw new Error ('"' + this.opts.src + '" cannot be found');

  utils.silent = this.opts.silent;
};
