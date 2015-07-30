var utils = require('uo-node-utils');

module.exports = function (userOpts) {
  this.regexs = {
    'declaration': /(\S+(?:,?\s\S*)*?\s*\{)([\s\S]+?)\}+\s?}?/g,
    'remValue': /(-?[0-9]?[.]?[0-9]*)(rem)/g,
    'atSomething': /(@[\s\S]+?{)([\s\S]+?\})([\s]+?)\}/g,
    'singleComment': /(\/\/)(.*)(\n)/g,
		'multiComment': /\/[*][\s\S]*?[*]\//g,
  };

  this.stuffToReplace = {
    index: 0,
    arr: [{
      'id': 0,
      'content': null
    }]
  };

  this.atGeneral = [];

  if (this.opts.type === 'fs') {
    if (!utils.exist(this.opts.src))
      throw new Error ('"' + this.opts.src + '" cannot be found');

    this.data = utils.read.file(this.opts.src);
  }


  utils.silent = this.opts.silent;
};
