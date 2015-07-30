var utils = require('uo-node-utils');
var errorsManager = require('./errors-manager');

module.exports = function () {
  var opts = this.opts;
  var errors = new errorsManager();

  if (typeof opts.baseFontSize !== 'number')
    errors.log('baseFontSize isn\'t a number.', 'opts.baseFontSize');

  if (opts.type !== "fs" && opts.type !== "stream")
    errors.log('Type isn\'t "fs" or "stream".', 'opts.type');

  if (this.opts.type === 'fs' && !utils.exist(this.opts.cssFile))
    errors.log('"' + this.opts.cssFile + '" cannot be found', 'opts.cssFile');

  this._opts.optsPassed = errors.errors === 0;
  return this;
};
