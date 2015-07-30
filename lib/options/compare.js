var utils = require('uo-node-utils');
var errorsManager = require('./errors-manager');

module.exports = function () {
  var opts = this.opts;
  var errors = new errorsManager();

  if (typeof opts.baseFontSize !== 'number')
    errors.log('baseFontSize isn\'t a number.', 'opts.baseFontSize');

  if (opts.type !== "fs" && opts.type !== "stream")
    errors.log('Type isn\'t "fs" or "stream".', 'opts.type');

  if (this.opts.type === 'fs' && !utils.exist(this.opts.src))
    errors.log('"' + this.opts.src + '" cannot be found', 'opts.src');

  if (this.opts.type === 'fs' && !this.opts.dist)
    errors.log('Dist isn\'t valid', 'opts.dist');

  this._opts.optsPassed = errors.errors === 0;
  return this;
};
