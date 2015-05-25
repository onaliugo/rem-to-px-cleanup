var utils = require('uo-node-utils');

module.exports = function (css) {
  return css.replace(this.regexs.declaration, function (base, selecteurs, declarations) {
    declarations = this.filter(declarations);
    declarations = this.toPx(declarations);

    if (!utils.trim(declarations).length)
      return '';

    return selecteurs + '\n' + declarations + '\n}';
  }.bind(this));
};
