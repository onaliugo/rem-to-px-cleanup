var Utils = require('uo-node-utils');

var Converter = function (userOpts) {

  this.regexs = {
    declaration: /(^.*{)([\S\s]*?)(})/gm,
    remValue: /(([0-9]|[.])+(\.[0-9][0-9]?)?)(rem)/g
  };

  this.opts = {
    silent: userOpts.silent || false,
    baseFontSize: userOpts.baseFontSize || 16
  };

  Utils.silent = this.opts.silent;

  var self = this;
  var userCss = Utils.read.file(userOpts.cssFile);

  var cssBlocks = userCss.replace(this.regexs.declaration, function ($1, $2, $3, $4) {
    var declarations = $3.split('\n');
    var declarationsArr = [];

    declarations.forEach(function (declaration) {
      if (declaration.indexOf('rem') === -1)
        return;

      declaration = self.toPx(declaration);
      declarationsArr.push('\n' + declaration);
    });

    declarationsArr = declarationsArr.filter(function (declaration) {
      return declaration;
    });

    if (declarationsArr.length)
      return $2 + declarationsArr.join('') + '\n' + $4;

    return '';
  });

  Utils.create.file(userOpts.cssFile.replace('.css', '-ie.css'), cssBlocks);
};


Converter.prototype.toPx = function (str) {
  var self = this;

  return str.replace(this.regexs.remValue, function ($1, $2, $3, $4, $5) {
    var unitValue = parseFloat($2 * self.opts.baseFontSize).toFixed(2);
    return unitValue + 'px';
  });
};

module.exports = Converter;
