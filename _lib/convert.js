var cssbeautify = require('cssbeautify');

module.exports = function (str) {
	if (!str && this.opts.type === 'fs')
		str = this.data;

	str = this.storeatGeneral(str);
	str = this.convertRules(str);

	if (this.opts.format)
	  str = cssbeautify(str, {
	    indent: '  '
	  });

	if (this.opts.type === 'stream')
		return str;

	this.data = str;
	this.createDist();
};
