var utils = require('uo-node-utils');

module.exports = function (data) {
  if (!this._opts.optsPassed)
    return false;

  if (!data && this.opts.type === 'fs')
		this.data = utils.read.file(this.opts.cssFile);

  console.log(this.data);
};
