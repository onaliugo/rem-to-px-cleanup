var utils = require('uo-node-utils');

module.exports = function (data) {
  if (!this._opts.optsPassed)
    return false;

  if (!data && this.opts.type === 'fs')
		data = utils.read.file(this.opts.cssFile);

  data = this.store.add(data, [
    this._opts.regexs.fontFace,
    this._opts.regexs.sAtRule,
    this._opts.regexs.sComment,
    this._opts.regexs.mComment,
    this._opts.regexs.mAtRule
  ]);

  data = this.convertRules(data);

  data = this.store.replace(data);

  data = this.convertMq(data);

  utils.create.file('./example/app-ie.css', data);
};
