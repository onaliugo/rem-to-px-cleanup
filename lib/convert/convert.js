var utils = require('uo-node-utils');
var cssbeautify = require('cssbeautify');

module.exports = function (data) {
  if (!this._opts.optsPassed)
    return false;

  if (!data && this.opts.type === 'fs')
		data = utils.read.file(this.opts.src);

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

  if (this.opts.format)
	  data = cssbeautify(data, {
	    indent: '  '
	  });

  if (this.opts.type === 'fs')
    return utils.create.file(this.opts.dist, data);
  else
		return data;
};
