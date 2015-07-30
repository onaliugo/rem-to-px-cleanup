var utils = require('uo-node-utils');

module.exports = function (data) {
  if (!this._opts.optsPassed)
    return false;

  if (!data && this.opts.type === 'fs')
		data = utils.read.file(this.opts.cssFile);

  data = this.store.add(data, [
    this._opts.regexs.sComment,
    this._opts.regexs.mComment,
    this._opts.regexs.sAtRule
  ]);

  data = this.store.replace(data);

  utils.create.file('./example/app-ie.css', data);
};
